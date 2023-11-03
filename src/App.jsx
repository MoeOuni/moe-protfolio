import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router-dom";
import { HappyProvider } from "@ant-design/happy-work-theme";

import Main from "./layouts/Main";

import Home from "./pages/Home";
import Craft from "./pages/Craft";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Resources from "./pages/Resources";

import "./App.css";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0077b6",
          colorInfo: "#0077b6",
          fontFamily: "Poppins",
        },
      }}
    >
      <HappyProvider>
        <Routes>
          <Route path="/" exact element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="craft" element={<Craft />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="services" element={<Services />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </HappyProvider>
    </ConfigProvider>
  );
}

export default App;
