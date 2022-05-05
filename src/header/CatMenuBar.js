import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import AllCategoriesMenu from './AllCategoriesMenu';
import CatMenu from './CatMenu';

import '../style/base.scss';

export default class CatMenuBar extends Component {
    render() {
        return (
            <div className="site_navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 header_container">
                            <div className="header_cover">
                                <AllCategoriesMenu></AllCategoriesMenu>
                                <CatMenu></CatMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}