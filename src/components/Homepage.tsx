import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component
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
    whiteSpace: 'nowrap',
  },
  scrollingContent: {
    display: 'flex',
    animation: 'scroll 30s linear infinite',
  },
  scrollingItem: {
    flexShrink: 0,
    width: '300px',
    marginRight: '1rem',
  },
  sectionTitle: {
    marginBottom: '1rem',
    color: '#555555',
    textAlign: 'center',
  },
  dishImage: {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  reviewsContainer: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    whiteSpace: 'nowrap',
    position: 'relative',
    marginBottom: '2rem',
  },
  reviewsContent: {
    display: 'flex',
    animation: 'scroll 30s linear infinite',
  },
  reviewCard: {
    flexShrink: 0,
    width: '300px',
    marginRight: '1rem',
    textAlign: 'center',
    padding: '1rem',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden', // Ensure overflow is hidden
  },
  reviewCardContent: {
    padding: '1rem',
    textOverflow: 'ellipsis', // Truncate overflow text
    whiteSpace: 'normal', // Allow text to wrap within the card
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

  // Sample reviews for the scrolling reviews section
  const reviews = [
    "Amazing food and great service! - Customer 1",
    "The best dining experience ever! - Customer 2",
    "Highly recommend to everyone! - Customer 3",
    "A wonderful place to eat! - Customer 4",
    "Exceptional service and food quality! - Customer 5",
    "Great atmosphere and delicious meals! - Customer 6",
    "Will definitely come back! - Customer 7",
  ];

  // Create a duplicated array of images and reviews to simulate infinite scrolling
  const duplicatedDishImages = [...dishImages, ...dishImages];
  const duplicatedReviews = [...reviews, ...reviews];

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

        {/* Customer Reviews with Infinite Scrolling */}
        <section>
          <Typography variant="h4" sx={styles.sectionTitle}>
            Customer Reviews
          </Typography>
          <div style={styles.reviewsContainer as React.CSSProperties}>
            <div style={styles.reviewsContent as React.CSSProperties}>
              {duplicatedReviews.map((review, index) => (
                <Card key={index} sx={styles.reviewCard}>
                  <CardContent sx={styles.reviewCardContent}>
                    <Typography variant="body1">
                      "{review}"
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation and Ordering */}
        <section>
          <Typography variant="h4" sx={styles.sectionTitle}>
            Reservation & Ordering
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={styles.reservationButton}
            onClick={() => navigate('/reservation')}
          >
            Reserve a Table
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/order')}
          >
            Order Online
          </Button>
        </section>

        {/* Newsletter Signup */}
        <section>
          <Typography variant="h4" sx={styles.sectionTitle}>
            Stay Updated
          </Typography>
          <Typography>
            Sign up for our newsletter to get the latest updates and special offers.
          </Typography>
          <div style={styles.newsletterSection as React.CSSProperties}>
            {/* Add a form for email signup */}
          </div>
        </section>
      </Container>
      <Footer/>
    </>
  );
};

export default Homepage;
