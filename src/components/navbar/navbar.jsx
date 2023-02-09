import React, { Component } from "react";
import Logo from "../../assets/images/logo.jpg";
import cls from "./navbar.module.scss";

const links = [
  "Universitet",
  "Ommabop sillabuslar",
  "Statistika",
  "Universitetlar reytingi",
  "Biz haqimizda",
];

export class Navbar extends Component {
  render() {
    return (
      <div className={cls.wrapper}>
        <div className={cls.navbar}>
          <div className={cls.logo}>
            <img src={Logo} alt="" />
          </div>
          <div className={cls.search}>
            <input type="text" placeholder="Qidiruv" />
          </div>
          <div className={cls.last}>
            <div className={cls.language}>O'zbekcha</div>
            <button className={cls.login}>Kirish</button>
          </div>
        </div>
        <div className={cls.links}>
          <ul className={cls.items}>
            {links.map((link) => (
              <li className={cls.item}>
                <a className={cls.link} href="#1">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
