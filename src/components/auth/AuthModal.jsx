import "./AuthModal.css";

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
          <div className="auth__footer">
            <button>Don't have an account? Register</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthModal;
