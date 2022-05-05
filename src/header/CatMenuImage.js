import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import catmenuimg from '../images/cat_menu_img.png';

import '../style/base.scss';

export default class CatMenuImage extends Component {
    render() {
        return (
            <div className="cat_img_cover">
                <Link to="/" className="cat_img_link">
                    <img src={catmenuimg} className="cat_menu_img" alt="cat_menu_img" />
                </Link>
            </div>
        )
    }
}