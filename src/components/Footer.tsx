import React from 'react';
import { Box, Typography } from '@mui/material';
import { SxProps } from '@mui/material/styles';

// Define styles for the footer
const footerStyles: Record<string, SxProps> = {
  footerContainer: {
    backgroundColor: '#282c34',
    color: '#ffffff',
    padding: '1rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100px',
    background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgIDxwYXRoIGQ9Ik0wLDBoMTEwVjEwMEw0LDEwMEg1LDc4djYxMEEwLDEsMSwwLDEsMCAwQzAsODAuNiw4Myw1My4zLDEwMFoiIGZpbGw9IiM2YjAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZS1kaWFsb3duZXM9InN0YWlyIiAvPjwvc3ZnPg==")',
    backgroundSize: 'cover',
    transform: 'rotate(0deg)',
    animation: 'wave-animation 6s linear infinite',
  },
  footerText: {
    position: 'relative',
    zIndex: 1,
  },
};

// Keyframes for wave animation
const keyframes = `
@keyframes wave-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}`;

const Footer: React.FC = () => {
  return (
    <>
      <style>{keyframes}</style>
      <Box sx={footerStyles.footerContainer}>
        <Typography variant="body2" sx={footerStyles.footerText}>
          © 2024 Your Restaurant Name. All rights reserved.
        </Typography>
        <Box sx={footerStyles.wave} />
      </Box>
    </>
  );
};

export default Footer;
