import React from "react";
import CatRightSec from "./catRightSection";
import CatLeftSec from "./catLeftSidebar";

const CatContainer = (props) => {
    const [show, setShow] = React.useState();
    // console.log("CatContainer----->", props);
    return (
        <div className="frame">
            <div className="cat-row">
                <button className="filter-menulist" onClick={() => setShow(!show)}>
                    <span className="material-icons">sort</span>
                </button>
                <div className={`filter-left-section ${show ? "show" : ""}`}>
                    <div className="filter_close">
                        <h6 className="close-filter">Filter</h6>
                        <button className="filter-close">
                            <span className="material-icons" onClick={() => setShow(false)}>
                                close
                            </span>
                        </button>
                    </div>
                    <CatLeftSec
                        filters={props.filters}
                        appliedFilters={props.appliedFilters}
                        setFilterAndSort={props.setFilterAndSort}
                    />
                </div>
                <CatRightSec {...props} />
            </div>
        </div>
    );
}

export default CatContainer;
