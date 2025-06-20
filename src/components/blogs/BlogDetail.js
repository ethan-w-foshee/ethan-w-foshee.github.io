// BlogDetail.jsx - Component for individual blog post detail page
import React from 'react';
import {
    Typography,
    Box,
    Button,
    Chip,
    Divider,
    Paper,
    Container
} from '@mui/material';
import { ArrowBack, CalendarToday, Person } from '@mui/icons-material';

const BlogDetail = ({ post, onBack }) => {
    // If post not found
    if (!post) {
        return (
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Post Not Found
                    </Typography>
                    <Typography paragraph>
                        The blog post you're looking for doesn't exist or has been moved.
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<ArrowBack />}
                        onClick={onBack}
                    >
                        Back to Blog
                    </Button>
                </Paper>
            </Container>
        );
    }

    return (
        <Box>
            <Button
                startIcon={<ArrowBack />}
                onClick={onBack}
                sx={{ mb: 2 }}
            >
                Back to All Posts
            </Button>

            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2rem', md: '2.5rem' }
                }}
            >
                {post.title}
            </Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                mb: 2,
                color: 'text.secondary'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarToday fontSize="small" />
                    <Typography variant="body2">{post.date}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Person fontSize="small" />
                    <Typography variant="body2">{post.author}</Typography>
                </Box>
            </Box>

            {post.tags && (
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {post.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            sx={{
                                borderRadius: '4px',
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'white'
                                }
                            }}
                        />
                    ))}
                </Box>
            )}

            <Divider sx={{ mb: 4 }} />

            {/* Render HTML content safely */}
            <Box
                className="blog-content"
                sx={{
                    '& p': {
                        mb: 2,
                        lineHeight: 1.8,
                        fontSize: '1.05rem'
                    },
                    '& h2': {
                        mt: 4,
                        mb: 2,
                        fontWeight: 'bold',
                        fontSize: '1.8rem'
                    },
                    '& pre': {
                        bgcolor: 'background.paper',
                        p: 2,
                        borderRadius: 1,
                        overflow: 'auto',
                        mb: 3,
                        border: '1px solid',
                        borderColor: 'divider'
                    },
                    '& a': {
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    },
                    '& img': {
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: 1,
                        my: 2
                    },
                    '& ul, & ol': {
                        pl: 4,
                        mb: 2
                    }
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share and comment section could be added here */}
        </Box>
    );
};

export default BlogDetail;