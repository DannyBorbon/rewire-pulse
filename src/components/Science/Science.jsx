import "../Science/Science.css";
import neuronImg from "../../assets/images/science/neuron-img.png";

function Science() {
  return (
    <section className="science">
      <div className="science__wrapper">
        <div className="science__content">
          <span className="section__subtitle">The Science</span>
          <h2 className="section__title">
            Neuroplasticity: The Science of Change
          </h2>
          <p className="science__text">
            Your brain is a living network that evolves based on where you
            direct your energy. Repetition strengthens the pathways that shape
            who you become.
          </p>
          <div className="science__stats">
            <div className="science__stat">
              <span className="science__number percentaje">84%</span>
              <p className="science__info">Average Neural Growth in 12 Weeks</p>
            </div>
            <div className="science__stat">
              <span className="science__number hours">24/7</span>
              <p className="science__info">Continuous Neural Tracking</p>
            </div>
          </div>
        </div>
        <div className="science-visual">
          <div className="science__image-container">
            <img src={neuronImg} alt="" className="science__image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Science;
