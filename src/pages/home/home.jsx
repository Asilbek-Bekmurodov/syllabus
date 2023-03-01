import React from "react";
import RightArrow from "../../assets/icons/right-arrow";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import cls from "./home.module.scss";
import { MdCalendarToday } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import PhotoCarousel from "../../components/photo-carusel/photo-carousel";
import { useNavigate } from "react-router-dom";

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

const news = [
  {
    imgURL:
      "https://daryo.uz/static/2023/zulfiya/photo_2023-02-13_21-54-39.jpg",
    title: "Turkiyadagi shahar zilzila sababli butunlay buzib tashlanadi",
  },
  {
    imgURL: "https://daryo.uz/static/2023/02/medium-63ebc5a0cb190.jpg",
    title:
      "“Daryo kundaligi”da 14-fevral kuni sodir bo‘lgan eng muhim voqealar ",
  },
  {
    imgURL: "https://daryo.uz/static/Fw5ofP15784890544366_l.jpg",
    title:
      "“Menga nisbatan bosim yoki qiynoq boʻlmadi” – tovlamachilikda gumon qilinib, qamoqqa olingan jurnalist Xurshid Daliyev tergov qanday olib borilayotgani yuzasidan izoh berdi",
  },
  {
    imgURL: "https://daryo.uz/static/2023/02/thumb-63ebafda57250.jpg",
    title: "O‘zbekiston banklarida kreditlar ajratish ko‘paymoqda",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <Navbar />
      <h2>Yangi Sillabuslar</h2>
      <section className={cls["new-syllabus"]}>
        <div className={cls.container}>
          <div className={cls.syllabus}>
            <div onClick={() => navigate("/dashboard")} className={cls.card}>
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

            <div onClick={() => navigate("/dashboard")} className={cls.card}>
              <h4 className={cls.title}>Java Dasturlash tili 222</h4>
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

            <div onClick={() => navigate("/dashboard")} className={cls.card}>
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

            <div onClick={() => navigate("/dashboard")} className={cls.card}>
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
              {cards.map(({ color, title }, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: color }}
                  onClick={() => navigate("/dashboard")}
                  className={cls.card}
                >
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={cls.news}>
          <h4>Dolzarb xabarlar</h4>
          <div className={cls.container}>
            {news.map(({ imgURL, title }, idx) => (
              <div key={idx} className={cls.new}>
                <img src={imgURL} alt="" />
                <p className={cls.paragraph}>{title}</p>
                <div className={cls["bottom-info"]}>
                  <p>
                    <MdCalendarToday />
                    10:39 | 22.01.2021
                  </p>
                  <p>
                    <FaEye />
                    1066
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PhotoCarousel />
      <Footer />
    </div>
  );
}
export default Home;
