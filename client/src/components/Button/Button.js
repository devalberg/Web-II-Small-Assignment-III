import React from 'react';

import styles from './Button.css';

const Button = props => {

    const {color, onClick, children, type} = props;

    const className = `${styles.button} ${styles[color]}`;

    return (
        <button type={type === 'submit' ? 'submit' : 'button'} className={className} onClick={onClick}>{children}</button>
    )

}

export default Button;