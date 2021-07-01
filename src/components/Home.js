import React from 'react'
import { auth } from '../firebase'

const Home = () => {
    return (
        <div>
        <h5>Welome to home</h5> 
       <p><button onClick={() => auth.signOut()}>Sign out</button></p>
        </div>
    )
}

export default Home
