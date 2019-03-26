import React from 'react';

import BossList from '../BossList/BossList'

import CreateBossForm from '../CreateBossForm/CreateBossForm';

import styles from './BossListPage.css';

const BossListPage = props => {

    return (
        <>
            <h1 className={styles.title}>
                Meet the bosses
            </h1>

            <CreateBossForm />

            <BossList />
        </>
    )

}

export default BossListPage;