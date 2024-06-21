import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme/theme';
import CardPage from './pages/CardPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CardPage />
    </ThemeProvider>
  );
}

export default App;
