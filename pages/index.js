import Link from "next/link";

const nav = () => {
  const menu = [
    { a: "first_mobile", link: "first_mobile" },
    { a: "fonts", link: "fonts" },
    { a: "font_jsx", link: "font_jsx" },
  ];

  const renderMenu = () => {
    return menu.map((item, index) => {
      return (
        <li className="headerMenu_items" key={index}>
          <Link href={`/${item.link}`}>
            <a>{item.a}</a>
          </Link>
        </li>
      );
    });
  };
  return (
    <nav>
      <ul className="headerMenu ">{renderMenu()}</ul>
      <style jsx global>{`
        a {
          margin: 20px;
        }
      `}</style>
      <style jsx>{`
        .headerMenu {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px;
          padding: 10px;
          list-style-type: none;
        }
      `}</style>
    </nav>
  );
};
export default nav;
