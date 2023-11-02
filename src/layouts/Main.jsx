import { Menu, Layout } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import LayoutFooter from "../components/LayoutFooter";
import { useEffect, useState } from "react";

const { Header } = Layout;

const Main = () => {
  const Navigate = useNavigate();

  const location = useLocation();
  const [selectedLocation, setSelectedLocation] = useState(
    location.pathname || "/"
  );

  useEffect(() => {
    setSelectedLocation(location.pathname);
  }, [location]);

  return (
    <div>
      <Header
        style={{
          top: 0,
          zIndex: 1,
          margin: "0",
          padding: "0 15px 0 0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="bg-white"
      >
        <div
          className="demo-logo"
          style={{ marginLeft: "25px" }}
          onClick={() => Navigate("/")}
        >
          <span className="fw-bolder fs-5">{"<Moe>"}</span>
        </div>

        <div>
          <Menu
            selectedKeys={[selectedLocation]}
            className="nav d-flex justify-content-center align-items-center"
            items={[
              {
                label: (
                  <Link to="/" className="text-decoration-none">
                    Home
                  </Link>
                ),
                key: "/",
              },
              {
                label: (
                  <Link to="/about" className="text-decoration-none">
                    About
                  </Link>
                ),
                key: "/about",
              },
              {
                label: (
                  <Link to="/services" className="text-decoration-none">
                    Services
                  </Link>
                ),
                key: "/services",
              },
              {
                label: (
                  <Link to="/craft" className="text-decoration-none">
                    Craft
                  </Link>
                ),
                key: "/craft",
              },
            ]}
            theme="light"
            style={{
              color: "black",
              fontWeight: 600,
            }}
            mode="horizontal"
          />
        </div>
      </Header>
      <div style={{ minHeight: "75vh" }}>
        <Outlet />
      </div>
      <LayoutFooter />
    </div>
  );
};

export default Main;
