import React, { useRef } from 'react'
import { auth } from '../firebase';
import './Signin.css';
const Signin = () => {
    const emailRef = useRef(null)
    const passwordRef= useRef(null)
    const singUphandler=(event)=>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((user) => {
            console.log(user)
        })
        .catch((err) => {
            console.log(err)
        })
    }
       const singInhandler=(event)=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((user) => {
            console.log(user)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className="signin">
            <form action="">
                <input ref={emailRef} type="email"/>
                <input ref={passwordRef}type="password"/>
                <button onClick={singInhandler}>Sign in</button>
                <h6>Not yet register?<span className="sign_link" onClick={singUphandler}>SignUp</span></h6>
            </form>
        </div>
    )
}

export default Signin
