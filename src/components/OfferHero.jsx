const OfferHero = () => {
  return (
    <div className=" b-3-upside">
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">What I Offer ✅</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
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
          <div className="col d-flex align-items-start">
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
          <div className="col d-flex align-items-start">
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
        </div>
      </div>
    </div>
  );
};

export default OfferHero;
