import React from 'react'
import styled from 'styled-components'
import LoginForm from '../form/LoginForm'

const LoginPage = () => {
  return (
    <Container>
        <LoginForm />
    </Container>
  )
}

export default LoginPage


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;