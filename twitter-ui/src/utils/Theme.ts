// import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

type PaletteModeExtended = 'light' | 'dark' | 'dim' | undefined 
declare module '@mui/material/styles' {
	interface Palette {
		mode: PaletteModeExtended
	}
	interface PaletteOptions {
		mode?: PaletteModeExtended
	}
  }

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
})

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#ce93d8',
    },
    background: {
      default: '#121212',
      paper: '#424242',
    },
  },
});

export const dimTheme: Theme = createTheme({
  palette: {
    mode: 'dim',
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#00e676',
    },
    background: {
      default: '#ffecb3',
      paper: '#ffffff',
    },
  },
});
