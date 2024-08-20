import React from 'react'
import styled from 'styled-components'
import LoginForm from '../form/LoginForm'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <Container>
        <LoginForm />
        <CustomBtn onClick={() => navigate('/signup')}>Sign Up</CustomBtn>
    </Container>
  )
}

export default LoginPage


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CustomBtn = styled.button`
    width: 100px;
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #f3f3f3;
    cursor: pointer;
    &:hover {
        background-color: #e3e3e3;
    }
`;