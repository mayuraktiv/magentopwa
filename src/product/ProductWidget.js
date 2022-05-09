import React from 'react';
import classnames from 'classnames';
import ProductSlider from './ProductSlider';

export default class ProductWidget extends React.Component {
    render() {
        return (
            <div className={classnames('product_widget_row', this.props.className)}>
                <div className="frame">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductSlider params={{ type: 0 }}></ProductSlider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}