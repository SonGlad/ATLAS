import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js';
import { theme } from './globalStyles/theme.js';



const root = createRoot(document.getElementById('root'));



root.render(
  <StrictMode>
    <BrowserRouter basename='/'>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)
