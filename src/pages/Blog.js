// BlogPage.jsx - Main blog page to integrate with your existing routing
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    Breadcrumbs,
    CircularProgress
} from '@mui/material';
import BlogList from '../components/blogs/BlogList.js';
import BlogDetail from '../components/blogs/BlogDetail.js';

import '../styles/blog-styles.css'

// Sample data - replace with your actual data source
import { blogPosts } from '../components/blogs/BlogData.js';

const BlogPage = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    // Fetch blog posts - replace with your actual data fetching logic
    useEffect(() => {
        // Simulate API call
        const fetchPosts = async () => {
            try {
                // In a real app, you would fetch from your API:
                // const response = await fetch('/api/blog-posts');
                // const data = await response.json();

                // For now, we'll use the sample data with a timeout to simulate a network request
                setTimeout(() => {
                    setPosts(blogPosts);
                    setLoading(false);
                }, 500);
            } catch (err) {
                console.error('Error fetching blog posts:', err);
                setError('Failed to load blog posts. Please try again later.');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Handle navigation

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
                <CircularProgress />
                <Typography sx={{ mt: 2 }}>Loading blog posts...</Typography>
            </Container>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
                <Typography variant="h5" color="error" gutterBottom>
                    {error}
                </Typography>
                <Typography>
                    Please try refreshing the page or check back later.
                </Typography>
            </Container>
        );
    }

    return (
        <Box
        id="blog-body"
            // sx={{
            //     bgcolor: 'background.paper',
            //     minHeight: '100vh',
            //     pt: 3,
            //     pb: 8
            // }}
        >
            <Container maxWidth="lg">
                {/* Breadcrumbs navigation */}
                <Breadcrumbs sx={{ mb: 4 }}>    
                </Breadcrumbs>

                {/* Render either list or detail view based on URL */}
                {postId ? (
                    <BlogDetail
                        post={posts.find(post => post.id.toString() === postId)}
                        onBack={() => navigate('/blog')}
                    />
                ) : (
                    <>
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                mb: 4
                            }}
                        >
                            My BlogSpot
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            color="text.secondary"
                            sx={{ maxWidth: '700px', mx: 'auto', mb: 6 }}
                        >
                            Stay updated with our latest news, tutorials, and insights about web development, React, and UI design.
                        </Typography>
                        <BlogList posts={posts} />
                    </>
                )}
            </Container>
        </Box>
        // </MainLayout>
    );
};

export default BlogPage;

// Sample blog data file (blogData.js) - replace with your actual data source
