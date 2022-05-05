import React, { Component } from 'react';
import classnames from 'classnames';
//import { Link } from 'react-router-dom';

import Logo from '../common/Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';


export default class MainHeader extends Component {
    render() {
        return (
            <div className={classnames('main_header', this.props.className)}>
                <div className="frame">
                    <div className="row">
                        <div className="col-3 d-flex align-items-center">
                            <Logo></Logo>
                        </div>
                        <div className="col-9 d-flex justify-content-end align-items-center mobile-col-header">
                            <Menu></Menu>
                            <MobileMenu></MobileMenu>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}