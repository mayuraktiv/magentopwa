import React, { Component } from 'react';
import classnames from 'classnames';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';

import '../style/base.scss';

export default class MenuSidebar extends Component {
    render() {
        return (
            <div className={classnames('slide_menu', this.props.className)}>
                <Menu isOpen={ true } opacity disableAutoFocus pageWrapId={"page_wrapper"} outerContainerId={"outer_container"} >
                    <div className="collapse navbar-collapse mobile_navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Shop</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Product</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Pages</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Sale</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="menu-item nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electronics</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul className="level_two col-md-12">
                                        <li className="nav_item"><Link className="nav_link" to="/">Mobiles</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Laptops</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Video Games</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Televisions</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Headphones & Earphones</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Speakers</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Home Appliances</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Audio & Video</Link></li>
                                        <li className="nav_item"><Link className="nav_link" to="/">Smartwatches</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Fashion</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Home & Kitchen</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Beauty & Fragrance</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Baby & Kids</Link></li>
                            <li className="nav-item"><Link className="menu-item nav-link" to="/">Grocery</Link></li> 

                            {/* <li className="dropdown-divider"></li> */}
                         </ul>
                    </div>
                </Menu>
            </div >
        )
    }
}