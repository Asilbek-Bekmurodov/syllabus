import sidebarData from "../routeData";
import SidebarItem from "./sidebarItem";
import "./sidebar.scss";
import sideData from "../inside";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { type } = useParams();

  return (
    <div className="sidebar">
      {sideData[type].map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
