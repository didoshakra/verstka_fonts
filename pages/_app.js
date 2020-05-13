// /pages/_app.js
import App from "next/app";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Component {...pageProps} />
        {/* Using Google Fonts with next.js https://codeconqueror.com/blog/using-google-fonts-with-next-js */}
        <style jsx global>{`
          @font-face {
            /* font-family: 'Roboto', sans-serif; */
            font-family: "Roboto-Regular";
            //Грузити тільки 1 варіант шрифта
            src: url("/fonts/Roboto-Regular.woff2") format("woff2"),
              url("/fonts/Roboto-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Roboto', sans-serif; */
            font-family: "Roboto-Medium";
            src: url("/fonts/Roboto-Medium.woff2") format("woff2"),
              url("/fonts/Roboto-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Roboto Condensed', sans-serif; */
            font-family: "Roboto Condensed-Bold";
            src: url("/fonts/RobotoCondensed-Bold.woff2") format("woff2"),
              url("/fonts/RobotoCondensed-Bold.woff") format("woff");
            font-weight: 700;
            font-style: bold;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Roboto Condensed', sans-serif; */
            font-family: "Roboto Condensed-Regular";
            src: url("/fonts/RobotoCondensed-Regular.woff2") format("woff2"),
              url("/fonts/RobotoCondensed-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Dosis', sans-serif; */
            font-family: "Dosis";
            src: url("/fonts/Dosis-Light.woff2") format("woff2"),
              url("/fonts/Dosis-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            /* font-family: 'Dosis', sans-serif; */
            font-family: "Dosis-Medium";
            src: url("/fonts/Dosis-Medium.woff2") format("woff2"),
              url("/fonts/Dosis-Medium.woff") format("woff");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </div>
    );
  }
}
export default MyApp;
