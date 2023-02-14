import React from 'react';
import styles from './ExperienceBox.module.scss'
import TextBoxTitle from "../TextBoxTitle/TextBoxTitle";
import TextBox from "../TextBox/TextBox";
import TextBoxSubtitle from "../TextBoxSubtitle/TextBoxSubtitle";

interface Props {
    date: string;
    company: string;
    position: string;
    location: string;
    tasks: any;
}

const ExperienceBox:React.FC<Props> = ({date, company, position, location, tasks}) => {
    return (
        <TextBox text={
            <div className={styles.ParentBox}>
                <div className={styles.LeftChild}>
                    <div className={styles.Date}>{date}</div>
                    <div className={styles.Titles}>
                        <TextBoxTitle title={company} addClassName={styles.titleStyled}/>
                        <TextBoxSubtitle subtitle={position} addClassName={styles.subtitleStyled}/>
                    </div>
                    <div className={styles.Location}>{location}</div>
                </div>
                <div className={styles.RightChild}>
                    {tasks}
                </div>
            </div>
        }
        addClassName={styles.BoxStyled}
        />
    )
}

export default ExperienceBox;