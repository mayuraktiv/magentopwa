import React, { useState } from "react";
import { Link } from "react-router-dom";
import commonParser from "../controllers/lib/commonParser";
import CatList from "./CatList";

const CatMenuItem = (props) => {
  const [show, setShow] = useState(false);
  const onCatgoryHover = () => {
    setShow(true);
  }

  const onCatgoryOut = () => {
    setShow(false);
  }

  return (
    <li className="nav_item dropdown">
      <div className="nav_drop_cover">
        <Link
          className="nav_link main_cat_link dropdown-toggle"
          to={commonParser.categoryLink(props.category.url_path)}
          onMouseOver={onCatgoryHover}
          onMouseOut={onCatgoryOut}
        >
          {props.category.name}
        </Link>
        <div className="dropdown_col dropdown-menu" style={{ display: show ? 'block' : 'none' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <CatList {...props}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CatMenuItem;
