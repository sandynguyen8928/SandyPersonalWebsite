import React from "react";
import styles from './Footer.module.scss';
import logo from 'assets/penguin_smart.png';
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import devpost from "../../assets/devpost.png";

const message =
    <div>
        <p>Designed and Developed by </p>
        <p>© <b> Sandy Nguyen 2023</b></p>
    </div>

const Footer = () => {
    return (
        <div className={styles.FooterStyled}>
            <div className={styles.FooterLeft}>
                {message}
            </div>
            <div className={styles.FooterCenter}>
                <img src={logo} alt="Penguin logo" className={styles.penguinCenter}/>
            </div>
            <div className={styles.FooterRight}>
                <a href="https://www.linkedin.com/in/sandynguyen8928/" target="_blank" rel="noopener noreferrer">
                    <img className={styles.Socials} src={linkedin} alt="Linkedin logo" />
                </a>
                <a href="https://github.com/sandynguyen8928" target="_blank" rel="noopener noreferrer">
                    <img className={styles.Socials} src={github} alt="Github logo" />
                </a>
                <a href="https://devpost.com/sandynguyen8928?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
                    <img className={styles.Socials} src={devpost} alt="Devpost logo" />
                </a>
            </div>
        </div>
    )

}

export default Footer;