import Logo from "../../assets/images/logo.jpg";
import Search from "../../assets/icons/search-icon.39584090 (1).svg";
import cls from "./navbar.module.scss";
import cx from "classnames";
import { NavLink, useNavigate } from "react-router-dom";

const links = [
  { title: "Universitet", path: "/university" },
  { title: " Talim Statistika", path: "/" },
  { title: " Mahalliy Universitetlar reytingi", path: "/" },
  { title: "Biz haqimizda", path: "/" },
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <div className={cls.navbar}>
        <div onClick={() => navigate("/")} className={cls.logo}>
          <img src={Logo} alt="" />
        </div>
        <div className={cls.search}>
          <input type="text" placeholder="Qidiruv" />
          <img onClick={() => navigate("/search")} src={Search} alt="" />
        </div>
        <div className={cls.last}>
          <div className={cls.language}>O'zbekcha</div>
          <button className={cls.login}>Kirish</button>
        </div>
      </div>
      <div className={cls.links}>
        <ul className={cls.items}>
          {links.map(({ title, path }, idx) => (
            <li key={idx} className={cls.item}>
              <NavLink className={cls.link} to={path}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
