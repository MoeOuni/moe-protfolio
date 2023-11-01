import craftThemes from "../assets/craft-themes.png";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const CraftHero = () => {
  return (
    <div className="b-3-downside">
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
          <div className="col-12 col-md-10 col-lg-7  ">
            <img src={craftThemes} className=" img-fluid" alt="Moe Themes" />
          </div>
          <div className="col-lg-5 col-md-12">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Discover Craft
            </h1>
            <p className="lead">
              Celebrate the art of web development with my &lsquo;Discover
              Craft&rsquo; page. Explore a visual timeline of my MERN Stack
              journey, featuring captivating projects that showcase my passion
              for creating exceptional digital experiences.
            </p>
            <div>
              <Button
                size="large"
                type="primary"
                icon={<FontAwesomeIcon icon={faAnglesRight} />}
              >
                Discover
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftHero;
