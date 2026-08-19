import "../Pathway/Pathway.css";
import selectionImg from "../../assets/images/pathway/01-neural-pathway-selection.png";
import reinforcementImg from "../../assets/images/pathway/02-neural-pathway-reinforcement.png";
import growthImg from "../../assets/images/pathway/03-neural-pathway-growth.png";
import deepFocusImg from "../../assets/images/pathway/01-example-deepf.png";
import workOutImg from "../../assets/images/pathway/02-example-workout.png";
import meditationImg from "../../assets/images/pathway/03-example-meditation.png";

import deepFocusDesktopImg from "../../assets/images/pathway/01-example-deepf-desktop.png";
import meditationDesktopImg from "../../assets/images/pathway/03-example-meditation-desktop.png";
import workOutImgDesktopImg from "../../assets/images/pathway/02-example-workout-desktop.png";

import nodeImg from "../../assets/images/node-hero.svg";

function Pathway() {
  return (
    <section id="pathway" className="pathway">
      <div className="pathway__content">
        <span className="section__subtitle">The Mechanism</span>
        <h2 className="section__title pathway__title">
          Build a New Neural Pathway
        </h2>
        <div className="pathway__grid">
          <div className="card__content">
            <article className="card">
              <span className="card__number">01</span>
              <h2 className="card__title">
                <span className="gray-title">Choose</span> a pathway
              </h2>
              <p className="card__text">
                Identify the specific mental circuits you want to develop.
                Whether it's Focus, Mind, or Body.
              </p>
              <div className="card__image">
                <img src={selectionImg} alt="Selection Neuron" />
              </div>
              <p className="card__footer">Selection</p>
            </article>

            <article className="card">
              <span className="card__number">02</span>
              <h2 className="card__title">
                <span className="secondary-title">Reinforce</span> the pattern
              </h2>
              <p className="card__text">
                Engage in small, repeated actions that send signals through your
                neural network, creating friction for change.
              </p>
              <div className="card__image">
                <img src={reinforcementImg} alt="Reinforceme Neuron" />
              </div>
              <p className="card__footer">Repetition</p>
            </article>

            <article className="card">
              <span className="card__number">03</span>
              <h2 className="card__title">
                <span className="accented-title">Strengthen</span> your network
              </h2>
              <p className="card__text">
                Watch as connections activate and your visual brain evolves.
                Consistency becomes <strong>visible growth.</strong>
              </p>
              <div className="card__image">
                <img src={growthImg} alt="Growth Neuron" />
              </div>
              <p className="card__footer">Growth</p>
            </article>
          </div>
        </div>

        <div className="pathway__examples">
          <span className="pathway__examples-title">SAMPLE PATHWAYS</span>
          <div className="pathway__examples-wrapper">
            <article className="pathway__example">
              <div className="pathway__example-image">
                <img src={deepFocusImg} alt="Example Deep Focus" />
              </div>
              <div className="pathway__example-desktop-image">
                <img src={deepFocusDesktopImg} alt="Example Deep Focus" />
              </div>
              <div className="pathway__example-content">
                <span className="pathway__example-header">
                  <img src={nodeImg} alt="" />
                  Focus
                </span>
                <h2 className="pathway__example-title">
                  Focus Through Small Actions
                </h2>
                <p className="pathway__example-text">
                  Train your attention to resist distraction and stay engaged
                  with what truly matters. Small moments of focused effort
                  gradually strengthen your capacity for deep work.
                </p>
              </div>
            </article>

            <article className="pathway__example">
              <div className="pathway__example-image">
                <img src={meditationImg} alt="Example Meditation" />
              </div>
              <div className="pathway__example-desktop-image">
                <img src={meditationDesktopImg} alt="Example Meditation" />
              </div>
              <div className="pathway__example-content">
                <span className="pathway__example-header">
                  <img src={nodeImg} alt="" />
                  Mind
                </span>
                <h2 className="pathway__example-title">
                  Cultivate Mental Clarity
                </h2>
                <p className="pathway__example-text">
                  Build habits that support focus, calm, and mental clarity.
                  Meditate, read, journal, or create moments to slow down and
                  reset.
                </p>
              </div>
            </article>

            <article className="pathway__example">
              <div className="pathway__example-image">
                <img src={workOutImg} alt="Example Workout" />
              </div>
              <div className="pathway__example-desktop-image">
                <img src={workOutImgDesktopImg} alt="Example Workout" />
              </div>
              <div className="pathway__example-content">
                <span className="pathway__example-header">
                  <img src={nodeImg} alt="" />
                  Body
                </span>
                <h2 className="pathway__example-title">
                  Strengthen Through Daily Practice
                </h2>
                <p className="pathway__example-text">
                  Strengthen the habits that keep you energized and resilient.
                  Work out, walk, stretch, sleep well, and take care of your
                  body.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pathway;
