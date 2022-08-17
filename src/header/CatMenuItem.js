import { data } from "browserslist";
import React from "react";
import { Link } from "react-router-dom";
import commonParser from "../controllers/lib/commonParser";
import CatList from "./CatList";
import CatMenuIMages2x3 from "./CatMenuIMages2x3";

const CatMenuItem = (props) => {
  // console.log("props", props.category);
  return (
    <li className="nav_item dropdown">
      <div className="nav_drop_cover">
        <Link
          className="nav_link main_cat_link dropdown-toggle"
          to={commonParser.categoryLink(props.category.url_path)}
        >
          {props.category.name}
        </Link>

        {/* <Link
        className="nav_link main_cat_link only_link"
        to={commonParser.categoryLink(props.category.url_path)}
      >
        {props.category.childs.map((item) => (
          <ul key={item.parent_uid}>
            <li>{item.name}</li>
            <li>
              {item.childs.map((data) => (
                <ul key={data.parent_uid}>{data.name}</ul>
              ))}
            </li>
          </ul>
        ))}
      </Link> */}
        <div className="dropdown_col dropdown-menu">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <CatList></CatList>
              </div>
              <div className="col-md-8">
                <CatMenuIMages2x3></CatMenuIMages2x3>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </li>
  );
};

export default CatMenuItem;
