import React, { Component } from 'react';
import classnames from 'classnames';
import FirstFooter from './First-FooterSection';
import SecondFooter from './Second-FooterSection';
import ThirdFooter from './Third-FooterSection';
import FourthFooter from './Fourth-FooterSection';

export default class MiddleFooter extends Component {
    render() {
        return (
            <div className={classnames('middle-footer', this.props.className)}>
                <div className="frame">
                    <div className="row">
                          <div className="col-4 col-tb-6 col-mb-12">
                            <FirstFooter></FirstFooter>
                          </div>
                          <div className="col-3 col-tb-6 col-mb-12">
                              <SecondFooter></SecondFooter>
                          </div>
                          <div className="col-3 col-tb-6 col-mb-12">
                              <ThirdFooter></ThirdFooter>
                          </div>
                          <div className="col-2 col-tb-6 col-mb-12">
                              <FourthFooter></FourthFooter>
                          </div>
                    </div>
                </div>
            </div>
        );
    }
}