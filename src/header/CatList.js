import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../style/base.scss';

export default class CatList extends Component {
    render() {
        return (
            <div className="cat_list_row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 nav_label_row">
                            <h5 className="nav_label">Category</h5>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="level_two col-md-6">
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
                        <ul className="level_two col-md-6">
                            <li className="nav_item"><Link className="nav_link" to="/">Apple</Link></li>
                            <li className="nav_item"><Link className="nav_link" to="/">Samsung</Link></li>
                            <li className="nav_item"><Link className="nav_link" to="/">Sony</Link></li>
                            <li className="nav_item"><Link className="nav_link" to="/">Dell</Link></li>
                            <li className="nav_item"><Link className="nav_link" to="/">HP</Link></li>
                            <li className="nav_item"><Link className="nav_link" to="/">Canon</Link></li>
                        </ul>
                    </div>
                </div>

            </div >
        )
    }
}