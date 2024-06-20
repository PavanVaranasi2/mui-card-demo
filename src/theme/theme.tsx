import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
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
      high: '#373C38', // High emphasis color
      medium: '#656E66', // Medium emphasis color
      low: '#94A196', // Low emphasis color
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
