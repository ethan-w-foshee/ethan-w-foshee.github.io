// BlogPost.jsx - Individual blog post component for the list view
import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActions,
    Button,
    Box,
    Chip,
    Divider,
    useTheme,
    alpha
} from '@mui/material';
import { CalendarToday, Person, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ post }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleReadMore = () => {
        navigate(`/blog/${post.id}`);
    };

    return (
        <Card
            sx={{
                mb: 4,
                maxWidth: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                {post.featuredImage && (
                    <CardMedia
                        component="img"
                        sx={{
                            width: { xs: '100%', md: '300px' },
                            height: { xs: '200px', md: '100%' },
                            objectFit: 'cover'
                        }}
                        image={post.featuredImage}
                        alt={post.title}
                    />
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <CardContent sx={{ flex: '1 0 auto', p: 3 }}>
                        {post.tags && (
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                                {post.tags.map((tag, index) => (
                                    <Chip
                                        key={index}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            color: 'primary.main',
                                            fontWeight: 500,
                                            fontSize: '0.7rem',
                                            height: '24px'
                                        }}
                                    />
                                ))}
                            </Box>
                        )}

                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                lineHeight: 1.3,
                                mb: 1
                            }}
                        >
                            {post.title}
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                mb: 2,
                                color: 'text.secondary',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <CalendarToday fontSize="small" sx={{ fontSize: '0.9rem' }} />
                                <Typography variant="body2">{post.date}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Person fontSize="small" sx={{ fontSize: '0.9rem' }} />
                                <Typography variant="body2">{post.author}</Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ mb: 2 }} />

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 2, lineHeight: 1.7 }}
                        >
                            {post.excerpt}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ px: 3, pb: 3, pt: 0 }}>
                        <Button
                            size="small"
                            color="primary"
                            endIcon={<ArrowForward />}
                            onClick={handleReadMore}
                            sx={{
                                fontWeight: 500,
                                '&:hover': {
                                    backgroundColor: alpha(theme.palette.primary.main, 0.1)
                                }
                            }}
                        >
                            Read More
                        </Button>
                    </CardActions>
                </Box>
            </Box>
        </Card>
    );
};

export default BlogPost;