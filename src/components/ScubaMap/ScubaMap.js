import React from 'react';
import MapGL, { NavigationControl} from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";

const accessToken = process.env.MAPBOX_TOKEN;

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const scubaMap = props => {

    const {viewport, updateViewPort, mapRef, diveSites, mapStyle, data } = props;
    console.log(data)
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