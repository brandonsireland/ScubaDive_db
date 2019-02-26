import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PageTitleCard from '../../components/PageTitleCard/PageTitleCard';
import DiscoverContainer from '../DiscoverContainer/DiscoverContainer';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="Layout">
                <div className="Layout__container">
                    <Toolbar/>
                    <PageTitleCard/>
                    <DiscoverContainer />
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Layout;