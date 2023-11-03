import "../assets/index.less";
import Footer from "rc-footer";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LayoutFooter = () => {
  return (
    <div>
      <Footer
        theme={"light"}
        columns={[
          {
            title: "Contacts",
            items: [
              {
                title: (
                  <span>
                    <FontAwesomeIcon icon={faPhone} /> +216 52 408 014
                  </span>
                ),
                url: "tel:+21652408014",
                openExternal: true,
              },
              {
                title: (
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} /> moe.ouni20@gmail.com
                  </span>
                ),
                url: "mailto: moe.ouni20@gmail.com",
                openExternal: true,
              },
              {
                title: (
                  <span>
                    <FontAwesomeIcon icon={faSkype} /> Skype
                  </span>
                ),
                url: "https://join.skype.com/invite/OfPIhUcP2HkR",
                openExternal: true,
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                title: (
                  <span>
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </span>
                ),
                url: "https://www.linkedin.com/in/amine-ouni-1464b1220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                openExternal: true,
              },
              {
                title: (
                  <span>
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </span>
                ),
                url: "https://x.com/OuniMoe?t=o158iJCgLFD0l76VdpADOw&s=09",
                openExternal: true,
              },
              {
                title: (
                  <span>
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                  </span>
                ),
                url: "https://www.facebook.com/medamine.ouni.1232?mibextid=ZbWKwL",
                openExternal: true,
              },
            ],
          },
          {
            title: "Others",
            items: [
              {
                title: "Github",
                url: "https://github.com/MoeOuni",
                openExternal: true,
              },
              {
                title: "Freelance",
                url: "https://www.freelances.tn/freelance/amine-ouni",
                openExternal: true,
              },
              {
                title: "UpWork",
                url: "https://www.upwork.com/workwith/amineo7",
                openExternal: true,
              },
            ],
          },
        ]}
        bottom="Made with ❤️ by Moe"
      />
    </div>
  );
};

export default LayoutFooter;
