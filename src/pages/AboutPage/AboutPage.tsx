import React from 'react';
import styles from "./AboutPage.module.scss";
import PageTitle from "components/PageTitle/PageTitle";
import logo from 'assets/penguin_smart.png';
import TextBox from "components/TextBox/TextBox";

const message =
    <div>
        <p>Hi there!</p>
        <p>My name is <b>Sandy Nguyen</b> (she/her), and welcome to my personal website where I showcase my professional work with a little touch of personality!</p>
        <p>As a <b>full stack developer</b> based in <b>Montréal, Canada</b>, I am skilled in both frontend and backend development. I have a strong foundation in writing <b>efficient and functional</b> code for the backend, and am also experienced in creating <b>visually appealing and user-friendly</b> designs for the frontend.</p>
        <p>One of my passions is <b>human interaction and communication</b>, and I strive to bring this focus into my work as a developer. I am always eager to take on new projects that allow me to utilize my skills and knowledge in that field, and to create <b>meaningful and impactful</b> solutions for my clients.</p>
        <p>Whether it's building a sleek and intuitive website or creating a reliable and scalable backend system, I am committed to delivering <b>top-quality</b> work that meets the <b>needs and goals</b> of my clients.</p>
        <p>Enjoy reading me!</p>
        <p>Sandy Nguyen</p>
    </div>


const AboutPage = () => {
    return (
        <div className={styles.AboutStyled}>
            <PageTitle title="about"></PageTitle>
            <div className={styles.Parent}>
                <img className={styles.LeftChild} alt="logo" src={logo} />
                <TextBox addClassName={styles.RightChild} text={message}></TextBox>
            </div>
        </div>
    )
}

export default AboutPage;