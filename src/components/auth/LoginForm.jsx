import "./AuthForm.css";

function LoginForm() {
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
          <a className="authform__forgot" href="">
            Forgot?
          </a>
        </div>
        <input
          className="authform__input"
          id="password"
          type="password"
          placeholder="••••••••"
        />
        <button className="authform__submit" type="submit">
          LOG IN
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
