import React from "react";
import styles from './NavBar.module.scss';
import logo from 'assets/penguin_smart.png';
import hamburger from 'assets/hamburger.png';

const NavBar = () => {

    return (
        <div className={styles.NavBarStyled}>
            <img className={styles.Logo} src={logo} alt="Penguin with tie" />
            <ul className={styles.TabsList}>
                <li><div className={styles.TabBox}><div className={styles.Tab}>About</div></div></li>
                <li><div className={styles.TabBox}><div className={styles.Tab}>Experience</div></div></li>
                <li><div className={styles.TabBox}><div className={styles.Tab}>Projects</div></div></li>
                <li><div className={styles.TabBox}><div className={styles.Tab}>Education</div></div></li>
                <li><div className={styles.TabBox}><div className={styles.Tab}>Contact</div></div></li>
            </ul>

            <div className={styles.HamburgerStyled}>
                <img className={styles.HamburgerImg} src={hamburger} alt="Tab Hamburger" />
            </div>
        </div>
    )
}

export default NavBar;