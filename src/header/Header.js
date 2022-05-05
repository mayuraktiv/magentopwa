	import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import TopHeader from './TopHeader';
import MainHeader from './MainHeader';
import BottomHeader from './BottomHeader';

export default class Header extends Component {
    render() {
        return (
            <header className="site_header">
                <div className="web_header">
                    <TopHeader></TopHeader>
                    <MainHeader></MainHeader>
                    <BottomHeader></BottomHeader>
                </div>
            </header>
        );
    }
}