import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const toolbar = () => (
    <header className="ToolBar">
            <div>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
    </header>
);

export default toolbar;