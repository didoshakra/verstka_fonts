//_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

//Для створенння метатег всередині голови є компонент Head та спеціальний файл _document.js,
//в якому ми можемо налаштувати загальний html кожнлї сторінки(який надається один раз лише на стороні сервера).
//Ми змінимо його так, щоб він включав фавікон, оновив файл сторінки

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          {/* 20080425-добавлені шрифти //Amatic SC,Poppins,Lora-https://fonts.googleapis.com/ з шаблону */}
          {/* font-family: 'Poppins', sans-serif; */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Amatic SC', cursive; */}
          <link
            href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Tangerine', cursive; */}
          <link
            href="https://fonts.googleapis.com/css2?family=Tangerine&display=swap"
            rel="stylesheet"
          />
          {/* font-family: 'Roboto', sans-serif; */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          /> */}
          {/* font-family: 'Roboto', sans-serif; */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
            rel="stylesheet"
          /> */}
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
