import React from 'react';

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import HamburgerMenu from './components/Nav/Hamburger/HamburgerMenu';

import css from './App.module.scss';

function App(): JSX.Element {
  return (
    <div className={css.app}>
      <HamburgerMenu/>
      <Content /> 
      <Footer/>
    </div>
  );
}

export default App;
