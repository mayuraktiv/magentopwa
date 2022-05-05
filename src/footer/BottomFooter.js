import React, { Component } from 'react';
import classnames from 'classnames';

export default class BottomFooter extends Component {
    render() {
        return (
            <div className={classnames('bottom-footer', this.props.className)}>
                <div className="frame">
                    <div className="row">
                        <div className="col-6 col-tb-12 col-mb-12 copyright">
                            <address>
                                <small className="copyright">
                                    <span>Copyright © 2017 Claue. All rights reserved. Powered by Magesolution</span>
                                </small>
                            </address>
                        </div>
                        <div className="col-6 col-tb-12 col-mb-12">
                            <ul>
                                <li><a href="#">Blog</a></li>    
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Shop</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}