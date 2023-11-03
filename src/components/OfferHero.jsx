import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";

const OfferHero = () => {
  return (
    <OverPack className=" b-3-upside" style={{ minHeight: "480px" }}>
      <QueueAnim key="queue" className="container px-4 py-5" id="hanging-icons">
        <TextyAnim
          component={"h2"}
          key="queue-1"
          className="pb-2 border-bottom"
        >
          What I Offer ✅
        </TextyAnim>
        <QueueAnim
          key={"queue-2"}
          className="row g-4 py-5 row-cols-1 row-cols-lg-3"
        >
          <div key={"queue-21"} className="col d-flex align-items-start">
            <div className="d-inline-flex align-items-center justify-content-center fs-3 px-2">
              🕒
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Timely Delivery</h3>
              <p>
                Punctuality is my motto. I understand the value of your time and
                ensure that projects are delivered promptly and efficiently.
              </p>
            </div>
          </div>
          <div key={"queue-22"} className="col d-flex align-items-start">
            <div className="d-inline-flex align-items-center justify-content-center fs-3 px-2">
              ✨
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">
                Responsive & Animated Websites
              </h3>
              <p>
                I excel in crafting stunning, responsive, and animated websites
                that captivate users and leave a lasting impression.
              </p>
            </div>
          </div>
          <div key={"queue-23"} className="col d-flex align-items-start">
            <div className="d-inline-flex align-items-center justify-content-center fs-3 px-2">
              🏢
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">
                Custom Business Solutions
              </h3>
              <p>
                From management systems to various other business needs, I have
                a proven track record of building robust, tailored web
                applications to meet your unique requirements.
              </p>
            </div>
          </div>
        </QueueAnim>
      </QueueAnim>
    </OverPack>
  );
};

export default OfferHero;
