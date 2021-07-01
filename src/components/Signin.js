import React from 'react'
import './Signin.css';
const Signin = () => {
    return (
        <div className="signin">
            <form action="">
                <input type="email"/>
                <input type="password"/>
                <button>Sign in</button>
                <h6>Not yet register?<span className="sign_link">SignUp</span></h6>
            </form>
        </div>
    )
}

export default Signin
