import React, { Component } from 'react';
import classnames from 'classnames';
// import { Link } from 'react-router-dom';

import Logoname from '../images/logo3.png';
import Logoname1 from '../images/logo2.png';

export default class Logo extends Component {
    render() {
        return (
            <a className={classnames('logo d-flex align-items-center', this.props.className)} href = "/" >
                <img src = { Logoname } alt = "site_logo" />
                <div className='logo-title d-flex justify-content-center flex-column' >
                    <span className='logo-ultimate'> ULTIMATE </span>
                    <span className='logo-electronics'> ELECTRONICS</span>
                </div>
                {/* < img src = { Logoname1 }
                alt = "site_logo"
                width = { "150px" }
                /> */}
            </a>
    );
}
}