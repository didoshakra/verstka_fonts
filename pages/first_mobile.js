//index.js

const Index = () => (
  <div className="body">
    {/* <h1>Home page/className</h1> */}
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
    {/* <style jsx global>{`
      @font-face {
        font-family: "Amaticsc Regular";
        src: url("/public/fonts/Amaticscregular.woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `}</style> */}

    <style jsx>{`
      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }
      .body {
        min-width: 320px;
        overflow-x: hidden; //Обрізає лишнє
        font-family: "Roboto-Regular";
        font-weight: 400;
        font-size: 16px;
        line-height: 18px; //висота рядка
      }
      .header-conteiner {
        padding: 0 20px;
      }
      @media (min-width: 640px) {
        .header-conteiner {
          padding: 0 30px;
        }
      }
      @media (min-width: 768px) {
        .header-conteiner {
          padding: 0 40px;
        }
      }
      @media (min-width: 1024px) {
        .header-conteiner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
      }
      @media (min-width: 1440px) {
        .header-conteiner {
          max-width: 13200px;
        }
      }
      .header {
        margin: 0;
        padding: 0;
        background-color: #284074;
      }
      .header__inner {
        margin: 0;
        padding: 0;
        min-height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      @media (min-width: 640px) {
        .header__inner {
          min-height: 100px;
        }
      }
      .logo__link {
        margin-left: 8px;
      }
      @media (min-width: 640px) {
        .logo__link {
          margin-left: 14px;
        }
      }
      @media (min-width: 768px) {
        .logo__link {
          margin-left: 0px;
        }
      }
      .menu__btn {
        width: 40px;
        height: 40px;
        border-radius: 3px;
        background-color: #fff;
        padding: 0;
        border: none;
        position: relative;
        //margin-right: 8px;
      }
      .menu__btn::after {
        content: "";
        width: 12px;
        height: 2px;
        border-radius: 1px;
        background-color: #284074;
        position: absolute;
        top: 15px;
        left: 14px;
        box-shadow: 0 4px 0 0 #284074, 0 8px 0 0 #284074;
      }
      @media (min-width: 1440px) {
        .menu__btn {
          margin-right: 90px;
        }
      }
      //section head
      .head {
        background-image: url("/photo/karpaty-morning.jpg");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        min-height: 193px;
      }
      .top-slider {
        background: rgb(33, 33, 33, 0.5);
      }
      .top-slider__item {
        color: #fff;
        text-align: center;
      }
      .top-slider__tittle {
        font-family: "Amatic SC";
        //font-family: Roboto-Regular;
        font-size: 28px;
        line-height: 28px; //висота рядка
        text-transform: uppercase; //Всі-верхній регістр
      }
    `}</style>
  </div>
);
export default Index;
