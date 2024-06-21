import { TypeText } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    high: string;
    medium: string;
    low: string;
  }
}