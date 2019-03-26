import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BossListItem.css'

const BossListItem = props => {

    const { id, name, description, img } = props.boss;

    return (
        <div className={styles.card}>
            <h3 className='bold'>{name}</h3>
            <div className={styles.bossAvatarContainer}>
                <img src={img} alt={`${name}`} className={styles.bossAvatar} />
            </div>
            <Link to={`/bosses/${id}`} className={styles.button}>See {name}'s details!</Link>
        </div>

    )
}

export default BossListItem;