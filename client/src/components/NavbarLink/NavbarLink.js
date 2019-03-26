import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarLink.css';

const NavbarLink = props => {
    const {path, children} = props;

    return (
        <NavLink exact to={path} className={styles.navlink} activeClassName={styles.activeNavlink}>{children}</NavLink>
    )
}

export default NavbarLink;