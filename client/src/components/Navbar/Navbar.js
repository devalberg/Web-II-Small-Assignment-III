import React from 'react';

import styles from './Navbar.css';

import NavbarLink from '../NavbarLink/NavbarLink';

const Navbar = (props) => {

    return (
        <nav className={styles.navbar}>
            <NavbarLink path="/">Home</NavbarLink>
            <NavbarLink path="/bosses">Bosses</NavbarLink>
        </nav>
    )

}

export default Navbar;