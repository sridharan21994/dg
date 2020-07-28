import React, {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom';
import * as localForage from "localforage";


const Login = (props) => {
    const [Value, setValue] = useState('');
    const [Password, setPassword] = useState('');
    const [Valid, setValid] = useState(false)

    const SignUp = async () => {
        let det = await localForage.setItem('loginDetails', {
            name: Value,
            password: Password
        })
        console.log('sign up', det);
    }

    const login = async () => {
        const details = await localForage.getItem('loginDetails');
        console.log(details);
        if ((details.name === Value) && (details.password === Password)) {
           setValid(true);
        } 
         // history.push('/dashboard');
    }

    const renderRedirect = () => {
        if (Valid) {
            return <Redirect to='/dashboard' />
        }
      }

    return (
        <div>
           <input type="text" value={Value} onChange={e => setValue(e.target.value)}/>
           <input type="password" value={Password} onChange={e => setPassword(e.target.value)}/>
           {renderRedirect()}
           <button onClick={e => login()} >login</button>
           <button onClick={e => SignUp()} >Sign Up</button>
        </div>
    )
}


export default Login
