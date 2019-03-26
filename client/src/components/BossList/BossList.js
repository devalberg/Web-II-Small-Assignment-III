import React from 'react';
import { connect } from 'react-redux';

import BossListItem from '../BossListItem/BossListItem';
import styles from './BossList.css';

const BossList = props => {

    const { bossList } = props;

    return (
        <section className={styles.bossList}>
            {bossList.map((boss, index) => <BossListItem key={`${boss}__${index}`} boss={boss} />)}
        </section>
    )

}

const mapStateToProps = state => ({
    bossList: state.bossList
})

export default connect(mapStateToProps, null)(BossList);