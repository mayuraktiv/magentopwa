import React from 'react';
import classnames from 'classnames';

import ProBox from './Probox';

export default class NewProduct extends React.Component {
    render() {
        return (
            <div className="newproduct_row">
                <div className="product-grid">
                        <div className="product_slide_row">
                            <ProBox params={{ type: 'grid' }}></ProBox>
                        </div>
                        <div className="product_slide_row">
                            <ProBox params={{ type: 'grid' }}></ProBox>
                        </div>
                        <div className="product_slide_row">
                            <ProBox params={{ type: 'grid' }}></ProBox>
                        </div>
                        <div className="product_slide_row">
                            <ProBox params={{ type: 'grid' }}></ProBox>
                        </div>
                </div>
                <div className="view_more">
                    <button className="btn shopnow_btn btn-default">View More</button>
                </div>
            </div>
        );
    }
}