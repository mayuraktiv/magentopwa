import React, { Component } from 'react';
import classnames from 'classnames';
import '../style/base.scss';

export default class SwitcherLanguage extends Component {
    render() {
        return (
            <div className={classnames('switcher-language', this.props.className)}>
                <div className="actions dropdown options switcher-options">
                    <div className="action toggle switcher-trigger">
                        <strong className="view-ru">
                            <span>Rusia</span>
                            <span className="material-icons">expand_more</span>
                        </strong>
                    </div>
                </div>
            </div>
        )
    }
}