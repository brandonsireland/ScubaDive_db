import React, { Component } from 'react';
import Axios from 'axios';

import Discover from '../../components/Discover/Discover';
import LocationList from '../../components/Discover/LocationList/LocationList';

// statefull component
class DiscoverContainer extends Component {

    state = {
        diveSiteCount: null,
        locations: null,
        error: false,
        showLocation: false,
        clickedLocations: null,
        titleLocation: null,
    };


    componentDidMount() {
        Axios.get('http://localhost:3000/')
            .then(response => {
                this.setState({locations: response.data, diveSiteCount: response.data.dive_site_count});
                
                //Updates PageTitleCard information 
                this.props.count(this.state.diveSiteCount);
            })
            .catch(error => {
                this.setState({error: true})
            });

    };

    updateLocationHandler =(locationkey, locationtype) => {

        if(locationtype == 'tags' || locationtype == 'types') {
    
            Axios.get('http://localhost:3000/api/' + locationtype + '/' + locationkey)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => console.log(error)) 

        } else {
            
        Axios.get('http://localhost:3000/api/location/' + locationtype + '/' + locationkey)
                .then(response => {
                    console.log(response.data)
                    
                })
            .catch(error => console.log(error));
            }

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

        this.setState({showLocation: true});

        location = locations[location];
    
        // if type or tag
        if(location == 'tags' || location == 'types') {
            Axios.get('http://localhost:3000/api/' + location)
            .then(response => {
                this.setState({clickedLocations: response.data})
        })
        .catch(error => console.log(error));
        } else {   
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
        if(this.state.locations && this.state.diveSiteCount) {
            discover = (
                <Discover 
                locations={ this.state.locations } 
                divesites={ this.state.diveSiteCount } 
                findlocation={ this.getLocationCountHandler }
                />
            )
        }
        if(this.state.showLocation && this.state.clickedLocations) {
            location = (
                <LocationList
                locationdata={ this.state.clickedLocations } 
                locationtype={ this.state.titleLocation } 
                updatelocationbykey={ this.updateLocationHandler }
                />
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