//FirstMobile.js //https://www.youtube.com/watch?v=qWWoIPLSeec

import Layout from "../../components/all/Layout";
import "./firstMobile.scss";

const FirstMobile = () => {
  return (
    <Layout>
      <div className="body">
        <header className="header">
          <div className="header-conteiner">
            <div className="header__inner">
              <div className="logo">
                <a className="logo__link" href="#"></a>
                <img
                  className="logo__link-img"
                  src="/icons/SunRa48.png"
                  alt="logo"
                ></img>
              </div>
              <nav className="menu">
                <button className="menu__btn"></button>
              </nav>
            </div>
          </div>
        </header>
        <section className="head">
          <div className="top-slider">
            <div className="top-slider__item">
              <h3 className="top-slider__tittle">ДУМКИ ВГОЛОС</h3>
            </div>
          </div>
          <div className="top-slider">
            <div className="top-slider__item">
              <h3 className="top-slider__tittle">ДУМКИ ВГОЛОС</h3>
            </div>
          </div>
          <div className="top-slider">
            <div className="top-slider__item">
              <h3 className="top-slider__tittle">ДУМКИ ВГОЛОС</h3>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FirstMobile;
