import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNotFound.css'

const PageNotFound = props => {

    return (
        <div className={styles.PageNotFound}>
            <h1>
                404 Page not found!
            </h1>

            <img src="https://i.imgur.com/kqaWNKb.png" alt="not found" />
        </div>

    )

}

export default PageNotFound;