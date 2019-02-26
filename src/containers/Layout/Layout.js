import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PageTitleCard from '../../components/PageTitleCard/PageTitleCard';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="Layout">
                <div className="Layout__container">
                    <Toolbar/>
                    <PageTitleCard/>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Layout;