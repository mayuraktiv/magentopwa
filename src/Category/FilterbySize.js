import React from 'react';
import classnames from 'classnames';
import Collapsible from 'react-collapsible';

import '../style/base.scss';

export default class FilterSize extends React.Component {

    render() {
        return (
            <div className="filter-options-item"> 
                 <Collapsible open trigger="Filter by Size">
                    <div className="filter-options-content">
                        <ul className="filter_input_list fsize_list fsize">
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="fils_check1" />
                                    <label className="custom-control-label" htmlFor="fils_check1">
                                        <div className="size_box"></div>
                                        <span>L</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="fils_check2" />
                                    <label className="custom-control-label" htmlFor="fils_check2">
                                        <div className="size_box"></div>
                                        <span>M</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="fils_check3" />
                                    <label className="custom-control-label" htmlFor="fils_check3">
                                        <div className="size_box"></div>
                                        <span>S</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="fils_check4" />
                                    <label className="custom-control-label" htmlFor="fils_check4">
                                        <div className="size_box"></div>
                                        <span>XS</span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                     </div>
                </Collapsible>
            </div>
            
        );
    }
}