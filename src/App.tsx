import React from 'react';
import { AuthProvider } from './contexts/auth';
import Routes from './routes';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
