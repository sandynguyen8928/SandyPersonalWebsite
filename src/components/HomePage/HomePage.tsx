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
                    <div className={styles.Name}>Sandy <br></br> Nguyen</div>
                    <div className={styles.Title}>Full Stack Developer</div>
                    <div className={styles.Description}>I am passionate about <b>human interaction</b> and <b>communication</b>.
                        I enjoy the challenge of building products with the goal of <b>optimizing user experience.</b></div>
                </div>

                <div className={styles.RightChild}>
                    <img className={styles.Profile} src={profile} alt="My face" />
                    <div className={styles.ProfileBack}></div>
                </div>
            </div>

            <div className={styles.BottomChild}>
                <img className={styles.Socials} src={linkedin} alt="Linkedin logo" />
                <img className={styles.Socials} src={github} alt="Github logo" />
                <img className={styles.Socials} src={devpost} alt="Devpost logo" />
            </div>

            <div className={styles.BottomChild}>
                <div className={styles.TalkBox}><div className={styles.TalkText}>Let's talk</div></div>
            </div>
        </div >
    )
}

export default HomePage;