import "../Testimonial/Testimonial.css";
import testimonialProfile from "../../assets/images/testimonial/testimonial-profile.png";
import testimonialConsolidatedMobile from "../../assets/images/testimonial/testimonial-consolidated-mobile.png";
import testimonialConsolidatedDesktop from "../../assets/images/testimonial/testimonial-consolidated-desktop.png";
import testimonialBackground from "../../assets/images/testimonial/testimonial-background.png";

function Testimonial() {
  return (
    <section id="testimonial" className="testimonial">
      <div className="testimonial__background">
        <img src={testimonialBackground} alt="" />
      </div>
      <div className="testimonial__wrapper">
        <div className="testimonial__content-text">
          <span className="section__subtitle testimonial__subtitle">
            Real Change
          </span>
          <h2 className="section__title">
            “I stopped trying to change everything at once.”
          </h2>
          <p className="testimonial__quote">
            RewirePulse gave me one thing to work on each day. After a few
            weeks, staying focused didn't feel like something I had to force
            anymore.
          </p>
          <div className="testimonial__profile">
            <div className="testimonial__picture">
              <img src={testimonialProfile} alt="" />
            </div>
            <div className="testimonial__info">
              <p className="testimonial__name">Johana C.</p>
              <p className="testimonial__data">RewirePulse Member · 8 weeks</p>
            </div>
          </div>
        </div>
        <div className="testimonial__consolidated">
          <div className="testimonial__consolidated-image-mobile">
            <img src={testimonialConsolidatedMobile} alt="" />
          </div>
          <div className="testimonial__consolidated-image-desktop">
            <img src={testimonialConsolidatedDesktop} alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial__line" />
    </section>
  );
}

export default Testimonial;
