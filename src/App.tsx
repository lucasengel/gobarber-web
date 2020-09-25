import React from 'react';
import GlobalStyle from './styles/global';
import LogIn from './pages/LogIn';
// import SignUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <LogIn />
        {/* <SignUp /> */}
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
