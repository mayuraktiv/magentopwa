import React from 'react';
import { Link } from 'react-router-dom';
import commonParser from '../controllers/lib/commonParser';
import CatList from './CatList';
import CatMenuIMages2x3 from './CatMenuIMages2x3';

const CatMenuItem = (props) => {
    return (
        <li className="nav_item dropdown">
            <div className="nav_drop_cover">
                <Link className="nav_link main_cat_link dropdown-toggle" to={commonParser.categoryLink(props.category.url_path)}>{props.category.name}</Link>
                <div className="dropdown_col dropdown-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <CatList></CatList>
                            </div>
                            <div className="col-md-8">
                                <CatMenuIMages2x3></CatMenuIMages2x3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {this.props.params.type === 1 &&
                    <Link className="nav_link main_cat_link only_link" to="/">{this.props.children}</Link>
                }
                {this.props.params.type === 2 &&
                    <Link className="nav_link main_cat_link only_link offer_link" to="/">{this.props.children}</Link>
                } */}
        </li>
    );
}

export default CatMenuItem;