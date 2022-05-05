import React from 'react';
import MainSidebar from './MainSidebar';

const CatLeftSec = (props) => {
    return (
        <div className="cat-left-sidebar">
            <h6 className="close-filter">Filter</h6>
            <MainSidebar {...props} />
        </div>
    )
}

export default CatLeftSec;