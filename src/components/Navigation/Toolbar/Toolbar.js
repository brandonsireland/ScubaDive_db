import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const toolbar = () => (
    <header>
    <div>
        <Logo/>
    </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;