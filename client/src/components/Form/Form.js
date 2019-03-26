import React from 'react';

import styles from './Form.css';

const Form = props => {
    return (
        <form className={styles.form} onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Form;