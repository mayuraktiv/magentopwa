import React, { Component } from 'react';
import classnames from 'classnames';

export default class SwitcherCurrency extends Component {
    render() {
        return (
            <div className={classnames('switcher-currency', this.props.className)}>
                    <div className="actions dropdown options switcher-options">
                        <div className="action toggle switcher-trigger">
                            <strong className="language-USD">
                                <span>USD - US Dollar</span>
                                <span className="material-icons">expand_more</span>
                            </strong>
                        </div>
                    </div>
            </div>
        )
    }
}