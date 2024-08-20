import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


const SignUpForm = () => {
    const navigate = useNavigate();

    const { signUp } = UserAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');


    const signupHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            return alert('Passwords do not match');
        }
        try {
            await signUp(email, password, name);
            alert('User created successfully');
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <CustomForm onSubmit={signupHandler}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="password">Confirm Password</label>
        <input type="password" id="password" name="password" onChange={(e) => setConfirmPassword(e.target.value)} />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)}/>
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