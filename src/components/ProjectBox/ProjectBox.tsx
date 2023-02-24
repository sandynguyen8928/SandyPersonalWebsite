import React from 'react';
import TextBox from "../TextBox/TextBox";
import styles from './ProjectBox.module.scss';
import TextBoxTitle from "../TextBoxTitle/TextBoxTitle";
import TextBoxSubtitle from "../TextBoxSubtitle/TextBoxSubtitle";
import githublogo from 'assets/github.png';
import linkicon from 'assets/link.png';

interface Props {
    title: string;
    type: string;
    github?: string;
    website?: string;
    image: string;
    alt: string;
    description?: string;
    languages?: string;
}

//TODO: ADD PROJECT DESCRIPTION

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
                            <div className={styles.Socials}>
                                {github ?
                                    <a href={github} target="_blank" rel="noopener noreferrer" className={styles.Links}>
                                        <img className={styles.Icons} src={githublogo} alt="Github logo" />
                                    </a> : null}
                                {website ?
                                    <a href={website} target="_blank" rel="noopener noreferrer" className={styles.Links}>
                                        <img className={styles.Icons} src={linkicon} alt="Github logo" />
                                    </a> : null}
                            </div>
                        </div>
                    </div>
                </div>

            } addClassName={styles.ProjectBoxSize}/>
        </div>
    )
}
export default ProjectBox;