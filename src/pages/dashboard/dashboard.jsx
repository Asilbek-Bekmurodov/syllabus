import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import cls from "./dashboard.module.scss";
import sidebarData, { routeData } from "./sidebarData";
function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <Navbar />
      <h3 className={cls.title}>
        <AiOutlineArrowLeft
          onClick={() => navigate("/")}
          className={cls.icon}
        />{" "}
        Work with BigData in Cloud
      </h3>
      <div className={cls["sidebar-container"]}>
        <ul className={cls.nav_list}>
          {sidebarData.map((item, index) => (
            <li key={index} className={cls["nav-item"]}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  [cls.nav_link, isActive ? cls.active : null].join(" ")
                }
                children={<div className={cls.child}>{item.title}</div>}
              />
            </li>
          ))}
        </ul>
        <Outlet />
        <div className={cls["info-wrapper"]}>
          <Routes>
            {routeData.map(({ title, path }) => (
              <Route
                path={path}
                element={
                  <div className={cls.info}>
                    <h2 className={cls.info_title}>{title}</h2>
                    <p className={cls.paragraph}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iusto modi cumque ipsa sunt molestiae tempora quas
                      temporibus at nam itaque repellat consectetur tenetur
                      <br />
                      <br />
                      officiis cum fuga voluptatibus obcaecati neque adipisci,
                      labore architecto. Sit, earum perspiciatis! Velit dolore
                      totam nesciunt cupiditate
                    </p>
                  </div>
                }
              />
            ))}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dashboard;
