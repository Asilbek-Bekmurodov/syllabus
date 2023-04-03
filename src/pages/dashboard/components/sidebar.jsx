import SidebarItem from "./sidebarItem";
import "./sidebar.scss";
import sideData from "../inside";
import { useParams } from "react-router-dom";

export default function Sidebar() {
  const { type } = useParams();

  return (
    <div className="sidebar">
      <div>
        {sideData[type].map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
