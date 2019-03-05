import React, { Component } from 'react';
import Axios from 'axios';

import Discover from '../../components/Discover/Discover';
import LocationList from '../../components/Discover/LocationList/LocationList';
import DiveSiteList from '../../components/Discover/DiveSiteList/DiveSiteList';

// statefull component
class DiscoverContainer extends Component {

    state = {
        totalDiveSiteCount: null,
        error: false,
        showLocationTypes: false,
        locationsTypes: null,
        locationType: null,
        locationTitle: null,
        local :{
            locationTitle: null,
            divesiteCount: null,
            divesites: [{
                id: null,
            }]
        }
    };

    componentDidMount() {
        Axios.get('http://localhost:3000/')
            .then(response => {
                this.setState({locationTypes: response.data, totalDiveSiteCount: response.data.dive_site_count});
                
                //Updates PageTitleCard information with dive sites and title 
                this.props.updateCount(this.state.totalDiveSiteCount);
                this.props.updateTitle('DISCOVER');
            })
            .catch(error => {
                this.setState({error: true})
            });
    };

    getLocationCountHandler = (location) => {
        
        let locations = {
            'continent_count': 'continent',
            'country_count': 'countries',
            'region_count': 'regions',
            'city_count': 'cities',
            'tag_count': 'tags',
            'type_count': 'types'
        };

        this.setState({showLocationTypes: true});

        location = locations[location];
    
        // if type or tag
        if(location == 'tags' || location == 'types') {
            Axios.get('http://localhost:3000/api/' + location)
            .then(response => {
                this.setState({locationType: response.data})
        })
        .catch(error => console.log(error));
        } else {   
            Axios.get('http://localhost:3000/api/location/' + location)
            .then(response => {
                this.setState({locationType: response.data})
            })
            .catch(error => console.log(error));
        };

        this.setState({locationTitle: location});

    };

    // Probably moved after implementing routing
    updateLocalDataHandler = (key) => {
        let title = Object.values(key);
        // console.log(key)
        this.setState({
            local:{
                divesiteCount: key.divesites.length, 
                locationTitle: title[2], 
                divesites:{...key.divesites}
            }
        })
    }

    render() {
        let discover = this.state.error ? <p>Can't load locations!</p> : null;
        let locationtypes = null;
        let divesites = null;

        if(this.state.locationTypes) {
            discover = (
                <Discover 
                locationtypes={ this.state.locationTypes } 
                findlocation={ this.getLocationCountHandler }
                />
            )
        }
        if(this.state.showLocationTypes && this.state.locationType) {
            locationtypes = (
                <LocationList
                locationdata={ this.state.locationType } 
                locationtype={ this.state.locationTitle }
                updatelocaldata={ this.updateLocalDataHandler }
                />
            )
        }
        if(this.state.local.divesiteCount){
            // add to if && this.state.locationTitle
            divesites = (
                <DiveSiteList 
                locationTitle={this.state.local.locationTitle}
                divesiteCount={this.state.local.divesiteCount}
                divesites={this.state.local.divesites} />
            )
        }

        return (
            <div className="DiscoverContainer">
                { discover }
                { locationtypes }
                { divesites }
            </div>
        )
    }
}

export default DiscoverContainer;