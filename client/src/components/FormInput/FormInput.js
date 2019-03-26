import React from 'react';

import styles from './FormInput.css';

const FormInput = props => {

    const { value, onInput, name, errorMessage, label, type } = props;

    return (
        <div className={styles.formGroup}>
            <label className={errorMessage ? styles.formLabelError : null} htmlFor={name}>{label}</label>
            <br />
            <span className={styles.errorMessage}>{errorMessage}</span>
            {
                type === 'textarea' ?
                    <textarea className={`${styles.formInput} ${errorMessage ? styles.formInputError : null}`} value={value} name={name} onChange={onInput} />
                    :
                    <input
                        className={`${styles.formInput} ${errorMessage ? styles.formInputError : null}`}
                        type='text'
                        name={name}
                        value={value}
                        onChange={onInput}
                    />
            }
        </div>
    )
}

export default FormInput;