import React from "react";
import { Link } from "react-router-dom";
import rightArraw from "../static/images/home/right-arrow.png";

const BreadCrumb = ({ node1, node2, urlNode1, type2 }) => {
  return (
    <>
      <section
        className={
          type2 ? "bread_crumb type_2 container" : "bread_crumb container"
        }
      >
        <Link to="/">Trang chủ</Link>
        <img src={rightArraw} alt="" width="12" height="12" />
        {node1 && !node2 && <span>{node1}</span>}
        {node1 && node2 && (
          <React.Fragment>
            <span>
              <Link to={urlNode1 || "/"}>{node1}</Link>
            </span>
            <img src={rightArraw} alt="" width="12" height="12" />
            <span>{node2}</span>
          </React.Fragment>
        )}
      </section>
    </>
  );
};

export default BreadCrumb;
