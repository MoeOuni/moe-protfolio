import { Menu, Layout } from "antd";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LayoutFooter from "../components/LayoutFooter";

const { Header } = Layout;

const Main = () => {
  const Navigate = useNavigate();
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
                  <Link to="#" className="text-decoration-none">
                    About
                  </Link>
                ),
                key: "/about",
              },

              {
                label: (
                  <Link to="#" className="text-decoration-none">
                    Services
                  </Link>
                ),
                key: "/services",
              },
              {
                label: (
                  <Link to="#" className="text-decoration-none">
                    Craft
                  </Link>
                ),
                key: "/craft",
              },
              {
                label: (
                  <Link to="#" className="text-decoration-none">
                    Contact
                  </Link>
                ),
                key: "/contact",
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

      <Outlet />
      <LayoutFooter />
    </div>
  );
};

export default Main;
