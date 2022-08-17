import React, { Fragment } from 'react';
import CategoryContext from '../controllers/contexts/config/categoryContext';
import CatMenuItem from './CatMenuItem';

const CatMenu = () => {
    const { categories } = React.useContext(CategoryContext);
    
    return (
        <div className="main_navbar navbar-expand-lg custom_navbar offcanvas-collapse">
            <div className="navbar-collapse" id="webstore_nav">
                <ul className="navbar-nav nav_item_listing d-flex mb-0">
                    {categories?.map(category => (
                        <Fragment key={"menu-cat-" + category.uid}>
                            {/* {console.log("categories",category)} */}
                            <CatMenuItem category={category}/>
                        </Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CatMenu;