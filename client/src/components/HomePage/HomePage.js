import React from 'react';
import styles from './HomePage.css';

const HomePage = props => {
    return (
        <>
            <h1 className={styles.title}>Megaman Bosses</h1>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="https://vignette.wikia.nocookie.net/megaman/images/d/d2/MMGroupIllustration1.png/revision/latest?cb=20120708080351" alt="bossesCollection" />
            </div>

            <p className={styles.subtitle}>
                The ultimate Wiki site of the Megaman bosses requested by <strong>Mr. Hiroshi Yamauchi</strong> himself!
            </p>
        </>
    )
}

export default HomePage;