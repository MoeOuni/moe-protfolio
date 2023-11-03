import AboutMe from "../assets/About-me-pana.svg";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";

const AboutMeHero = () => {
  return (
    <div className="bg-light b-2" style={{ minHeight: "1400px" }}>
      <div className="container px-4 py-5">
        <div className="row justify-content-center g-5 py-5">
          <OverPack className="col-12 col-md-10 col-lg-7" playScale={0.3}>
            <QueueAnim key={"title-container"}>
              <h3
                key={"00"}
                className="display-7 fw-bold mt-3 text-body-emphasis text-center lh-1 mb-3"
              >
                🔍 Curious about me? Here&apos;s a Glimpse:
              </h3>

              <img
                key={"10"}
                src={AboutMe}
                className=" img-fluid"
                alt="Moe Themes"
              />
            </QueueAnim>
          </OverPack>
          <OverPack key={"content-container"} className="col-lg-9 col-md-12">
            <QueueAnim
              key="queue"
              leaveReverse
              style={{
                fontSize: "15px",
              }}
              component={"div"}
              className="d-flex flex-column"
            >
              <span key={"1"}>
                I&apos;m a passionate, self-proclaimed web developer who
                specializes in full-stack development, leveraging the power of
                MongoDB, Express, React, and Node.js to create remarkable
                digital experiences. With an unwavering commitment to detail and
                precision, I&apos;m dedicated to crafting web solutions that
                seamlessly blend the technical and visual aspects of digital
                products.
              </span>

              <span key={"2"} className="fw-bold  mt-3">
                🔗 My Journey:
              </span>

              <span key={"3"}>
                I embarked on my web development journey in 2020, and it&apos;s
                been a thrilling ride of growth and evolution ever since. I
                thrive on new challenges and constantly seek opportunities to
                push my boundaries and explore the latest technologies. With
                each project, I&apos;ve expanded my skill set, always staying at
                the forefront of industry trends.
              </span>

              <span key={"4"} className="fw-bold mt-3">
                💻 Tech Enthusiast:
              </span>

              <span key={"5"}>
                Today, I take immense pride in developing cutting-edge web
                applications that incorporate modern technologies such as
                React.js, Node.js, Socket.io, and more. I find immense
                satisfaction in creating innovative solutions that enhance the
                user experience and cater to the demands of the digital
                landscape.
              </span>

              <span key={"6"} className="fw-bold mt-3">
                👨‍💻 End-to-End Execution:
              </span>

              <span key={"7"}>
                As a progressive thinker, I relish working on products from
                inception to fruition. I believe that the journey from the spark
                of an idea to its development is just as exciting as the
                destination. It&apos;s about converting concepts into tangible,
                user-centric digital solutions that make a real impact.
              </span>

              <span key={"8"} className="fw-bold mt-3">
                🎨 Design Perfectionist:
              </span>

              <span key={"9"}>
                For me, user experience is paramount. I&apos;m meticulous about
                pixel-perfect design and strive to create elegant, intuitive
                interfaces that captivate users. Writing clean, readable, and
                highly performant code isn&apos;t just a job&mdash;it&apos;s a
                personal commitment that ensures every project I work on meets
                the highest standards.
              </span>

              <span key={"10"} className="mt-3">
                Let&apos;s connect and collaborate to transform your digital
                dreams into reality. With precision, creativity, and
                cutting-edge technology, we can make your projects stand out and
                thrive in the digital realm.
              </span>
            </QueueAnim>
          </OverPack>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHero;
