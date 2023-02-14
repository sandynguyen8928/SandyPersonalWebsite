import React from 'react';
import TextBox from "../TextBox/TextBox";
import styles from './ProjectBox.module.scss';
import TextBoxTitle from "../TextBoxTitle/TextBoxTitle";
import TextBoxSubtitle from "../TextBoxSubtitle/TextBoxSubtitle";
import githublogo from 'assets/github.png';

interface Props {
    title: string;
    type: string;
    github?: string;
    website?: string;
    image: string;
    alt: string;
}

const ProjectBox:React.FC<Props> = ({title, type, github, website, image, alt}) => {
    return (

        <div className={styles.ProjectBoxStyled}>
            <TextBox text={

                <div className={styles.ProjectBoxContent}>
                    <img src={image} alt={alt} className={styles.ImageStyled}/>
                    <div className={styles.Titles}>
                        <TextBoxTitle title={title} addClassName={styles.titleStyled}/>
                        <div className={styles.BottomTitle}>
                            <TextBoxSubtitle subtitle={type} />
                            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.Links}>
                                <img className={styles.Socials} src={githublogo} alt="Github logo" />
                            </a>
                        </div>
                    </div>
                </div>

            }/>
        </div>
    )
}
export default ProjectBox;