import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PageTitleCard from '../../components/PageTitleCard/PageTitleCard';
import DiscoverContainer from '../DiscoverContainer/DiscoverContainer';
import DiveSiteContainer from '../DiveSiteContainer/DiveSiteContainer';

class Layout extends Component {
    state = {
        pageTitle: null,
        diveSiteCount: null
    };

    updateDiveSiteCountHandler = (count) => {
        this.setState({diveSiteCount: count })
    };

    updatePageTitleHandler = (title) => {
        this.setState({pageTitle: title})
    };

    render() {
        return (
            <div className="Layout">
                <div className="Layout__container">
                    <Toolbar />
                    <PageTitleCard
                        title={ this.state.pageTitle } 
                        count={ this.state.diveSiteCount }/>
                    <Switch>
                        <Route
                            path="/discover"
                            exact
                            render={props => (
                            <DiscoverContainer
                                updateTitle={ this.updatePageTitleHandler } 
                                updateCount={ this.updateDiveSiteCountHandler }/> 
                            )} />
                            <Route
                            path="/divesites"
                            exact
                            render={props => (
                                <DiveSiteContainer />
                            )}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Layout;