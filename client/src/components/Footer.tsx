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
        backgroundColor: '#123458',
        py: 5,
        px: 2,
        mt: 'auto',
        
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
          <Box sx={{ minWidth: 120,color: '#F1EFEC' }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link 
                component={RouterLink} 
                to="/" 
                color="#F1EFEC"
                underline="hover"
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                color="#F1EFEC"
                underline="hover"
              >
                About
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                color="#F1EFEC"
                underline="hover"
              >
                Contact
              </Link>
            </Stack>
          </Box>

          {/* Legal */}
          <Box sx={{ minWidth: 120,color: '#F1EFEC' }}>
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
          <Box sx={{ minWidth: 120,color: '#F1EFEC' }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                yrgamage28@gmail.com
              </Typography>
              <Typography variant="body2">
                +94 (76) 634-5868
              </Typography>
            </Stack>
          </Box>

          {/* Social Media */}
          <Box sx={{ minWidth: 120,color: 'white' }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="https://www.linkedin.com/in/yoshani-gamage" color="#F1EFEC">
                LinkdIn
              </Link>
              <Link href="https://github.com/YoshaniGamage" color="#F1EFEC">
                GitHub
              </Link>
              <Link href="https://www.instagram.com/yoshani_gamage/" color="#F1EFEC">
                Instagram
              </Link>
              <Link href="https://web.facebook.com/yoshani.gamage.2025/" color="#F1EFEC">
                Facebook
              </Link>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="white" align="center">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;