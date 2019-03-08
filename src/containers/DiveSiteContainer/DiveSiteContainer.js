import React, { Component } from 'react';
import DiveSite from '../../components/DiveSite/DiveSite';
import Axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';

class DiveSiteContainer extends Component {

    state = {
        viewport: {
          latitude: null,
          longitude: null,
          zoom: 14,
          width: '100%',
          height: 500,
        },
        loadedDiveSite: null
    }

    componentDidMount() {
        // Sets Page Title card to correct title 
        this.props.updateTitle('DiveSite');
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    updateViewPortHandler = (viewport) => {
        this.setState({viewport: viewport});
    }

    updateDiveSiteChangeHandler = () => {
        alert('Feature coming soon!');
    }

    loadData(){
        if(this.props.match.params.id) {
            // removes recursion of componentdidupdate
            if(!this.state.loadedDiveSite || (this.state.loadedDiveSite && this.state.loadedDiveSite._id !== this.props.match.params.id)){
                Axios.get('http://localhost:3000/api/divesite/' + this.props.match.params.id)
                .then(response => {
                    this.setState((prevState) =>({
                        loadedDiveSite: response.data, 
                        viewport: {
                            ...prevState.viewport,
                            latitude: response.data.geo_lat, 
                            longitude: response.data.geo_long, 
                        }
                    })
                    );
                })
                .catch(err => console.log(err))
            }
        }
    }
    
    render() {
        let divesite = null;
        if(this.props.match.params.id) {
            divesite = <Spinner/>
        }
        if(this.state.loadedDiveSite){
            divesite = (
                <div>
                    <DiveSite 
                    {...this.state} 
                    updateViewPort={ this.updateViewPortHandler } 
                    updateChanges={ this.updateDiveSiteChangeHandler }/>
                </div>
            )
        }
        return divesite;
    }
};

export default DiveSiteContainer;