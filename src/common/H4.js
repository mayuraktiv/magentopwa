import React from 'react';

export default class H4 extends React.Component {
    render() {
        return (
            <h4 className={this.props.className}>{this.props.children}</h4>
        );
    }
}