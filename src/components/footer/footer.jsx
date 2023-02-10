import React, { Component } from "react";
import Phone from "../../assets/icons/phone";
import Logo from "../../assets/images/logo.jpg";
import photo1 from "../../assets/images/ministry.f260f052.png";
import photo2 from "../../assets/images/world-bank.a5a92951.png";

import cls from "./footer.module.scss";
import Instagram from "../../assets/icons/instagram";
import Facebook from "../../assets/icons/facebook";

const sections = ["Muassalar", "Jurnallar", "Mualliflar"];
const resurs = [
  "Adabiyotlar",
  "Maqolalar",
  "Dissertatsiyalar",
  "Monografiyalar",
];
export class Footer extends Component {
  render() {
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
                    <h4>(+998 71) 246-10-81</h4>
                  </div>
                </div>

                <div className={cls.item}>
                  <Phone />
                  <div className={cls.container}>
                    <p>Email</p>
                    <h4>press@edu.uz</h4>
                  </div>
                </div>

                <div className={cls.item}>
                  <Phone />
                  <div className={cls.container}>
                    <p>Manzil</p>
                    <h4>100095, Toshkent shahri, 2-Chimboy ko'chasi, 96-uy</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className={cls.sections}>
              <h2>Bo'limlar</h2>
              <div className={cls.container}>
                {sections.map((section) => (
                  <p>{section}</p>
                ))}
              </div>
            </div>
            <div className={cls.resurs}>
              <h2>Resurslar</h2>
              <div className={cls.container}>
                {resurs.map((section) => (
                  <p>{section}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={cls.left}>
            <img src={Logo} alt="" />
            <p className={cls.title}>
              Oliy ta'lim muassasalarining yagona elektron kutubxona axborot
              tizimi
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
              “Unilibrary” © 2022. O‘zbekiston Respublikasi Oliy va o‘rta maxsus
              ta'lim vazirligi
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
