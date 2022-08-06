import React from 'react';
import MainSidebar from './MainSidebar';

const CatLeftSec = (props) => {
    return (
        <div className="cat-left-sidebar">
            <MainSidebar {...props} />
        </div>
    )
}

export default CatLeftSec;