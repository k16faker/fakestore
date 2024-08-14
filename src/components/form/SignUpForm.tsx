import React from 'react'
import styled from 'styled-components'


const SignUpForm = () => {
  return (
    <CustomForm>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Sign Up</button>
    </CustomForm>
  )
}

export default SignUpForm


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