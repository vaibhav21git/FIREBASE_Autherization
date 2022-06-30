import {app} from './firebaseconfig';
import { useState } from 'react';
import { getAuth , signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";



function App() {

  
const  auth = getAuth();

const [data,setdata]  = useState({});

const googleprovider = new GoogleAuthProvider()

const handleinput = (event) =>
{
   let newinput = {[event.target.name] : event.target.value};
   setdata({...data,...newinput})
}

const handlesubmit = (event) =>
{
  signInWithEmailAndPassword(auth,data.email,data.password)
  .then((response)=>{
    console.log(response.user)
  })
  .catch((err)=>
  {
     alert(err.message)
  });

}

const handlegooglelogin = (event) =>
{
   signInWithPopup(auth,googleprovider)
   .then((response)=>{
    console.log(response.user)
  })
  .catch((err)=>
  {
     alert(err.message)
  });
   
}


  return (
    <div className="App">
        <input name  = "email" type = "email" placeholder ="Enter Email" onChange={(event)=>handleinput(event)}/>
        <input name  = "password" type = "password" placeholder ="Enter password" onChange={(event)=>handleinput(event)}/>
        <button onClick = {handlesubmit}>log in</button>

        <button onClick={handlegooglelogin}>Sign up with google</button>
    </div>
  );
}

export default App;
