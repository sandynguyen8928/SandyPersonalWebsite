import React from 'react';
import styles from './TextBoxSubtitle.module.scss';
import classNames from "classnames";

interface Props {
    subtitle: string;
    addClassName?: string;
}

const TextBoxSubtitle:React.FC<Props> = ({subtitle, addClassName}) => {
    return (
        <div className={classNames(styles.SubtitleStyled, addClassName)}>{subtitle}</div>
    )
}

export default TextBoxSubtitle;