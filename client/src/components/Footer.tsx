import React from "react";
import { 
  Box,
  Container,
  Link,
  Typography,
  Divider,
  Stack
} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => 
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'space-between',
            mb: 4
          }}
        >
          {/* Quick Links */}
          <Box sx={{ minWidth: 120 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link 
                component={RouterLink} 
                to="/" 
                color="inherit"
                underline="hover"
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                color="inherit"
                underline="hover"
              >
                About
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                color="inherit"
                underline="hover"
              >
                Contact
              </Link>
            </Stack>
          </Box>

          {/* Legal */}
          <Box sx={{ minWidth: 120 }}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                Privacy Policy
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Terms of Use
              </Link>
            </Stack>
          </Box>

          {/* Contact Info */}
          <Box sx={{ minWidth: 120 }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                email@example.com
              </Typography>
              <Typography variant="body2">
                +1 (123) 456-7890
              </Typography>
            </Stack>
          </Box>

          {/* Social Media */}
          <Box sx={{ minWidth: 120 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit">
                Twitter
              </Link>
              <Link href="#" color="inherit">
                Facebook
              </Link>
              <Link href="#" color="inherit">
                Instagram
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;