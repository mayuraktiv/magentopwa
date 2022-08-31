import React from 'react';
import { Link } from 'react-router-dom';
import CategoryContext from '../controllers/contexts/config/categoryContext';
import commonParser from '../controllers/lib/commonParser';

export default function CategoryMenu() {
    const [show, setShow] = React.useState();
    const { categories } = React.useContext(CategoryContext);
    return (
        <div className="categorymenu-wrapper">
            <div className="category-title" onClick={() => setShow(!show)}>
                <span className="material-icons">menu</span>
                <span>CATEGORIES</span>
            </div>
            <ul id="vertical-categorymenu" className={`vertical-menu nav box ${show ? "show" : ""}`}>
                {categories?.map(category => (
                    <li className="static-category" key={`category-${category.uid}`}>
                        <Link to={commonParser.categoryLink(category.url_path)}>
                            <span>{category.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}