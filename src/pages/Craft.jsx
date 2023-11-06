import { Image } from "antd";
import cactusResume from "../assets/cactusResume.png";
import humanResources from "../assets/humanResources.png";

const Craft = () => {
  return (
    <div className="container b-2">
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-5 fw-bold text-body-emphasis">Cactus Resume</h1>
        <div className="col-lg-6 mx-auto">
          <p className="mb-4">
            Cactus Resume offers three efficient options for resume creation:
            the Editor allows complete customization, the Guide provides
            step-by-step assistance, and Override a Template combines
            professional designs with personalization. With these choices, users
            can easily craft tailored and impressive resumes to showcase their
            skills and experiences effectively.
          </p>
        </div>
        <div
          className="overflow-hidden d-flex justify-content-center"
          style={{ maxHeight: "35vh" }}
        >
          <div className="col-lg-8 col-12 px-5">
            <Image
              src={cactusResume}
              className="img-fluid border rounded-3  mb-4"
              alt="Cactus Resume"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Human Resources Management
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="mb-4">
            HRM is a comprehensive digital platform that streamlines and
            automates various manual processes, such as leave management,
            employee record-keeping, and inventory management. This
            user-friendly solution enhances efficiency, accuracy, and
            accessibility for HR and accounting departments, simplifying tasks
            and allowing organizations to focus on strategic human resource
            management.
          </p>
        </div>
        <div
          className="overflow-hidden  d-flex justify-content-center"
          style={{ maxHeight: "35vh" }}
        >
          <div className="container col-lg-8 col-12 px-5">
            <Image
              src={humanResources}
              className="img-fluid border rounded-3  mb-4"
              alt="HRM"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craft;
