import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  backgroundColor: "#000",
  color: "#FFF",
  fontFamily: "Roboto, sans-serif",
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
