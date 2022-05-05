import React from 'react';

export default class H3 extends React.Component {
    render() {
        return (
            <h3 className={this.props.className}>{this.props.children}</h3>
        );
    }
}