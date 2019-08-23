import React, { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = e => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      });
  };

  const login = e => {
      e.preventDefault();
      axios
          .post('http://localhost:5000/api/login', credentials)
          .then(res => {
              localStorage.setItem('token', res.data.payload)
              props.history.push('/colors')
              console.log(credentials)
          })
          .catch(err => {
              console.log('Error while logging in', err.response)
          })

  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <h3>Log In</h3>
      <form onSubmit={login}>
          <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
          />
          <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
          />
          <button>
              Log In
          </button>
      </form>
    </>
  );
};

export default Login;
