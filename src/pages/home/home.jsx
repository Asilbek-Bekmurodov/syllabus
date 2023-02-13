import React, { Component } from "react";
import RightArrow from "../../assets/icons/right-arrow";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import cls from "./home.module.scss";

const cards = [
  {
    color: "#90ABE4",
    title: "Huquqshunos Xushnudbek Xudoyberdiyevning Telegram kanali",
  },
  {
    color: "#017DCE",
    title: "Zakovat- Qiziqarli savollar",
  },
  {
    color: "#870000",
    title: "Zakovat Quiz",
  },
  {
    color: "#C7074F",
    title: "Koronovirus info",
  },
];
export class Home extends Component {
  render() {
    return (
      <div className={cls.wrapper}>
        <Navbar />
        <h2>Yangi Sillabuslar</h2>
        <section className={cls["new-syllabus"]}>
          <div className={cls.container}>
            <div className={cls.syllabus}>
              <div className={cls.card}>
                <h4 className={cls.title}>Java Dasturlash tili</h4>
                <p>
                  OTM:<b>Toshkent Davlat Iqtisodiyot Universiteti</b>
                </p>
                <p>
                  O'qituvchilar:<b>Zoirov U</b>
                </p>
                <p>
                  Email:<b>zoirov.ulmas@gmail.com</b>
                </p>
                <p>
                  Kafedra:<b>Raqamli iqtisodiyot va Axborot Texnologiyalari</b>
                </p>
                <p>
                  Yo’nalish:<b>Axborot texnologiyalari</b>
                </p>
                <p>
                  Kursi: <b>2</b>
                </p>

                <button className={cls.more}>
                  Batafsil <RightArrow />
                </button>
              </div>

              <div className={cls.card}>
                <h4 className={cls.title}>Java Dasturlash tili</h4>
                <p>
                  OTM:<b>Toshkent Davlat Iqtisodiyot Universiteti</b>
                </p>
                <p>
                  O'qituvchilar:<b>Zoirov U</b>
                </p>
                <p>
                  Email:<b>zoirov.ulmas@gmail.com</b>
                </p>
                <p>
                  Kafedra:<b>Raqamli iqtisodiyot va Axborot Texnologiyalari</b>
                </p>
                <p>
                  Yo’nalish:<b>Axborot texnologiyalari</b>
                </p>
                <p>
                  Kursi: <b>2</b>
                </p>

                <button className={cls.more}>
                  Batafsil <RightArrow />
                </button>
              </div>

              <div className={cls.card}>
                <h4 className={cls.title}>Java Dasturlash tili</h4>
                <p>
                  OTM:<b>Toshkent Davlat Iqtisodiyot Universiteti</b>
                </p>
                <p>
                  O'qituvchilar:<b>Zoirov U</b>
                </p>
                <p>
                  Email:<b>zoirov.ulmas@gmail.com</b>
                </p>
                <p>
                  Kafedra:<b>Raqamli iqtisodiyot va Axborot Texnologiyalari</b>
                </p>
                <p>
                  Yo’nalish:<b>Axborot texnologiyalari</b>
                </p>
                <p>
                  Kursi: <b>2</b>
                </p>

                <button className={cls.more}>
                  Batafsil <RightArrow />
                </button>
              </div>
            </div>
            <div className={cls.useful}>
              <h3>Foydali Malumotlar</h3>

              <div className={cls.cards}>
                {cards.map(({ color, title }) => (
                  <div style={{ backgroundColor: color }} className={cls.card}>
                    <p>{title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={cls.news}>
            <h4>Dolzarb xabarlar</h4>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
