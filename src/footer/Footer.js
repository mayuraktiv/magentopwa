import React, { Component } from 'react';
import classnames from 'classnames';
import TopFooter from './TopFooter';
import MiddleFooter from './MiddleFooter';
import BottomFooter from './BottomFooter';

export default class Footer extends Component {
    render() {
        return (
            <footer className={classnames('page-footer', this.props.className)}>
                <div className="footer content">
                    <TopFooter></TopFooter>
                    <MiddleFooter></MiddleFooter>
                    <BottomFooter></BottomFooter>
                </div>
            </footer>
        );
    }
}