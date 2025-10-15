import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import { ThemeProvider } from '@cars24/lego/components';
import '@cars24/lego/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme="base">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
