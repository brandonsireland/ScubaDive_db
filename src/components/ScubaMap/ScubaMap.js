import React from 'react';
import MapGL, { NavigationControl, Marker} from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";

import Pin from '../../components/DiveSite/DiveSitePin/DiveSitePin';

const accessToken = process.env.MAPBOX_TOKEN;

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const scubaMap = props => {

    const {viewport, updateViewPort, mapRef, diveSites } = props;
    // console.log(diveSites)

    const mapStyle = "mapbox://styles/brandonsireland/cjswdecji833a1fqwy4hxl57r"

    let markers = [];

    // Marker Key
    // Object.keys({...diveSites}).map(key => {
    //     // console.log(key)
    //     let marker = Object.keys(diveSites[key]).map(what => console.log(what))
    // })
    

    return (
        <div className="ScubaMap">
            <MapGL
                {...viewport}
                minZoom={5}
                maxZoom={17}
                ref={mapRef}
                onViewportChange={(viewport) => updateViewPort(viewport)}
                mapStyle={mapStyle}
                mapboxApiAccessToken={accessToken}>
                <div style={navStyle}>
                    <NavigationControl onViewportChange={(viewport) => updateViewPort(viewport)}/>
                </div>
                <div>
                    <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={0} offsetTop={0}>
                        <Pin/>
                    </Marker>
                </div>
                <Geocoder
                mapRef={mapRef}
                onViewportChange={(viewport) => updateViewPort(viewport)}
                mapboxApiAccessToken={accessToken}
                />
            </MapGL>
        </div>
    )
}

export default scubaMap;