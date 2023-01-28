import React from 'react';
import styles from './TextBoxSubtitle.module.scss';

interface Props {
    subtitle: string;
}

const TextBoxSubtitle:React.FC<Props> = ({subtitle}) => {
    return (
        <div className={styles.SubtitleStyled}>{subtitle}</div>
    )
}

export default TextBoxSubtitle;