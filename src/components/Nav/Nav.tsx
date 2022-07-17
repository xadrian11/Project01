import React from 'react'


import navStyle from './Nav.module.scss'
import styles from "../Nav/Hamburger/Hamburger.Menu.module.scss";


import image from '../Nav/assets/l.png'
import shoppingCart from '../Nav/assets/mojekonto.svg'
import myAccount from '../Nav/assets/koszyk.svg'
import Content from '../Content/Content';


type Props = {
  className?: string;
};


const Nav:React.FunctionComponent<Props> = ({ className }) => {
  return (
    <>
    <div className={navStyle.logoContainer}>
    <img src={image} className={navStyle.logo} />
    </div>
    <nav className={className}>
        <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}><a href="#Steaks">Steaks</a></li>
            <li className={styles.navigation__item}><a href="#Burgers">Burgers</a></li>
            <li className={styles.navigation__item}><a href="#Drinks">Drinks</a></li>
            <li className={styles.navigation__item}><a href="#French fries">French fries</a></li>
            <li className={styles.navigation__item}><a href="#Gdzie Dowozimy?">Gdzie Dowozimy?</a></li>
            <li className={styles.navigation__item}><a href="#Kontakt">Kontakt</a></li>
        </ul>
      <div className={styles.navigation__list }>
        <a className={`${styles.navigation__item} ${styles.navigation__icons}`} href="#"><img src={shoppingCart} alt="account icon" />Moje konto</a>   
        <a className={`${styles.navigation__item} ${styles.navigation__icons}` }  href="#"><img src={myAccount} alt="shopping icon " />Koszyk</a>
        {/* <a href="#"> <img src={order} alt="order logo" />Zamów</a> */}
        </div>
    </nav>
    </>
  )
}

export default Nav