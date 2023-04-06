import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import cls from "./university.module.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import syllabusData from "../home/inside";

// const data = [
//   {
//     sillabus: "Java dasturlash tili",
//     otm: "Toshkent Davlat Iqtisodiyot Universiteti",
//     teacher: "Zoirov U",
//     email: "zoirov.ulmas@gmail.com",
//     kafedra: "Raqamli iqisodiyot",
//     path: "java",
//   },
//   {
//     sillabus: "Java dasturlash tili",
//     otm: "Toshkent Davlat Iqtisodiyot Universiteti",
//     teacher: "Zoirov U",
//     email: "zoirov.ulmas@gmail.com",
//     kafedra: "Raqamli iqisodiyot",
//     path: "java",
//   },
//   {
//     sillabus: "Java dasturlash tili",
//     otm: "Toshkent Davlat Iqtisodiyot Universiteti",
//     teacher: "Zoirov U",
//     email: "zoirov.ulmas@gmail.com",
//     kafedra: "Raqamli iqisodiyot",
//     path: "java",
//   },
// ];

function University() {
  const navigate = useNavigate();

  return (
    <div className={cls.university}>
      <Navbar />
      <div className={cls["search-bar"]}>
        <h3 className={cls.title}>
          <AiOutlineArrowLeft
            onClick={() => navigate("/")}
            className={cls.icon}
          />{" "}
          Universitetlar
        </h3>

        <form className={cls.form}>
          <div className={cls.input}>
            <label>Unversitet Nomi</label>
            <input placeholder="Universitet nomini kiriting" type="text" />
          </div>
          <div className={cls.input}>
            <label>Fakultet</label>
            <input placeholder="Fakultet nomini kiriting" type="text" />
          </div>
          <div className={cls.input}>
            <label>Kurs</label>
            <input placeholder="Kurs nomini kiriting" type="text" />
          </div>
          <div className={cls.input}>
            <label>Fan</label>
            <input placeholder="Fan nomini kiriting" type="text" />
          </div>
          <button className={cls.submit} onClick={(e) => e.preventDefault()}>
            <MdManageSearch size={24} /> Qidiruv
          </button>
          <button className={cls.filter} onClick={(e) => e.preventDefault()}>
            <CiFilter size={24} /> Qidiruv filtri
          </button>
        </form>
        <h3>Qidiruv natijasi: 4</h3>
        <div className={cls.results}>
          {syllabusData.map(
            ({ title, otm, teacher, kafedra, email, path, childPath }) => (
              <div
                onClick={() => navigate(`/dashboard/${path}/${childPath}`)}
                className={cls.result}
              >
                <h4>{title}</h4>
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
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default University;
