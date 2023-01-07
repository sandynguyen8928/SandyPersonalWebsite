import React from "react";
import styles from './NavBar.module.scss';
import logo from 'assets/penguin_smart.png'

const NavBar = () => {

    return (
        <div className={styles.NavBarStyled}>
            <img className={styles.Logo} src={logo} alt="Penguin with tie" />
            <ul className={styles.TabsList}>
                <li><div className={styles.Tab}>About</div></li>
                <li><div className={styles.Tab}>Experience</div></li>
                <li><div className={styles.Tab}>Projects</div></li>
                <li><div className={styles.Tab}>Education</div></li>
                <li><div className={styles.Tab}>Contact</div></li>
            </ul>
        </div>
    )
}

export default NavBar;