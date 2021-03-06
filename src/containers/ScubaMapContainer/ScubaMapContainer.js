import React, { Component } from 'react';
import Axios from 'axios';

import {fromJS} from 'immutable';
import {defaultMapStyle, dataLayer} from '../../components/ScubaMap/map-style.js';

import ScubaMap from '../../components/ScubaMap/ScubaMap';

class ScubaMapContainer extends Component {

    state = {
        viewport: {
          latitude: 40.416775,
          longitude: -3.703790,
          zoom: 5,
          width: '100%',
          height: 500,
        }
    };

    mapRef = React.createRef();
    geocoderContainerRef = React.createRef();
    
    componentDidMount(){
        if(!this.state.diveSites) {
            Axios.get('/src/assets/geodata/geoJSON.geojson')
                .then(response => {
                    this.loadData(response.data)
                })
        }
        // window.addEventListener('resize', this.resize )
    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    loadData = (data) => {
        const mapStyle = defaultMapStyle
            .setIn(['sources', 'DiveSite'], fromJS({type: 'geojson', data}))
            .set('layers', defaultMapStyle.get('layers').push(dataLayer));

        this.setState({data, mapStyle});
    };

    _onClick = event => {
        const { features } = event;
        if(features[0].properties['_id']) {
            this.props.history.push(`/divesite/${features[0].properties['_id']}`)
        }
    }

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
                    clicked={(e) =>  this._onClick(e) } 
                    {...this.state} 
                    mapRef={this.mapRef} 
                    updateViewPort={ this.updateViewPortHandler } />
                </div>
            </div>
        )
    }
}

export default ScubaMapContainer;
