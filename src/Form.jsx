import _ from './Form.module.css'

export const Form = () => {
  return (
    <form className={_.form}>
      <div className={_.wrap}>
        <label 
        className={_.label}
        htmlFor='email'>Email</label>
        <input className={_.input} id='email' name='email' type="text" />
        <p className={_.error}>Ошибка!</p>
      </div>
      <div className={_.wrap}>
        <label 
        className={_.label}
        htmlFor='password'>Пароль</label>
        <input className={_.input} id='password' name='password' type='password' />
        <p className={_.error}>Ошибка!</p>
      </div>
      <div className={_.wrapCheckbox}>
        <input className={_.checkbox} id='save' name='save' type='checkbox' />
        <label 
        className={_.labelCheckbox}
        htmlFor='save'>Запомнить пароль</label>
      </div>
      <button className={_.submit} type='submit'>Войти</button>
    </form>
  )
}