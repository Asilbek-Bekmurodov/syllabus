import sidebarData from "../sidebarData";
import SidebarItem from "./sidebarItem";
import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className="sidebar">
      {sidebarData.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
