import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SxProps } from '@mui/material/styles';

// Define styles for the homepage
const styles: Record<string, SxProps> = {
  heroSection: {
    textAlign: 'center',
    marginBottom: '2rem',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    color: '#333333',
    padding: '2rem',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  scrollingContainer: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    position: 'relative',
    whiteSpace: 'nowrap', // Prevent wrapping of images
  },
  scrollingContent: {
    display: 'flex',
    animation: 'scroll 30s linear infinite', // Continuous scroll with no stop
  },
  scrollingItem: {
    flexShrink: 0,
    width: '300px',
    marginRight: '1rem',
  },
  dishImage: {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
};

// Keyframes for infinite scrolling animation
const keyframes = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}`;

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  
  // Sample images for the scrolling menu
  const dishImages = [
    'dish1.jpg',
    'dish2.jpg',
    'dish3.jpg',
    'dish4.jpg',
    'dish5.jpg',
    'dish6.jpg',
    'dish7.jpg',
  ];

  // Create a duplicated array of images to simulate infinite scrolling
  const duplicatedDishImages = [...dishImages, ...dishImages];

  return (
    <>
      <style>{keyframes}</style>
      <Container>
        {/* Hero Section */}
        <div style={styles.heroSection as React.CSSProperties}>
          <Typography variant="h2" sx={styles.heroTitle}>
            Welcome to Our Restaurant
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate('/menu')}
          >
            Explore Our Menu
          </Button>
        </div>

        {/* Featured Dishes with Infinite Scrolling */}
        <section>
          <Typography variant="h4" style={{ marginBottom: '1rem', color: '#555' }}>
            Featured Dishes
          </Typography>
          <div style={styles.scrollingContainer as React.CSSProperties}>
            <div style={styles.scrollingContent as React.CSSProperties}>
              {duplicatedDishImages.map((image, index) => (
                <div key={index} style={styles.scrollingItem as React.CSSProperties}>
                  <Card sx={styles.featuredDishCard}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={image}
                      alt={`Dish ${index + 1}`}
                      sx={styles.dishImage}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Dish {index % 7 + 1}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        A brief description of Dish {index % 7 + 1}.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Homepage;
