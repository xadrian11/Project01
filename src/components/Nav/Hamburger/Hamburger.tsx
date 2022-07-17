import React from 'react'


import styles from "../Hamburger/Hamburger.Menu.module.scss";

type HamburgerProps = {
  onClick(): void;
  className: string;
};



const Hamburger:React.FunctionComponent<HamburgerProps> = ({ className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
    <span className={styles.hamburger__box}>
      <span className={styles.hamburger__inner} />
    </span>
  </button>
  )
}

export default Hamburger