import React from "react";
import "./sidebar.scss";
// import leftSquareArrow from "../../assets/svgs/left-square-fill.svg";
import { SidebarData } from "./sidebarData";
import { NavLink } from "react-router-dom";
import Icon from "../icon/Icon";

const Sidebar = () => {
  // const [sidebarWidthIsReduced, setSidebarWidthIsReduced] = useState(false);

  // const toggleSidebarWidth = () => {
  //   setSidebarWidthIsReduced((prev) => !prev);
  // };
  return (
    <div className="sidebar">
      <header className="sidebar__header">
        {/* <div className="flex-basis-30 place-items-center">
          <button
            type="button"
            className={`${
              sidebarWidthIsReduced ? "" : "toogle-sidebar-width-button"
            }`}
            onClick={toggleSidebarWidth}
          >
            <Icon imgSrc={leftSquareArrow} />
          </button>
        </div> */}
        <div className="hide--text flex-basis-70">Automated VIS</div>
      </header>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className="sidebar__list-item">
                <NavLink
                  to={val.link}
                  className={({ isActive }) =>
                    isActive
                      ? "sidebar__list-item__link active-link"
                      : "sidebar__list-item__link"
                  }
                >
                  <span className="flex-basis-30 place-items-center">
                    <Icon imgSrc={val.icon} />
                  </span>
                  <span className="hide--text flex-basis-70">
                    <span>{val.title}</span>
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
