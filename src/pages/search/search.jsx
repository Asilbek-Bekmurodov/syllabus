import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import cls from "./search.module.scss";
const data = [
  {
    sillabus: "Java dasturlash tili",
    otm: "Toshkent Davlat Iqtisodiyot Universiteti",
    teacher: "Zoirov U",
    email: "zoirov.ulmas@gmail.com",
    kafedra: "Raqamli iqisodiyot",
    path: "java",
  },
];
function Search() {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      <Navbar />

      <div className={cls["search-page"]}>
        <h3 className={cls.title}>
          <AiOutlineArrowLeft
            onClick={() => navigate("/")}
            className={cls.icon}
          />{" "}
          Qidiruv
        </h3>
        <h3 className={cls.res}>Qidiruv natijasi: 3</h3>
        <div className={cls.results}>
          {data.map(({ sillabus, otm, teacher, kafedra, email, path }, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/dashboard/${path}/about-java`)}
              className={cls.result}
            >
              <h4>{sillabus}</h4>
              <p className={cls.subtitle}>
                <b>OTM :</b> {otm}
              </p>
              <p className={cls.subtitle}>
                <b>O'qituvchi :</b> {teacher}
              </p>
              <p className={cls.subtitle}>
                <b>Email :</b> {email}
              </p>
              <p className={cls.subtitle}>
                <b>Kafedra :</b> {kafedra}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Search;
