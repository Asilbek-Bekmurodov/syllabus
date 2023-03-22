import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import syllabusData from "../home/inside";
import Sidebar from "./components/sidebar";
import cls from "./dashboard.module.scss";
import { routeData } from "./routeData";
function Dashboard() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const { type } = useParams("");
  useEffect(() => {
    window.scrollTo(0, 0);
    syllabusData.filter((item) => item.path === type && setTitle(item.title));
  }, []);
  return (
    <div className={cls.wrapper}>
      <Navbar />
      <h3 className={cls.title}>
        <AiOutlineArrowLeft
          onClick={() => navigate("/")}
          className={cls.icon}
        />{" "}
         {title} Syllabus
      </h3>
      <div className={cls["sidebar-container"]}>
        {/* <ul className={cls.nav_list}>
          {sidebarData.map((item, index) => (
            <li key={index} className={cls["nav-item"]}>
              <NavLink
                to={item.path}
                className={cls.nav_link}
                children={<div className={cls.child}>{item.title}</div>}
              />
            </li>
          ))}
        </ul> */}
        <Sidebar />
        <div className={cls["info-wrapper"]}>
          <Routes>
            {routeData.map(({ content, path }, idx) => (
              <Route key={idx} path={path} element={content} />
            ))}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashboard;
