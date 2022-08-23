import Header from "../header/header";
import Services from "./services";
import Annonce from "./annonce";
import Footer from "./footer";
import style from "./mainpage.module.css";

const mainpage = () => {
  return (
    <div className={style.container}>
      <Header></Header>
      <div className={style.subContainer}>
        <div style={{ marginRight: "23px" }}>
          <Services></Services>
        </div>
        <div style={{ marginRight: "23px" }}>
          <Annonce></Annonce>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default mainpage;
