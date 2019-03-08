import React, { Component } from 'react';
import Axios from 'axios';

import ScubaMap from '../../components/ScubaMap/ScubaMap';
import SearchForm from '../../components/UI/SearchForm/SearchForm';


class ScubaMapContainer extends Component {

    state = {
        viewport: {
          latitude: 40.416775,
          longitude: -3.703790,
          zoom: 5,
          width: '100%',
          height: 500,
        },
        diveSites: null,
    };

    mapRef = React.createRef();
    geocoderContainerRef = React.createRef();

    componentDidMount(){
        if(!this.state.diveSites) {
            Axios.get('http://localhost:3000/api/divesite/geo')
                .then(response => {
                    this.setState({diveSites: response.data})
                })
        } 
    };

    updateViewPortHandler = (viewport) => {
        this.setState({viewport: viewport});
    };

    resize = () => {
        this.updateViewPortHandler({
          width: window.innerWidth,
          height: window.innerHeight
        });
    };
      
    render() {
        return (
            <div className="ScubaMapContainer">
                <div className="ScubaMapContainer__container">

                    <ScubaMap 
                    {...this.state} 
                    mapRef={this.mapRef} 
                    updateViewPort={ this.updateViewPortHandler } />
                </div>
            </div>
        )
    }
}

export default ScubaMapContainer;