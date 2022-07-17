import React from 'react'

import footerstyle from './Footer.module.scss'
import contentstyle from '../Content/Content.module.scss'


import firstAds from './assets-footer/dana-devolk-x2cNcfz_xXU-unsplash.png'
import secondAds from './assets-footer/aplikacja.png'
import google from './assets-footer/Group 4.svg'
import appStore from './assets-footer/App_Store.svg'
import huawei from './assets-footer/huawei-app-badge.svg'


const Footer = () => {
  return (
    <>
    <footer className={`${footerstyle.footer} `}>
    <div className={footerstyle.footer__container}>
    <span className={footerstyle.footer__container}>Zestaw dla 3 osób <br/></span>
    <span className={footerstyle.footer__container__second}>Razem smakuje lepiej! Zamów <br /> zestawy obiadowy dla 3 osób 
już od 39 zł </span>
    </div>
    <div className={footerstyle.wrapperButton}>
    <img className={`${footerstyle.image}${footerstyle.firstposition} ${footerstyle.img}`} src={firstAds}  alt="ads about meal in uber" />
    <button className={`${footerstyle.buttonClass} ${footerstyle.buttonPosition}`} >Zamów online</button></div>
    <div>
    <span className={footerstyle.footer__app}>UberEats</span>
    <span className={footerstyle.footer__app__second}>Zamawiaj w aplikacji 10% taniej.</span>
    </div>
    <img className={`${footerstyle.image} ${footerstyle.secondposition}`} src={secondAds}  alt="mobile app" />
    <div className={footerstyle.icons}>
    <img src={google} alt="google" />
    <img src={appStore} alt="app store" />
    <img src={huawei} alt="huawei" />
    </div>
    </footer>
    </>
  )
}

export default Footer