import React from 'react';
import ProductView from './ProductView';

const CatRightSec = (props) => {
    console.log("CatRightSec---->", props);
    return (
        <div className="column main" >
            {/* <Toolbar/> */}
            < div className="toolbar" >
                <div className="modes">
                    <button id="gridbtn" className={props.view === "grid" ? "product_grid_link active" : "product_grid_link"} type='button' onClick={() => props.changeView('grid')}>
                        <span className="material-icons">view_module</span>
                    </button>
                    <button id="listbtn" className={props.view === "list" ? "product_list_link active" : "product_list_link"} type='button' onClick={() => props.changeView('list')}>
                        <span className="material-icons">view_list</span>
                    </button>
                </div>
                {props.sort_fields?.options?.length > 0 &&
                    <div className="toolbar-sorter">
                        <div className="form-select">
                            <select
                                value={props.appliedFilters.product_list_order}
                                name='product_list_order'
                                id="sorter"
                                className="sorter-optio ns"
                                onChange={props.setFilterAndSort}
                            >
                                {props.sort_fields.options.map(item => (
                                    <option value={item.value}>{item.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                }
            </div>
            <div className="columns">
                <ProductView {...props} />
            </div>
            {!props.endReached &&
                <div className='product-load-more'>
                    {!props.loadingMore
                        ?
                        <button type='buttons' onClick={props.loadMoreProducts}>Load more</button>
                        :
                        <button type='buttons'>Loading more...</button>
                    }
                </div>
            }
        </div >
    );
}

export default CatRightSec;