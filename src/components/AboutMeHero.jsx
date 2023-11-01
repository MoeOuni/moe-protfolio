import AboutMe from "../assets/About-me-pana.svg";

const AboutMeHero = () => {
  return (
    <div className="bg-light b-2">
      <div className="container px-4 py-5">
        <div className="row r justify-content-center g-5 py-5">
          <div className="col-12 col-md-10 col-lg-7">
            <h3 className="display-7 fw-bold text-body-emphasis text-center lh-1 mb-3">
              🔍 Curious about me? Here&apos;s a Glimpse:
            </h3>
            <img src={AboutMe} className=" img-fluid" alt="Moe Themes" />
          </div>
          <div className="col-lg-9 col-md-12">
            <p style={{ fontSize: "15px" }}>
              I&apos;m a passionate, self-proclaimed web developer who
              specializes in full-stack development, leveraging the power of
              MongoDB, Express, React, and Node.js to create remarkable digital
              experiences. With an unwavering commitment to detail and
              precision, I&apos;m dedicated to crafting web solutions that
              seamlessly blend the technical and visual aspects of digital
              products.
              <br />
              <br />
              <span className="fw-bold">🔗 My Journey:</span>
              <br />
              I embarked on my web development journey in 2020, and it&apos;s
              been a thrilling ride of growth and evolution ever since. I thrive
              on new challenges and constantly seek opportunities to push my
              boundaries and explore the latest technologies. With each project,
              I&apos;ve expanded my skill set, always staying at the forefront
              of industry trends.
              <br />
              <br />
              <span className="fw-bold">💻 Tech Enthusiast:</span>
              <br />
              Today, I take immense pride in developing cutting-edge web
              applications that incorporate modern technologies such as
              React.js, Node.js, Socket.io, and more. I find immense
              satisfaction in creating innovative solutions that enhance the
              user experience and cater to the demands of the digital landscape.
              <br />
              <br />
              <span className="fw-bold">👨‍💻 End-to-End Execution:</span>
              <br />
              As a progressive thinker, I relish working on products from
              inception to fruition. I believe that the journey from the spark
              of an idea to its development is just as exciting as the
              destination. It&apos;s about converting concepts into tangible,
              user-centric digital solutions that make a real impact.
              <br />
              <br />
              <span className="fw-bold">🎨 Design Perfectionist:</span>
              <br />
              For me, user experience is paramount. I&apos;m meticulous about
              pixel-perfect design and strive to create elegant, intuitive
              interfaces that captivate users. Writing clean, readable, and
              highly performant code isn&apos;t just a job&mdash;it&apos;s a
              personal commitment that ensures every project I work on meets the
              highest standards.
              <br />
              <br />
              Let&apos;s connect and collaborate to transform your digital
              dreams into reality. With precision, creativity, and cutting-edge
              technology, we can make your projects stand out and thrive in the
              digital realm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHero;
