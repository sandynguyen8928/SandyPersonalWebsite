import React from "react";
import styles from './TextBoxTitle.module.scss'
import classNames from "classnames";

interface Props {
    title: string;
    addClassName?: string;
}

const TextBoxTitle:React.FC<Props> = ({title, addClassName}) => {
    return (
        <div className={classNames(styles.TextBoxTitleStyled, addClassName)}>{title}</div>
    )
}

export default TextBoxTitle