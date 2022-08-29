import React from 'react';
import classnames from 'classnames';
import Logo from '../common/Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const MainHeader = (props) => {
    return (
        <div className={classnames('main_header', props.className)}>
            <div className="frame">
                <div className="row">
                    <div className="col-3 d-flex align-items-center">
                        <Logo />
                    </div>
                    <div className="col-9 d-flex justify-content-end align-items-center mobile-col-header">
                        <Menu />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;