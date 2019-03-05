import React, { Component } from 'react';
import DiveSites from '../../components/DiveSites/DiveSites';

class DiveSiteContainer extends Component {

    componentDidMount(){

        // Sets Page Title card to correct title 
        this.props.updateTitle('DiveSites');

    }
    render(){
        return (
            <div>
                <h2>Dive Site Container</h2>
                <DiveSites />
            </div>
        )
    }
};

export default DiveSiteContainer;