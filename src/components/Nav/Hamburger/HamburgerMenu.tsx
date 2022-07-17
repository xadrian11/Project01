import React from 'react'


import Nav from '../Nav';
import Hamburger from "./Hamburger";


import styles from "../Hamburger/Hamburger.Menu.module.scss";



class HamburgerMenu extends React.Component {
    state = {
      isOpen: false
    };


    handleClick = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      };

      render() {
        return (
          <>
            <Hamburger
              onClick={this.handleClick}
              className={
                this.state.isOpen
                  ? `${styles.hamburger} ${styles.hamburgeractive}`
                  : styles.hamburger
              }
            />
            <Nav
              className={
                this.state.isOpen
                  ? `${styles.navigation} ${styles.navigationactive}`
                  : styles.navigation
              }
            />
          </>
        );
      }
    }
    
    export default HamburgerMenu;