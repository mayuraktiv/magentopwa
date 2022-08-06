import React from 'react';
import MobileSidebar from './MobileSidebar';

export default function MobileMenu() {
    const [active] = React.useState();
    return (
        <div className={`mobile-menu ${active ? "active" : ""}`}>
            <div className="mobile-menu-wrapper">
                {/* <div className="nav-close">
                    <span className="material-icons"  onClick={() => setShow(false)}>close</span>
                </div> */}
                <MobileSidebar></MobileSidebar>
            </div>
        </div>
    )
}