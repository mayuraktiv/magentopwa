import React from 'react';
// import FilterPriceRange from './FilterbyPrice';
// import FilterColors from './FilterbyColor';
// import FilterSize from './FilterbySize';
import DisplayFilter from './displayFilters';

const MainSidebar = (props) => {
    console.log("MainSidebar---->", props);
    return (
        <div className="main-sidebar">
            <div className="block-filter-content">
                <div className="filter-options">
                    <DisplayFilter {...props}/>
                    {/* <FilterPriceRange {...props} />
                    <FilterColors {...props} />
                    <FilterSize {...props} /> */}
                </div>
            </div>
        </div>
    )
}

export default MainSidebar;