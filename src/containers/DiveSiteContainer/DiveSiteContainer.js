import React, { Component } from 'react';
import DiveSites from '../../components/DiveSite/DiveSite';

class DiveSiteContainer extends Component {

    componentDidMount(){
        // Sets Page Title card to correct title 
        this.props.updateTitle('DiveSites');
    }
    
    render(){
        return (
            <div>
                <DiveSites />
            </div>
        )
    }
};

export default DiveSiteContainer;