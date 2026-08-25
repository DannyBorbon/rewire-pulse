import "./LoginForm.css";

function LoginForm() {
  return (
    <form className="loginform" action="">
      <div className="loginform__field">
        <label className="loginform__label" type="email">
          Email
        </label>
        <input
          className="loginform__input"
          id="email"
          type="email"
          placeholder="name@email.com"
        />
        <div className="loginform__field-label">
          <label className="loginform__label" type="password">
            Password
          </label>
          <a className="loginform__forgot" href="">
            Forgot?
          </a>
        </div>
        <input
          className="loginform__input"
          id="email"
          type="email"
          placeholder="••••••••"
        />
        <button className="loginform__submit" type="submit">
          LOG IN
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
