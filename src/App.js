
import './App.css';
import Signin from './components/Signin';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function App() {
  const [user, setUsser] = useState(null)
 
  useEffect(() => {
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      const user={
        uid:userAuth?.uid,
        email:userAuth?.email
      }
      if (userAuth) {
        setUsser(user)
    } else {
      setUsser(null)
    }
  })
  
    return (unsubscribe)
  }, [])
  console.log('us',user)
  return (
    <div className="App">
          {user ? <Home /> : <Signin />}
     
     
    </div>
  );
}

export default App;
