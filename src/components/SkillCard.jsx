import PropTypes from "prop-types";

const SkillCard = ({ image, name }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex flex-column align-items-center justify-content-center">
      <img src={image} style={{ height: "64px" }} />
      <span className="fw-bold ">{name}</span>
    </div>
  );
};

SkillCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SkillCard;
