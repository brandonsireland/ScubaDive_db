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

    render() {
        return (
            <React.Fragment>
            <div className="Layout">
                <div className="Layout__container">
                    <Toolbar/>
                    <PageTitleCard title={this.state.title} count={this.state.diveSiteCount}/>
                    <DiscoverContainer count={ this.updateDiveSiteCountHandler }  />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Layout;