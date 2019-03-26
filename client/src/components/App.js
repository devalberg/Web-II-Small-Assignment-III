import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBossListFromServer } from '../actions/getActions';

import Container from './Container/Container';
import ContentContainer from './ContentContainer/ContentContainer';
import Navbar from './Navbar/Navbar'

import HomePage from './HomePage/HomePage';
import BossListPage from './BossListPage/BossListPage';
import BossDetailPage from './BossDetailPage/BossDetailPage';

import './App.css';

class App extends Component {

    componentDidMount() {
        this.props.getBossListFromServer();
    }

    render() {
        return (
            <>
                <Container>
                    <Navbar />
                    <ContentContainer>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/bosses" component={BossListPage} />
                            <Route exact path="/bosses/:id" component={BossDetailPage} />
                        </Switch>
                    </ContentContainer>
                    <footer>
                        Web Development II - Small Assignment II (Bosses) - By Daniel Valberg
                </footer>
                </Container>
            </>
        )
    }
};

export default connect(null, { getBossListFromServer })(App);

