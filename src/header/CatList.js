import React from 'react';
import { Link } from 'react-router-dom';
import commonParser from '../controllers/lib/commonParser';

const CatList = ({ category }) => {
    return (
        <div className="cat_list_row">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 nav_label_row">
                        <h5 className="nav_label">{category.name}</h5>
                    </div>
                </div>
                <div className="row">
                    <ul className="level_two col-md-6">
                        {category.childs.map(child => (
                            <li className="nav_item" key={`child-cat-${child.uid}`}>
                                <Link className="nav_link" to={commonParser.categoryLink(child.url_path)}>{child.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default CatList;