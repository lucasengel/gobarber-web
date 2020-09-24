import React from 'react';
import GlobalStyle from './styles/global';
import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <LogIn />
        {/* <SignUp /> */}
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
