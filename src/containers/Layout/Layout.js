import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PageTitleCard from '../../components/PageTitleCard/PageTitleCard';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import Footer from '../../components/Footer/Footer';
import DiscoverContainer from '../DiscoverContainer/DiscoverContainer';
import DiveSiteContainer from '../DiveSiteContainer/DiveSiteContainer';
import ScubaMapContainer from '../ScubaMapContainer/ScubaMapContainer';

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
    
        let pagetitle = this.state.pageTitle ? <PageTitleCard title={ this.state.pageTitle } count={ this.state.diveSiteCount }/> : null;
        // let herovideo
        return (
            <div className="Layout">
                <div className="Layout__container">
                    <Toolbar />
                    {pagetitle}
                    <Switch>
                        <Route 
                            path="/"
                            exact
                            component={ HeroVideo }/>
                        />
                        <Route
                            path="/scubamap"
                            exact
                            component={ ScubaMapContainer }/>
                        <Route
                            path="/discover"
                            exact
                            render={props => (
                            <DiscoverContainer
                                updateTitle={ this.updatePageTitleHandler } 
                                updateCount={ this.updateDiveSiteCountHandler }/> 
                            )} />
                            <Route
                            path="/divesite/:id"
                            exact
                            render={props => (
                                <DiveSiteContainer {...props} updateTitle={ this.updatePageTitleHandler }/>
                            )}/>
                    </Switch>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Layout;