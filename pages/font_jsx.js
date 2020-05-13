//fontNext-Global.js //https://www.youtube.com/watch?v=qWWoIPLSeec
//<style jsx>{` всередині модуля
//Fonts працює загрузка ззовні і локально!
// Загрузка Fonts  зовні: _document * <link //   href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
// Загрузка Fonts  локально : https://codeconqueror.com/blog/using-google-fonts-with-next-js
//_app.js * style jsx global>{` @font-face {font-family: "Amatic SC"; src: url("/fonts/AmaticSC-Regular.woff2");...

const Fonts = () => {
  return (
    <div className="div">
      <h1 style={{ color: "rgba(16,69,16,1)" }}>Стилі з style jsx</h1>
      <h2 style={{ color: "rgba(219,75,226,1)" }}>Шрифти локальні</h2>
      <p style={{ color: "#000" }}>
        Загрузка Fonts локально: __app.js * style jsx global>
        <p className="one">
          <b style={{ color: "red" }}>Roboto-Regular: </b> "Almost before we
          knew it, we had left the ground."
        </p>
        <p className="two">
          <b style={{ color: "red" }}>Roboto-Medium:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <p className="three">
          <b style={{ color: "red" }}>RobotoCondensed-Bold:</b> "Almost before
          we knew it, we had left the ground."
        </p>
        <p className="four">
          <b style={{ color: "red" }}>RobotoCondensed-Regular:</b> "Almost
          before we knew it, we had left the ground."
        </p>
        <p className="five">
          <b style={{ color: "red" }}>Dosis-Light:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <p className="six">
          <b style={{ color: "red" }}>Dosis-Medium:</b> "Almost before we knew
          it, we had left the ground."
        </p>
        <h2 style={{ color: "rgba(14,7,47,1)" }}>Шрифти зовнішні </h2>
        <p style={{ color: "#000" }}>
          Загрузка Fonts зовні: _document.js/Head/*** link
          href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
          rel="stylesheet" / `
        </p>
      </p>
      <p className="external__one">
        <b style={{ color: "rgba(98,75,226,1)" }}>Amatic SC:</b> "Almost before
        we knew it, we had left the ground."
      </p>
      <p className="external__two">
        <b style={{ color: "rgba(98,75,226,1)" }}>Poppins:</b> "Almost before we
        knew it, we had left the ground."
      </p>
      <p className="external__three">
        <b style={{ color: "rgba(98,75,226,1)" }}>Tangerine:</b> "Almost before
        we knew it, we had left the ground."
      </p>

      <style jsx>{`
        .div {
          text-align: center;
          color: forestgreen;
        }

        .one {
          font-size: 22px;
          /* //font-family: "Roboto-Regular", sans-serif; */
          font-family: "Roboto-Regular";
        }

        .two {
          font-size: 22px;
          /* //font-family: "Roboto-Medium", sans-serif; */
          font-family: "Roboto-Medium";
        }

        .three {
          font-size: 22px;
          /* font-family: "Roboto Condensed-Bold", sans-serif; */
          font-family: "Roboto Condensed-Bold";
        }

        .four {
          font-size: 22px;
          /* font-family: "Roboto Condensed-Regular", sans-serif; */
          font-family: "Roboto Condensed-Regular";
        }

        .five {
          font-size: 22px;
          /* font-family: "Dosis", sans-serif; */
          font-family: "Dosis";
        }

        .six {
          font-size: 22px;
          /* font-family: "Dosis-Medium", sans-serif; */
          font-family: "Dosis-Medium";
        }

        .external__one {
          font-size: 22px;
          font-family: "Amatic SC", cursive;
        }

        .external__two {
          font-size: 22px;
          font-family: "Poppins", sans-serif;
        }

        .external__three {
          font-size: 32px;
          font-family: "Tangerine", cursive;
        }
      `}</style>
    </div>
  );
};

export default Fonts;
