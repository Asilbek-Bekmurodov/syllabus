import React, { Component } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import cls from "./home.module.scss";

export class Home extends Component {
  render() {
    return (
      <div className={cls.wrapper}>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default Home;
