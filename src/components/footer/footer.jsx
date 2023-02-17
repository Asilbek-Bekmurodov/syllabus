import React, { Fragment } from "react";
import Phone from "../../assets/icons/phone";
import Logo from "../../assets/images/logo.jpg";
import photo1 from "../../assets/images/ministry.f260f052.png";
import photo2 from "../../assets/images/world-bank.a5a92951.png";
import Email from "../../assets/icons/1.svg";
import Adress from "../../assets/icons/2.svg";

import cls from "./footer.module.scss";
import Instagram from "../../assets/icons/instagram";
import Facebook from "../../assets/icons/facebook";

const sections = ["Universitetlar", "Ommabop sillabuslar", "Statistika"];
const resurs = [
  "Adabiyotlar",
  "Maqolalar",
  "Dissertatsiyalar",
  "Monografiyalar",
];
function Footer() {
  return (
    <div className={cls.wrapper}>
      <div className={cls.footer}>
        <div className={cls.right}>
          <div className={cls.contact}>
            <h2>Bo'glanish</h2>

            <div className={cls.items}>
              <div className={cls.item}>
                <Phone />
                <div className={cls.container}>
                  <p>Telefon</p>
                  <h4>(+998 97) 5187161</h4>
                </div>
              </div>

              <div className={cls.item}>
                <img src={Email} alt="" />
                <div className={cls.container}>
                  <p>Email</p>
                  <h4>zoirov.ulmas@gmail.com</h4>
                </div>
              </div>

              <div className={cls.item}>
                <img src={Adress} alt="" />
                <div className={cls.container}>
                  <p>Manzil</p>
                  <h4>Toshkent, CHILONZOR TUMANI, xiеbon ISLOM KARIMOV, 49</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.sections}>
            <h2>Bo'limlar</h2>
            <div className={cls.container}>
              {sections.map((section, idx) => (
                <p key={idx}>{section}</p>
              ))}
            </div>
          </div>
          <div className={cls.resurs}>
            <h2>Resurslar</h2>
            <div className={cls.container}>
              {resurs.map((section) => (
                <Fragment key={section}>
                  <p>{section}</p>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className={cls.left}>
          <img src={Logo} alt="" />
          <p className={cls.title}>
            Oliy ta'lim muassasalarining yagona elektron sillabus axborot tizimi
          </p>
          <div className={cls.imgs}>
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
          </div>
          <div className={cls.icons}>
            <Instagram />
            <Facebook />
          </div>
          <p className={cls.subtitle}>
            “Syllabus” © 2023. O‘zbekiston Respublikasi Oliy talim fan va
            Innovatsiyalar vazirligi
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
