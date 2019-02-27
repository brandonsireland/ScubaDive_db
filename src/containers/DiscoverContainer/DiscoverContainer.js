import React, { Component } from 'react';
import Axios from 'axios';

import Discover from '../../components/Discover/Discover';
import Location from '../../components/Discover/Location/Location';

// statefull component
class DiscoverContainer extends Component {

    state = {
        divesite_count: null,
        locations: null,
        error: false,
        showLocation: false,
        clickedLocations: null,
        titleLocation: null,
    };


    componentDidMount() {
        console.log('component did mount called')
        Axios.get('http://localhost:3000/')
            .then(response => {
                this.setState({locations: response.data, divesite_count: response.data.dive_site_count})
            })
            .catch(error => {
                this.setState({error: true})
            })
    };

    findLocationHandler = (location) => {
        
        let locations = {
            'continent_count': 'continent',
            'country_count': 'countries',
            'region_count': 'regions',
            'city_count': 'cities',
            'tag_count': 'tags',
            'type_count': 'types'
        };

        this.setState({showLocation: true});

        location = locations[location];
        
        // if type tag
        if(location == 'tags') {
            Axios.get('http://localhost:3000/api/tags/')
            .then(response => {
            this.setState({clickedLocations: response.data})
        })
        .catch(error => console.log(error));
        } else if(location == 'types') {
            Axios.get('http://localhost:3000/api/types/')
            .then(response => {
            this.setState({clickedLocations: response.data})
        })
        .catch(error => console.log(error));
        } else {   
            // if anything else
            Axios.get('http://localhost:3000/api/location/' + location)
            .then(response => {
                this.setState({clickedLocations: response.data})
            })
            .catch(error => console.log(error));
        };

        this.setState({titleLocation: location});

    };

    render() {

        let discover = this.state.error ? <p>Can't load locations!</p> : null;
        let location = null;
        if(this.state.locations && this.state.divesite_count) {
            discover = (
                <Discover 
                locations={ this.state.locations } 
                divesites={ this.state.divesite_count } 
                findlocation={ this.findLocationHandler }
                />
            )
        }
        if(this.state.showLocation && this.state.clickedLocations) {
            location = (
                <Location 
                locationdata={ this.state.clickedLocations } 
                locationtitle={ this.state.titleLocation } />
            )
        }

        return (
            <div className="DiscoverContainer">
                { discover }
                { location }
            </div>
        )
    }
}

export default DiscoverContainer;