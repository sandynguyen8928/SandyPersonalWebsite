import React from "react";
import styles from './HomePage.module.scss';
import profile from 'assets/profile.png';
import linkedin from 'assets/linkedin.png';
import github from 'assets/github.png';
import devpost from 'assets/devpost.png';

const HomePage = () => {

    return (
        <div className={styles.HomePageStyled}>
            <div className={styles.RowOne}>
                <div className={styles.LeftChild}>
                    <div className={styles.Name}>Sandy <br/> Nguyen</div>
                    <div className={styles.Title}>Full Stack Developer</div>
                    <div className={styles.Description}>I am passionate about <b>human interaction</b> and <b>communication</b>.
                        I enjoy the challenge of building products with the goal of <b>optimizing user experience.</b></div>
                </div>

                <div className={styles.RightChild}>
                    <img className={styles.Profile} src={profile} alt="My face" />
                    <div className={styles.ProfileBack}/>
                </div>
            </div>

            <div className={styles.BottomChild}>
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

            <div className={styles.BottomChild}>
                <div className={styles.TalkBox}><div className={styles.TalkText}>Let's talk</div></div>
            </div>
        </div >
    )
}

export default HomePage;