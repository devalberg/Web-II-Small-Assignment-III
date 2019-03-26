import React from 'react';
import styles from './ContentContainer.css';

const ContentContainer = ({children}) => {

    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}


export default ContentContainer;