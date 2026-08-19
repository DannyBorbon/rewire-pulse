import "../Footer/Footer.css";
import rewirePulseLogo from "../../assets/images/logo-navbar.svg";
import brandSealImg from "../../assets/images/footer/brand-seal.png";
import linkedinImg from "../../assets/images/footer/linkedin-svg.svg";
import githubImg from "../../assets/images/footer/github-svg.svg";

function Footer() {
  return (
    <section id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__header">
            <div className="footer__logo">
              <img src={rewirePulseLogo} alt="Rewire Pulse Logo" />
              <span
                className="footer__header-title
"
              >
                RewirePulse
              </span>
            </div>
            <div className="footer__tagline">
              <p>
                A Sappiens experience. Human intelligence. Continuous evolution.
                Rebuilding the human operating system, one neural pathway at a
                time.
              </p>
            </div>
          </div>

          <div className="footer__platform">
            <h4 className="footer__grid-title">Platform</h4>
            <ul>
              <li>
                <a href="#science">Science</a>
              </li>
              <li>
                <a href="#pathway">How It Works</a>
              </li>
              <li>
                <a href="#prices">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="footer__research">
            <h4 className="footer__grid-title">Research</h4>
            <ul>
              <li>
                <a
                  href="https://www.ncbi.nlm.nih.gov/books/NBK557811/"
                  target="_blank"
                >
                  Neuroplasticity
                </a>
              </li>
              <li>
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/19002678/"
                  target="_blank"
                >
                  Methodology
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncbi.nlm.nih.gov/search/all/?term=neuroplasticity"
                  target="_blank"
                >
                  Publications
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__support">
            <h4 className="footer__grid-title">Support</h4>
            <ul>
              <li>
                <a href="#Science">Neural Portal</a>
              </li>
              <li>
                <a href="#pathway">Terms</a>
              </li>
              <li>
                <a href="#pathway">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © 2026 RewirePulse — Created by Sappiens
            <br /> Developed by Danny Borbón
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/daniel-borbon-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinImg} alt="" />
            </a>

            <a
              href="https://github.com/DannyBorbon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubImg} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
