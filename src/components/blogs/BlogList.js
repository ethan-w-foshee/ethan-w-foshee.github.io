// BlogList.jsx - Component to display multiple blog posts
import React, { useState } from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
    Pagination,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import { Search } from '@mui/icons-material';
import BlogPost from './BlogPost.js';

const BlogList = ({ posts }) => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const postsPerPage = 4;

    // Filter posts based on search term and category filter
    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'all' || (post.tags && post.tags.includes(filter));
        return matchesSearch && matchesFilter;
    });

    // Get unique tags for filter dropdown
    const allTags = [...new Set(posts.flatMap(post => post.tags || []))];

    // Paginate posts
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo(0, 0);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
                Our Blog
            </Typography>

            {/* Search and filter */}
            <Box sx={{ mb: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <TextField
                    label="Search Posts"
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ flexGrow: 1, minWidth: '200px' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />

                <FormControl sx={{ minWidth: '150px' }}>
                    <InputLabel>Filter by Tag</InputLabel>
                    <Select
                        value={filter}
                        label="Filter by Tag"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <MenuItem value="all">All Posts</MenuItem>
                        {allTags.map(tag => (
                            <MenuItem key={tag} value={tag}>{tag}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            {/* Display number of results */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
            </Typography>

            {/* Blog posts grid */}
            <Grid container spacing={4}>
                {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                        <Grid item xs={12} key={post.id}>
                            <BlogPost post={post} />
                        </Grid>
                    ))
                ) : (
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center" sx={{ my: 4 }}>
                            No posts found. Try a different search term or filter.
                        </Typography>
                    </Grid>
                )}
            </Grid>

            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                        count={Math.ceil(filteredPosts.length / postsPerPage)}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </Box>
            )}
        </Container>
    );
};

export default BlogList;