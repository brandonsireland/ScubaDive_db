import React, { Component } from 'react';
import Discover from '../../components/Discover/Discover';
import Axios from 'axios';

// statefull component
class DiscoverContainer extends Component {

    state = {
        divesite_count: null,
        locations: null,
        error: false,
    };

    componentDidMount() {
        Axios.get('http://localhost:3000/')
            .then(response => {
                this.setState({locations: response.data, divesite_count: response.data.dive_site_count})
            })
            .catch(error => {
                this.setState({error: true})
            })
    };

    render() {

        let location = this.state.error ? <p>Can't load locations!</p> : null;

        if(this.state.locations && this.state.divesite_count) {
            location = (
                <Discover locations={ this.state.locations } divesites={ this.state.divesite_count }/>
            )
        }

        return (
            <div className="Discover">
                { location }
            </div>
        )
    }
}

export default DiscoverContainer;