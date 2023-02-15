import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import cls from "./university.module.scss";

function university() {
  return (
    <div className={cls.university}>
      <Navbar />
      <br />
      <br />
      University page
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default university;
