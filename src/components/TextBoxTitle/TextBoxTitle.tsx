import React from "react";
import styles from './TextBoxTitle.module.scss'

interface Props {
    title: string;
}

const TextBoxTitle:React.FC<Props> = ({title}) => {
    return (
        <div className={styles.TextBoxTitleStyled}>{title}</div>
    )
}

export default TextBoxTitle