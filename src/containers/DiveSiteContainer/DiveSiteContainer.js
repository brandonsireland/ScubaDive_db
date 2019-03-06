import React, { Component } from 'react';
import DiveSites from '../../components/DiveSite/DiveSite';

class DiveSiteContainer extends Component {

    state = {
        viewport: {
          latitude: -12.472782814793,
          longitude: -76.799411773682,
          zoom: 14,
          width: '100%',
          height: 500,
        }
    }

    componentDidMount(){
        // Sets Page Title card to correct title 
        this.props.updateTitle('DiveSites');
    }

    updateViewPortHandler = (viewport) => {
        this.setState({viewport: viewport});
    }
    
    render(){
        return (
            <div>
                <DiveSites {...this.state} updateViewPort={ this.updateViewPortHandler } />
            </div>
        )
    }
};

export default DiveSiteContainer;