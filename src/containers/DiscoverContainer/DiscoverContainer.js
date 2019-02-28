import React, { Component } from 'react';
import Axios from 'axios';

import Discover from '../../components/Discover/Discover';
import LocationList from '../../components/Discover/LocationList/LocationList';
import DiveSiteList from '../../components/Discover/DiveSiteList/DiveSiteList';

// statefull component
class DiscoverContainer extends Component {

    state = {
        diveSiteCount: null,
        locationsTypes: null,
        error: false,
        showLocationTypes: false,
        locationType: null,
        locationTitle: null,
    };


    componentDidMount() {
        Axios.get('http://localhost:3000/')
            .then(response => {
                this.setState({locationTypes: response.data, diveSiteCount: response.data.dive_site_count});
                
                //Updates PageTitleCard information with dive sites and title 
                this.props.updateCount(this.state.diveSiteCount);
                this.props.updateTitle('DISCOVER');
            })
            .catch(error => {
                this.setState({error: true})
            });

    };

    // Probably moved after implementing routing
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
                console.log(response.data)
                this.setState({locationType: response.data})
            })
            .catch(error => console.log(error));
        };

        this.setState({locationTitle: location});

    };

    // Probably moved after implementing routing
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
                updatelocationbykey={ this.updateLocationHandler }
                />
            )
        }
        // if(true){
        //     divesites = (
        //         <DiveSiteList />
        //     )
        // }

        return (
            <div className="DiscoverContainer">
                { discover }
                { locationtypes }
                {/* { divesites } */}
                <DiveSiteList />
            </div>
        )
    }
}

export default DiscoverContainer;