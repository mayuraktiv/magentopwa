import React from 'react';
import Collapsible from 'react-collapsible';

export default class FilterColors extends React.Component {

    render() {
        return (
            <div className="filter-options-item"> 
                 <Collapsible open trigger="Filter by Color">
                    <div className="filter-options-content fcolor_content">
                        <ul className="filter_input_list fcolor_list fcolor">
                            <li>
                                <div className="custom-control custom-checkbox class_tooltip">
                                    <input type="checkbox" className="custom-control-input" id="filc_check1" />
                                    <label className="custom-control-label" htmlFor="filc_check1">
                                        <div className="color_box" style={{ 'backgroundColor': '#000' }}></div>
                                        <span className="tooltiptext"><span className="tooltipcolor" style={{ 'backgroundColor': '#000' }}></span>Black</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox class_tooltip">
                                    <input type="checkbox" className="custom-control-input" id="filc_check2" />
                                    <label className="custom-control-label" htmlFor="filc_check2">
                                        <div className="color_box" style={{ 'backgroundColor': '#ff0000' }}></div>
                                        <span className="tooltiptext"><span className="tooltipcolor" style={{ 'backgroundColor': '#ff0000' }}></span>Red</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox class_tooltip">
                                    <input type="checkbox" className="custom-control-input" id="filc_check3" />
                                    <label className="custom-control-label" htmlFor="filc_check3">
                                        <div className="color_box" style={{ 'backgroundColor': '#02f' }}></div>
                                        <span className="tooltiptext"><span className="tooltipcolor" style={{ 'backgroundColor': '#02f' }}></span>Blue</span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="custom-control custom-checkbox class_tooltip">
                                    <input type="checkbox" className="custom-control-input" id="filc_check4" />
                                    <label className="custom-control-label" htmlFor="filc_check4">
                                        <div className="color_box" style={{ 'backgroundColor': '#5f00ff' }}></div>
                                        <span className="tooltiptext"><span className="tooltipcolor" style={{ 'backgroundColor': '#5f00ff' }}></span>Purple</span>
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