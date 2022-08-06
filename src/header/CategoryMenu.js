import React  from 'react';
// import classnames from 'classnames';

export default function CategoryMenu() {
    const [show, setShow] = React.useState();
    return (
        <div className="categorymenu-wrapper">
            <div className="category-title" onClick={() => setShow(!show)}>
                <span className="material-icons">menu</span>
                <span>DEPARTMENTS</span>
            </div>
            <ul id="vertical-categorymenu" className={`vertical-menu nav box ${show ? "show" : ""}`}>
                <li className="static-category"><a href="/#"><span>Value of the Day</span></a></li>
                <li className="static-category"><a href="#"><span>Top 100 Offers</span></a></li>
                <li className="static-category"><a href="#"><span>Lookbook</span></a></li>
                <li className="static-category"><a href="#"><span>Computers</span></a></li>
                <li className="static-category"><a href="#"><span>Watches & Eyewear</span></a></li>
                <li className="static-category"><a href="#"><span>TV & Audio</span></a></li>
                <li className="static-category"><a href="#"><span>Bags & Luggage</span></a></li>
            </ul>
        </div>
    )
}