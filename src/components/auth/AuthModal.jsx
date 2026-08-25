import "./AuthModal.css";
import googleIconSvg from "../../assets/images/auth/google-icon.svg";

const login = {
  subtitle: "Login",
  title: "Welcome Back",
  description:
    "Enter your credentials to continue your neural reinforcement journey.",
};

const register = {
  subtitle: "Register",
  title: "Join the evolution",
  description:
    "Enter your credentials to continue your neural reinforcement journey.",
};

function AuthModal({ children }) {
  return (
    <section className="auth">
      <div className="auth__modal-overlay">
        <div className="auth__modal-container">
          <div className="auth__modal-subtitle">Login</div>
          <div className="auth__modal-title">Welcome back</div>
          <div className="auth__modal-description">
            Enter your credentials to continue your neural reinforcement
            journey.
          </div>
          <div className="auth__form-area">{children}</div>
          <div className="auth__separator">
            <span className="auth__separator-line"></span>
            <span className="auth__separator-text">OR</span>
            <span className="auth__separator-line"></span>
          </div>
          <button className="signin__google-btn">
            <img src={googleIconSvg} alt="" />
            Continue with Google
          </button>
          <div className="auth__footer">
            <button>Don't have an account? Register</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthModal;
