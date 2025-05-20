import React from "react";
import { Link } from "react-router-dom";
import { 
  Button,
  AppBar,
  Toolbar,
  Box,
  MenuItem,
  styled
} from '@mui/material';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Navbar = () => {
  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: 1200
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        height: 64, // Standard height for app bars
        px: { xs: 2, sm: 3 } // Responsive padding
      }}>
        {/* Logo/Brand section */}
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            color: 'text.primary',
            '&:hover': {
              opacity: 0.8
            }
          }}
        >
          <Box 
            component="span" 
            sx={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold',
              letterSpacing: 0.5
            }}
          >
            MyApp
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, // Hide on mobile, show on desktop
          mx: 2
        }}>
          <MenuItem 
            component={StyledLink} 
            to="/"
            sx={{ fontWeight: 500 }}
          >
            Home
          </MenuItem>
          <MenuItem 
            component={StyledLink} 
            to="/about"
            sx={{ fontWeight: 500 }}
          >
            About
          </MenuItem>
          <MenuItem 
            component={StyledLink} 
            to="/contact"
            sx={{ fontWeight: 500 }}
          >
            Contact
          </MenuItem>
        </Box>

        {/* Auth Buttons */}
        <Box sx={{ 
          display: 'flex', 
          gap: 1,
          alignItems: 'center'
        }}>
          <Button 
            component={Link} 
            to="/signin" 
            variant="outlined"
            sx={{ 
              textTransform: 'none',
              px: 3,
              fontWeight: 500
            }}
          >
            Sign In
          </Button>
          <Button 
            component={Link} 
            to="/signup"
            variant="contained"
            sx={{ 
              textTransform: 'none',
              px: 3,
              fontWeight: 500,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 2
              }
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;