import React from 'react';
import classnames from 'classnames';

import '../style/base.scss';

export default class CurrencySymbol extends React.Component {
    render() {
        return (
            <span className={classnames('currency_symbol', this.props.className)}>$</span>
        );
    }
}