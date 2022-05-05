import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import '../style/base.scss';

export default class AllCategoriesMenu extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {

        const hoverItem = this.state.toggleHoverState ? "activeMenu" : "";

        return (
            <div className={classnames('dropdown_col all_categories', this.props.className)}>
                <ul className="level_one">
                    <li className="nav_item">
                        <Link className="nav_link all_cat_link" to="/">All Categories
                            <i className="material-icons">arrow_drop_down</i>
                        </Link>
                        <div className="dropdown_menu all_cat_dropdown">
                            <ul className="level_two">
                                <li className="nav_item"><Link className="nav_link subnav_active" id="subcat_electronics" to="/">Electronics</Link></li>
                                <li className={classnames('nav_item', hoverItem)} onMouseEnter={this.handleMouseHover}
                                    onMouseLeave={this.handleMouseHover}><Link className="nav_link" id="subcat_fashion" to="/">Fashion</Link></li>
                                <li className="nav_item"><Link className="nav_link" id="subcat_home" to="/">Home & Kitchen</Link></li>
                                <li className="nav_item"><Link className="nav_link" id="subcat_beauty" to="/">Beauty & Fragrance</Link></li>
                                <li className="nav_item"><Link className="nav_link" id="subcat_baby" to="/">Baby & Kids</Link></li>
                                <li className="nav_item"><Link className="nav_link" id="subcat_grocery" to="/">Grocery</Link></li>
                            </ul>
                            <div className="third_level_wrapper">

                                <div id="subcat_electronics" className="third_level_menu">
                                    <h3 className="subcat_name">Electronics</h3>
                                    <ul className="level_three">
                                        <div className="row">
                                            <ul className="level_three_col col-md-6">
                                                <li className="nav_item"><h6 className="nav_label">Most Popular</h6></li>
                                                <li className="nav_item"><Link className="nav_link" to="/category">Mobiles</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Laptops</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Video Games</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Televisions</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Headphones & Earphones</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Speakers</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Home Appliances</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Audio & Video</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Smartwatches</Link></li>
                                            </ul>
                                            <ul className="level_three_col col-md-6">
                                                <li className="nav_item"><h6 className="nav_label">Top Brands</h6></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Apple</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Samsung</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Sony</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Dell</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">HP</Link></li>
                                                <li className="nav_item"><Link className="nav_link" to="/">Canon</Link></li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>

                                {this.state.isHovering &&

                                    <div id="subcat_fashion" className="third_level_menu">
                                        <h6 className="subcat_name">Fashion</h6>
                                        <ul className="level_three">
                                            <div className="row">
                                                <ul className="level_three_col col-md-6">
                                                    <li className="nav_item"><h6 className="nav_label">Most Popular</h6></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/category">Mobiles</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Laptops</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Video Games</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Televisions</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Headphones & Earphones</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Speakers</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Home Appliances</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Audio & Video</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Smartwatches</Link></li>
                                                </ul>
                                                <ul className="level_three_col col-md-6">
                                                    <li className="nav_item"><h6 className="nav_label">Top Brands</h6></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Apple</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Samsung</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Sony</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Dell</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">HP</Link></li>
                                                    <li className="nav_item"><Link className="nav_link" to="/">Canon</Link></li>
                                                </ul>
                                            </div>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    </li>
                </ul>
            </div >

        )
    }
}