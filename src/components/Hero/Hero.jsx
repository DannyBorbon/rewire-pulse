import "../Hero/Hero.css";
import brainImg from "../../assets/images/brain-hero.svg";
import nodeImg from "../../assets/images/node-hero.svg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__grid"></div>

      <div className="hero__content">
        <div className="hero__subtitle-wrap">
          <span className="hero__subtitle">
            <img className="node-img" src={nodeImg} alt="Node Image" />
            Neural Training System
          </span>
        </div>
        <h1 className="hero__title">
          Rewire your{" "}
          <span className="hero__outline" data-text="mind">
            mind.
          </span>
          One pathway at a time.
        </h1>

        <p className="hero__text">
          Every repeated action strengthens a neural pathway. We translate the
          science of neuroplasticity into a daily ritual that reshapes your
          thinking patterns and, ultimately, your habits.
        </p>
        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="/signup">
            Start Rewiring
          </a>

          <a className="hero__button hero__button--secondary" href="/science">
            Explore Science
          </a>
        </div>
        <div className="hero__visual">
          <div className="hero__image-container">
            <img
              className="hero__image"
              src={brainImg}
              alt="Neuronal Connections"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
