import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAnglesRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Image, Space } from "antd";
import { useNavigate } from "react-router-dom";
import Texty from "rc-texty";
import QueueAnim from "rc-queue-anim";

const MainHero = () => {
  const Navigate = useNavigate();
  return (
    <div className="container px-4 py-5" style={{ minHeight: "530px" }}>
      <QueueAnim delay={300} className="row flex-lg-row-reverse  py-5">
        <div
          key={"image-container"}
          className="col-lg-4 col-md-5 col-sm-12 d-flex justify-content-center p-4 dots-image"
        >
          <Image
            className="rounded-3 shadow-lg"
            width={290}
            height={290}
            src="https://res.cloudinary.com/dk1dqqqof/image/upload/v1698784977/jihw3dccnhxmjzggqpsd.jpg"
            fallback="data:image/png;base64,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"
          />
        </div>
        <QueueAnim
          key={"text-container"}
          className="col-lg-8 col-md-7 col-sm-12"
        >
          <h1
            key={"title-container"}
            className="display-5 fw-bold text-body-emphasis"
          >
            <Texty key={"texty-title-1"}>Hi, I’m Amine 👋</Texty>
          </h1>
          <QueueAnim type={"bottom"} key="description-container">
            <p key={"texty-desc-1"} className="mb-4">
              <Texty key="texty-anim" type={"bottom"} mode={"sync"}>
                I&apos;m a 🚀 MERN Stack Web Developer (MongoDB, Express, React,
                Node.js) with a focus on creating exceptional digital
                experiences that are fast, accessible, visually appealing, and
                responsive.
              </Texty>
            </p>
            <Space key="dump-key-1">
              <div
                style={{ width: "15px" }}
                className="d-flex justify-content-center"
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span>El Mrezga, Nabeul, Tunisia</span>
            </Space>
            <br />
            <Space key="dump-key-2">
              <div
                style={{ width: "15px" }}
                className="d-flex justify-content-center"
              >
                <Badge status="success" />
              </div>
              <span>Available for new projects</span>
            </Space>
            <br />
            <br />
            <div key={"about-me-button"}>
              <Button
                size="large"
                type="primary"
                shape="round"
                icon={<FontAwesomeIcon icon={faAnglesRight} />}
                onClick={() => {
                  Navigate("/about");
                }}
              >
                About Me
              </Button>
            </div>
            <br />

            <QueueAnim type={"bottom"} key={"links"} component={Space}>
              <a
                key="link-item-1"
                href="https://github.com/MoeOuni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                style={{ color: "#1E3050" }}
              >
                <FontAwesomeIcon icon={faGithub} className="fs-4" />
              </a>
              <a
                key="link-item-2"
                href="https://www.linkedin.com/in/amine-ouni-1464b1220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1E3050" }}
              >
                <FontAwesomeIcon icon={faLinkedin} className="fs-4" />
              </a>
              <a
                key="link-item-3"
                href="https://x.com/OuniMoe?t=o158iJCgLFD0l76VdpADOw&s=09"
                target="_blank"
                className="text-decoration-none"
                rel="noreferrer"
                style={{ color: "#1E3050" }}
              >
                <FontAwesomeIcon icon={faTwitter} className="fs-4" />
              </a>
            </QueueAnim>
          </QueueAnim>
        </QueueAnim>
      </QueueAnim>
    </div>
  );
};

export default MainHero;
