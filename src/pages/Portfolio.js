import React, { useState } from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    CardMedia,
    Grid,
    Button,
    Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// Import images
import * as Images from '../components/Images.js'


// Styles
import '../styles/portfolio-styles.css'

// {Prtfolio items based on current portfolio
const portfolioItems = [
    {
        id: 1,
        title: 'NASA Website',
        description: 'My first website created',
        date: 'Created on August 28th, 2022',
        image: Images.NASA,
        link: 'https://ethan-w-foshee.github.io/NASAlanding/',
        repoLink: 'https://github.com/ethan-w-foshee/NASAlanding',
        technologies: ['HTML', 'CSS']
    },
    {
        id: 2,
        title: 'Responsive Website',
        description: 'My first RESPONSIVE website created',
        date: 'Created on September 1st, 2022',
        image: Images.Response,
        link: 'https://ethan-w-foshee.github.io/First-Responsive-Website/',
        repoLink: 'https://github.com/ethan-w-foshee/First-Responsive-Website',
        technologies: ['HTML', 'CSS', 'Responsive Design']
    },
    {
        id: 3,
        title: 'Calculator App',
        description: 'A Calculator using Basic Javascript',
        date: 'Created on September 13th, 2022',
        image: Images.Calc,
        link: 'https://ethan-w-foshee.github.io/calculator-app-101/',
        repoLink: 'https://github.com/ethan-w-foshee/calculator-app-101',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: 4,
        title: 'Even and Odd List',
        description: 'An Even and Odd List for inputting HTML',
        date: 'Created on September 20th, 2022',
        image: Images.EvenOdd,
        link: 'https://ethan-w-foshee.github.io/evenOdd-lists/',
        repoLink: 'https://github.com/ethan-w-foshee/evenOdd-lists',
        technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation']
    },
    {
        id: 5,
        title: 'Hair Salon Website',
        description: 'A Hair Salon Website',
        date: 'Started on September 15th, 2022, and finished on September 23rd, 2022',
        image: Images.Hair,
        link: 'https://ethan-w-foshee.github.io/hair-salon/',
        repoLink: 'https://github.com/ethan-w-foshee/hair-salon',
        technologies: ['HTML', 'CSS', 'Responsive Design']
    },
    {
        id: 6,
        title: 'To-Do List',
        description: 'A Dummy To-Do List, for testing fetches, and filters',
        date: 'Created on September 27th, 2022',
        image: Images.TODO,
        link: 'https://ethan-w-foshee.github.io/dummyDataToDoList/',
        repoLink: 'https://github.com/ethan-w-foshee/dummyDataToDoList',
        technologies: ['HTML', 'CSS', 'JavaScript', 'API', 'Fetch']
    },
    {
        id: 7,
        title: 'Tic-Tac-Toe',
        description: 'TIC-TAC-TOE using JavaScript',
        date: 'Started on September 8th, 2022, and finished on September 27th, 2022',
        image: Images.TTT,
        link: 'https://ethan-w-foshee.github.io/TicTacToe-101/',
        repoLink: 'https://github.com/ethan-w-foshee/TicTacToe-101',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Game Logic']
    }
];

const Portfolio = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box id="portbody" sx={{ maxWidth: "100vw", margin: '0 auto', padding: 2, bgcolor: '#f5f5f5', minHeight: '80vh' }}>
            <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                    color: '#333',
                    pt: 2
                }}
            >
                My Portfolio
            </Typography>

            {portfolioItems.map((item) => (
                <Accordion
                    key={item.id}
                    expanded={expanded === `panel${item.id}`}
                    onChange={handleChange(`panel${item.id}`)}
                    sx={{
                        mb: 2,
                        boxShadow: 2,
                        '&:before': { display: 'none' }, // Remove the default line
                        borderRadius: '8px',
                        overflow: 'hidden',
                        '&.Mui-expanded': {
                            borderRadius: '8px',
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${item.id}-content`}
                        id={`panel${item.id}-header`}
                        sx={{
                            backgroundColor: expanded === `panel${item.id}` ? '#e3f2fd' : 'rgba(0, 0, 0, 0.03)',
                            borderBottom: expanded === `panel${item.id}` ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
                            minHeight: 64,
                            '&:hover': {
                                backgroundColor: '#e3f2fd',
                            }
                        }}
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: expanded === `panel${item.id}` ? 'bold' : 'normal' }}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 0 }}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} md={5}>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{ height: '100%', minHeight: 250, objectFit: 'cover' }}
                                />
                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="body1" paragraph>
                                        {item.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                                            {item.date}
                                        </Typography>
                                    </Box>

                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                        Technologies:
                                    </Typography>
                                    <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {item.technologies.map((tech, index) => (
                                            <Typography
                                                key={index}
                                                variant="body2"
                                                sx={{
                                                    py: 0.5,
                                                    px: 1.5,
                                                    bgcolor: 'rgba(25, 118, 210, 0.1)',
                                                    borderRadius: 5,
                                                    border: '1px solid rgba(25, 118, 210, 0.2)',
                                                    color: 'primary.main',
                                                    display: 'inline-block'
                                                }}
                                            >
                                                {tech}
                                            </Typography>
                                        ))}
                                    </Box>

                                    <Divider sx={{ mb: 2 }} />

                                    <Box sx={{ display: 'flex', gap: 2 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            href={item.link}
                                            target="_blank"
                                            startIcon={<LaunchIcon />}
                                            sx={{ borderRadius: 2 }}
                                        >
                                            View Live
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            href={item.repoLink}
                                            target="_blank"
                                            startIcon={<CodeIcon />}
                                            sx={{ borderRadius: 2 }}
                                        >
                                            View Code
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default Portfolio;