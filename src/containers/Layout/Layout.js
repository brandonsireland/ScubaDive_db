import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PageTitleCard from '../../components/PageTitleCard/PageTitleCard';
import DiscoverContainer from '../DiscoverContainer/DiscoverContainer';

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
                    <Toolbar/>
                    <PageTitleCard title={ this.state.pageTitle } count={ this.state.diveSiteCount } />
                    <DiscoverContainer updateTitle={ this.updatePageTitleHandler } updateCount={ this.updateDiveSiteCountHandler }/> 
                </div>
            </div>
        )
    }
}

export default Layout;