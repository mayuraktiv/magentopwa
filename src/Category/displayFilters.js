import Collapsible from "react-collapsible";

const DisplayFilter = (props) => {
    console.log("DisplayFilter--->", props);
    return (
        <div className="filter-options-item">
            {props.filters?.map(item => (
                <Collapsible open trigger={item.label} key={"filter-" + item.attribute_code}>
                    <div className="filter-options-content fcolor_content">
                        <ul className="filter_input_list fcolor_list">
                            {item.options.map((option, index) => {
                                let checked = false;
                                if(props.appliedFilters[item.attribute_code] === option.value) {
                                    checked = true;
                                }
                                return (
                                    <li>
                                        <div className="custom-control custom-checkbox class_tooltip">
                                            <input
                                                type="checkbox"
                                                checked={checked}
                                                id={item.attribute_code + "-" + index}
                                                name={item.attribute_code}
                                                value={option.value}
                                                onChange={props.setFilterAndSort}
                                            />
                                            <label className="custom-control-label" htmlFor={item.attribute_code + "-" + index}>{option.label}</label>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Collapsible>
            ))}
        </div>
    );
}

export default DisplayFilter;