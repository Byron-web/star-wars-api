import Link from "next/link";

const linkStyle = {
  marginRight: 15,
  textDecoration: "none",
  color: "#ffe81f",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.2rem",
  transition: "all 0.2s ease-in-out",
  position: "relative",
};

const hoverStyle = {
  color: "#fff",
  textDecoration: "none",
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={{ ...linkStyle }} className="nav-link">
        Home
      </a>
    </Link>
    <Link href="/about">
      <a style={{ ...linkStyle }} className="nav-link">
        About
      </a>
    </Link>
    <style jsx>{`
      .nav-link:hover {
        ${hoverStyle}
      }
      .nav-link {
        text-decoration: none;
      }
      :global(a) {
        text-decoration: none;
        color: #ffe81f;
      }
      :global(a):hover {
        color: #fff;
      }
    `}</style>
  </div>
);

export default Header;
