export const blogPosts = [
    {
        id: 1,
        title: 'Getting Started with React and Material UI',
        author: 'Jane Doe',
        date: 'April 15, 2025',
        tags: ['React', 'Material UI', 'Frontend'],
        excerpt: 'Learn how to quickly set up a new React project with Material UI components and create beautiful, responsive user interfaces.',
        content: `
      <p>Material UI is one of the most popular component libraries for React, offering a comprehensive suite of UI tools based on Google's Material Design.</p>
      <p>In this tutorial, we'll walk through the process of setting up a new React project with Material UI, exploring the core components, and building a responsive layout.</p>
      <h2>Installation</h2>
      <p>To get started, you'll need to install the required packages:</p>
      <pre><code>npm install @mui/material @emotion/react @emotion/styled @mui/icons-material</code></pre>
      <p>These packages provide the core components, styling solutions, and icon set you'll need for most projects.</p>
      <h2>Creating Your First Component</h2>
      <p>Let's create a simple card component to display information:</p>
      <pre><code>import { Card, CardContent, Typography } from '@mui/material';

function InfoCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Hello Material UI
        </Typography>
        <Typography variant="body2">
          This is your first Material UI component!
        </Typography>
      </CardContent>
    </Card>
  );
}</code></pre>
      <p>Material UI makes it simple to create consistent, beautiful interfaces with minimal effort.</p>
    `,
        featuredImage: 'https://source.unsplash.com/random/900×700/?react'
    },
    {
        id: 2,
        title: 'Optimizing Performance in React Applications',
        author: 'John Smith',
        date: 'April 10, 2025',
        tags: ['React', 'Performance', 'Frontend'],
        excerpt: 'Discover practical techniques to improve the performance of your React applications and deliver a better user experience.',
        content: `
      <p>Performance optimization is crucial for delivering a smooth user experience in React applications.</p>
      <p>In this post, we'll explore several proven techniques to identify and resolve performance bottlenecks.</p>
      <h2>Using React.memo for Component Memoization</h2>
      <p>React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders:</p>
      <pre><code>const MyComponent = React.memo(function MyComponent(props) {
  // Your component logic
});</code></pre>
      <h2>Implementing Code Splitting</h2>
      <p>Code splitting allows you to break up your code into smaller chunks which can be loaded on demand:</p>
      <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));</code></pre>
      <p>This can significantly improve initial load times for larger applications.</p>
    `,
        featuredImage: 'https://source.unsplash.com/random/900×700/?code'
    }
    // Add more blog posts as needed
];