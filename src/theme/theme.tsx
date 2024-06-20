// src/theme.tsx
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    subtitle1: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '24px',
      color: '#373C38',
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '16px',
      color: '#656E66',
    },
    body1: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '16px',
      textAlign: 'right',
      color: '#373C38',
    },
  },
  palette: {
    primary: {
      main: '#FF725E',
    },
    text: {
      primary: '#373C38',
      secondary: '#656E66',
    },
    background: {
      paper: '#FFFFFF',
    },
  },
  spacing: 8, // Default spacing unit
  shape: {
    borderRadius: 12,
  },
});

export default theme;
