import React from 'react';
import GlobalStyle from './styles/global';
import LogIn from './pages/LogIn';

const App: React.FC = () => {
  return (
    <>
      <LogIn />
      <GlobalStyle />
    </>
  );
};

export default App;
