import React from 'react';
import classnames from 'classnames';

import ProGridBoxWishlist from './ProductGridWishlist';

export default class ProBoxWishlist extends React.Component {
    render() {
        return (
            <div className={classnames('product_box', this.props.className)}>
                <div className="card">
                        <ProGridBoxWishlist />
                </div>
            </div>
        );
    }
}