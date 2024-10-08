import Link from "next/link";

const Accommodations = () => {
  return (
    <div className="accommodations__two section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-5 order-last order-lg-first">
            <div className="accommodations__two-left">
              <img src="/img/hotel/cbs.jpg" alt="" />
              <div className="accommodations__two-left-roll">
                <img
                  className="content__roll"
                  src="/img/content.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 lg-mb-30">
            <div className="accommodations__two-title">
              <span className="subtitle__one"></span>
              <h2>Activities</h2>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis porro ea numquam sit consectetur, impedit expedita fuga alias at voluptatum sed! Itaque nihil quas quaerat, vel reprehenderit vitae voluptatibus illo!
              </p>
              <Link className="theme-border-btn" href="/">
                Read More<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 md-mb-30">
            <div className="accommodations__two-right">
              <img src="/img/hotel/cbs2.jpg" alt="" />
              <div className="accommodations__two-right-bottom">
                {/* <div className="accommodations__two-right-bottom-signature">
                  <img src="/img/bg/signature.png" alt="" />
                </div> */}
                {/* <div className="accommodations__two-right-bottom-author">
                  <h5>David Beckham</h5>
                  <span>Founder CEO</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodations;
