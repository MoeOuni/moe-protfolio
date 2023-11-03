import craftThemes from "../assets/craft-themes.png";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import { useNavigate } from "react-router";

const CraftHero = () => {
  const Navigate = useNavigate();
  return (
    <div className="b-3-downside" style={{ minHeight: "750px" }}>
      <OverPack className="container px-4 py-5">
        <QueueAnim
          type={"right"}
          key={"queue-2245"}
          className="row flex-lg-row flex-column-reverse justify-content-center g-5 py-5"
        >
          {" "}
          <QueueAnim key={"queue-3"} className="col-lg-5 col-md-12 pt-5">
            <TextyAnim
              type="bottom"
              mode="sync"
              key={"queue-91"}
              component={"h1"}
              className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
            >
              Discover Craft
            </TextyAnim>
            <TextyAnim
              type="bottom"
              mode="sync"
              key={"queue-52"}
              className="lead"
            >
              Celebrate the art of web development with my &lsquo;Discover
              Craft&rsquo; page. Explore a visual timeline of my MERN Stack
              journey, featuring captivating projects that showcase my passion
              for creating exceptional digital experiences.
            </TextyAnim>
            <div key={"queue-43"} className="mt-4">
              <Button
                size="large"
                type="primary"
                icon={<FontAwesomeIcon icon={faAnglesRight} />}
                onClick={() => Navigate("/craft")}
              >
                Discover
              </Button>
            </div>
          </QueueAnim>
          <div key={"queue-5"} className="col-12 col-md-12 col-lg-7">
            <img src={craftThemes} className=" img-fluid" alt="Moe Themes" />
          </div>
        </QueueAnim>
      </OverPack>
    </div>
  );
};

export default CraftHero;
