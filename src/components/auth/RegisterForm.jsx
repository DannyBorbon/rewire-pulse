import "./AuthForm.css";

function RegisterForm() {
  return (
    <form className="authform" action="">
      <div className="authform__field">
        <label className="authform__label" htmlFor="email">
          Email
        </label>
        <input
          className="authform__input"
          id="email"
          type="email"
          placeholder="name@email.com"
        />
        <div className="authform__field-label">
          <label className="authform__label" htmlFor="password">
            Password
          </label>
        </div>
        <input
          className="authform__input"
          id="password"
          type="password"
          placeholder="••••••••"
        />

        <div className="authform__field-label">
          <label className="authform__label" htmlFor="password">
            Confirm Password
          </label>
        </div>
        <input
          className="authform__input"
          id="confirm-password"
          type="password"
          placeholder="••••••••"
        />

        <button className="authform__submit" type="submit">
          SIGNUP
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
