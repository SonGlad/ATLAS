import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyles/globaleStyles.styled.js';
import { theme } from './globalStyles/theme.js';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store, persistor} from "./redux/store.js";


const root = createRoot(document.getElementById('root'));



root.render(
  <StrictMode>
    {/* <Provider store = {store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename='/react-vite-template'>
          <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
    {/* </Provider> */}
  </StrictMode>,
)
