import { useState } from "react";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div onClick={() => setOpen(!open)} className={"sidebar-title"}>
          <span>{item.title}</span>
          <BsChevronDown className="toggle-btn btn" />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path || "#"} className="sidebar-item plain">
        {item.icon && <i className={item.icon}></i>}
        {item.title}
      </NavLink>
    );
  }
}
