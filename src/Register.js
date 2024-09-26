import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


/*const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword0] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
const navigate = useNavigate()
const onButtonClick = () => {}*/

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] =useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
            'http://localhost:3001/register' {
                method: "post",
                body: JSON.stringify({name, email}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
        }
    }

    return (
            <div>Register</div>
)

}
