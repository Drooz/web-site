import React, {useEffect} from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useGlobal } from 'reactn';


firebase.initializeApp({
  apiKey: "AIzaSyCcydQhti9LOyHVUoA36oLWUfX4n3N1ZIo",
  authDomain: "contaxer-react.firebaseapp.com"
})

const login = props => {
  const [ global, setGlobal ] = useGlobal();

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
      setGlobal({ ...global,userData: user })
      setGlobal({ ...global,isSignedIn: true })
    }else{
      setGlobal({ ...global,userData: null })
      setGlobal({ ...global,isSignedIn: false })
    }
  })}, [] )

    return (
      <div className="App">
        {global.isSignedIn ? (
          <span>
            <div>Signed In!</div>
         
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt=""
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}

      </div>
        
    );
}

export default login;

