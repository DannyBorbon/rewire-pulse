import "../Prices/Prices.css";
import pricesImg from "../../assets/images/prices/prices-svg.svg";

function Prices() {
  return (
    <section id="prices" className="prices">
      <div className="prices__header">
        <span className="section__subtitle">Choose Your Path</span>
        <h2 className="section__title">Invest in your evolution</h2>
      </div>

      <div className="prices__cards">
        <div className="prices__card">
          <div className="prices__card-header">
            <h2 className="prices__card-title">Neural Start</h2>
            <p className="prices__card-cost">
              <span className="prices__cost">$0</span>/forever
            </p>
          </div>
          <ul className="prices__card-benefits">
            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              1 Neural Pathway
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Basic Network Visualization
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Daily Pulse Reminders
            </li>
          </ul>
          <a href="" className="prices__card-button btn-secondary">
            Get Started
          </a>
        </div>

        <div className="prices__card">
          <div className="prices__card-header">
            <div className="recommended-path">Recommended</div>
            <h2 className="prices__card-title">Pathfinder</h2>
            <p className="prices__card-cost">
              <span className="prices__cost">$12</span>/mo
            </p>
          </div>
          <ul className="prices__card-benefits">
            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Unlimited Pathway
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Advanced Brain Analytics
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Historical Network Replay
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Cross-Device Sync
            </li>
          </ul>
          <a href="" className="prices__card-button btn-primary">
            Start Pro
          </a>
        </div>

        <div className="prices__card">
          <div className="prices__card-header">
            <h2 className="prices__card-title">Ecosystem</h2>
            <p className="prices__card-cost">
              <span className="prices__cost">$29</span>/mo
            </p>
          </div>
          <ul className="prices__card-benefits">
            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Collaborative Circuits
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Custom Neural Models
            </li>

            <li>
              <span className="prices__card-icon">
                <img src={pricesImg} alt="" />
              </span>
              Priority Signal Support
            </li>
          </ul>
          <a href="" className="prices__card-button btn-secondary">
            Contact Sales{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Prices;
