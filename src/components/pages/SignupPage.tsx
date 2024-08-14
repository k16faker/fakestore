import React from 'react'
import styled from 'styled-components'
import SignUpForm from '../form/SignUpForm'

const SignupPage = () => {
  return (
    <Container>
        <SignUpForm />
    </Container>
  )
}

export default SignupPage


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;