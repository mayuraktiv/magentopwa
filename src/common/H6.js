import React from 'react';

export default class H6 extends React.Component {
    render() {
        return (
            <h6 className={this.props.className}>{this.props.children}</h6>
        );
    }
}