import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Logoname from '../images/logo3.png';

const Logo = (props) => {
    return (
        <Link className={classnames('logo d-flex align-items-center', props.className)} to="/" >
            <img src={Logoname} alt="site_logo" />
            <div className='logo-title d-flex justify-content-center flex-column' >
                <span className='logo-ultimate'> ULTIMATE </span>
                <span className='logo-electronics'> ELECTRONICS</span>
            </div>
        </Link>
    );
}

export default Logo;