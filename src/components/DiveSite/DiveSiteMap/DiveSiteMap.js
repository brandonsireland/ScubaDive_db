import React from 'react';
import MapGL, { NavigationControl, Marker } from 'react-map-gl';
import Pin from '../DiveSitePin/DiveSitePin';

const accessToken = process.env.MAPBOX_TOKEN;

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const diveSiteMap = props => {

    const {viewport, updateViewPort} = props;
    
    let style = {
        size: null,
        offset: -23,
    }
    
    if(viewport.zoom < 14){
        style.size = 23;
        style.offset = -12.5;
    }
    
    if(viewport.zoom < 6) {
        style.size = 12;
        style.offset = -6;
    }
    
    return (
        <MapGL
            {...viewport}
            onViewportChange={(viewport) => updateViewPort(viewport)}
            mapStyle="mapbox://styles/brandonsireland/cjswdecji833a1fqwy4hxl57r"
            mapboxApiAccessToken={accessToken}>
            <div style={navStyle}>
                <NavigationControl onViewportChange={(viewport) => updateViewPort(viewport)}/>
            </div>
            <div>
                <Marker latitude={-12.472782814793} longitude={-76.799411773682} offsetLeft={style.offset} offsetTop={style.offset}>
                    <Pin size={style.size}/>
                </Marker>
            </div>
        </MapGL>
    );
}

export default diveSiteMap;