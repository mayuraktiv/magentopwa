import React, { Component } from 'react';
import './style/base.scss';
import MainRouter from './routes/index';

export default class App extends Component {
    render() {
        return (
            <MainRouter />
        );
    }
}
