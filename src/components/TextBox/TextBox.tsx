import React from 'react';
import styles from './TextBox.module.scss';
import classNames from 'classnames';

interface Props {
    addClassName?: string;
    text: any;
}

const TextBox:React.FC<Props> = ({text, addClassName}) => {

    return (
        <div className={classNames(
            styles.BoxStyled,
            addClassName)}>{text}</div>
    )
}

export default TextBox;