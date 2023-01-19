import React from 'react';
import styles from "./PageTitle.module.scss";

const PageTitle = (props: any) => {

    return (
        <div>
            <div className={styles.BigTitle}>{props.title}</div>
            <div className={styles.SmallTitle}>{props.title}</div>
        </div>
    )

}

export default PageTitle;