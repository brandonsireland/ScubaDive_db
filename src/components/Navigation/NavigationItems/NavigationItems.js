import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link='/' active>Scuba Map</NavigationItem>
        <NavigationItem link='/' active>Discover</NavigationItem>
    </ul>
);

export default navigationItems;