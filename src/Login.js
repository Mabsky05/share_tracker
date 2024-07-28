import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword0] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


const navigate = useNavigate()

const onButtonClick = () => {}

return (



    <div className={'mainContainer'}>
        <div className={'titleContainer'}>
            <div>Login</div>
        </div>
    <br/>

    </div>
)

}

export default Login

