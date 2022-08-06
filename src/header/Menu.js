import React from 'react';
// import classnames from 'classnames';
import AllCategoriesMenu from './AllCategoriesMenu';
import CatMenu from './CatMenu';

export default function Menu() {
    return (
        <div className= "main-menu-section">
            <div className="menu-wrapper">
                <AllCategoriesMenu></AllCategoriesMenu>
                <CatMenu></CatMenu> 
            </div>
        </div>
    )   
}