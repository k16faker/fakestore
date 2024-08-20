
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


const LoginForm = () => {

  const navigate = useNavigate();
  const { logIn, user } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      if(user) {
        navigate('/');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <CustomForm onSubmit={loginHandler}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </CustomForm>
  )
}

export default LoginForm



const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  margin: 50px auto;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  label {
    font-weight: bold;
  }
  input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  button {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f3f3f3;
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3;
    }
  }
`;