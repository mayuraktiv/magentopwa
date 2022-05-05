import React, { Component } from 'react';
import classnames from 'classnames';

export default class TopFooter extends Component {
    render() {
        return (
            <div className={classnames('top-footer', this.props.className)}>
                <div className="frame">
                    <div className="text-center">
                        <h3 className="mb-10">NEWSLETER SIGN UP</h3>
                        <p>Subscribe our newsletter to get latest new about our new product and promo campaign.</p>
                    </div>
                    <div>
                        <div className="block newsletter">
                            <div className="content">
                                <form className="form subscribe">
                                    <div className="field form-group newsletter">
                                        <div className="control">
                                            <input name="email" type="email" id="newsletter-footer" placeholder="Your email address"></input>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <button className="action subscribe btn btn-primary btn-sm" title="Subscribe" type="submit">
                                            <span>Subscribe</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}