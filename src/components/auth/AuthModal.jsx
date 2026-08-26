import "./AuthModal.css";
import googleIconSvg from "../../assets/images/auth/google-icon.svg";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthModal({ mode, onModeChange }) {
  const isLogin = mode === "login";
  return (
    <section className="auth">
      <div className="auth__modal-overlay" onClick={() => onModeChange(null)}>
        <div
          className="auth__modal-container"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            className="auth__modal-close"
            type="button"
            onClick={() => onModeChange(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="auth__modal-title">
            {isLogin ? "Welcome back" : "Register"}
          </div>

          <div className="auth__form-area">
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
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
            {isLogin ? (
              <button type="button" onClick={() => onModeChange("register")}>
                Don't have an account? Register
              </button>
            ) : (
              <button type="button" onClick={() => onModeChange("login")}>
                Already have an account? Log in
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthModal;
