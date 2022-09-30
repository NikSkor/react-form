import {useState} from "react";
import _ from "./Form.module.css";

export const Form = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const validEmail = (value) => {
    setEmailError(/^.+@.+\..+$/.test(value));
  }

  const handleEmail = ({ target }) => {
    setEmail(target.value);
    validEmail(target.value);
  };

  const validPassword = (value) => {
    setPasswordError(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/.test(value));
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value);
    validPassword(target.value);
  };

  return (
    <form className={_.form}>
      <div className={_.wrap}>
        <label className={_.label} htmlFor="email">
          Email
        </label>
        <input
          className={_.input}
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={handleEmail}
          />
        {
          !emailError && <p className={_.error}>Ошибка!</p>
        }
      </div>
      <div className={_.wrap}>
        <label className={_.label} htmlFor="password">
          Пароль
        </label>
        <input
          className={_.input}
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
        {
          !passwordError && <p className={_.error}>Ошибка!</p>
        }
      </div>
      <div className={_.wrapCheckbox}>
        <input className={_.checkbox} id="save" name="save" type="checkbox" />
        <label className={_.labelCheckbox} htmlFor="save">
          Запомнить пароль
        </label>
      </div>
      <button className={_.submit} type="submit">
        Войти
      </button>
    </form>
  );
};
