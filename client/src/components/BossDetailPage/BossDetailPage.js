import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getBossDetailsFromServer } from '../../actions/getActions'
import { deleteBossFromServer } from '../../actions/postActions';

import EditBossDetailForm from '../EditBossDetailForm/EditBossDetailForm';

import Button from '../Button/Button';

import styles from './BossDetailPage.css';

class BossDetailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

        this.deleteBossHandler = this.deleteBossHandler.bind(this);
    }

    componentDidMount() {
        this.props.getBossDetailsFromServer(this.props.match.params.id);
    }

    deleteBossHandler() {
        if (window.confirm(`Are you sure you would like to delete ${this.props.name}? This cannot be undone!`)) {
            this.props.deleteBossFromServer(this.props.id);
            this.setState({ redirect: true });
        }
    }

    render() {
        const { name, description, img } = this.props;
        console.log(this.state);

        return (

            <div>
                <div className={styles.bossDetails}>
                    {this.state.redirect ? <Redirect to="/bosses" /> : null}
                    <h1 className={styles.bossName}>{name}</h1>
                    <div className={styles.bossAvatarContainer}>
                        <img src={img} alt={name} className={styles.bossAvatar} />
                    </div>
                    <p className={styles.bossDescription}>{description}</p>

                </div>
                <EditBossDetailForm />
                <div className={styles.bossDetails}>
                    <Button color="red" onClick={this.deleteBossHandler}>Delete {name}!</Button>
                </div >
            </div >
        )
    }
}

const mapStateToProps = state => ({
    id: state.bossDetails.id,
    name: state.bossDetails.name,
    description: state.bossDetails.description,
    img: state.bossDetails.img,
})

export default connect(mapStateToProps, { getBossDetailsFromServer, deleteBossFromServer })(BossDetailPage);