import React, { useState } from 'react';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((err) => {
        alert(err.message);
      })
  }

  return (
    <div className='login'>
      <Link to='/login'>
        <img
          className='login_logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='Logo login'
        />
      </Link>

      <div className='login_container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='text'
            placeholder=' E-mail'
            autocomplete={true}
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
            placeholder=' Password'
            autocomplete={true}
          />

        </form>
        <button onClick={login} className='btn_singIn'>Sign In</button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className='btn_register'>Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login;