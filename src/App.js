import './App.css';
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import app from './Firebase/firebase.init';
import {useState} from 'react'

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user
      setUser(user)
      console.log(user);
    })
  }

  // SignOut Method 
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(() => {
      setUser({})
    })
  }

  return (
    <div className="App">
      {/* toggle button // conditional rendering */}

    { 
    user.email ?
      <button onClick={handleSignOut}>Sign Out</button>
      :
      <button onClick={handleSignIn}>Sign In With Google</button>
    }

      {
        user.email &&
        <div>
        <h1>User Name: {user.displayName}</h1>
        <h3>User Email: {user.email}</h3>
        <img src={user.photoURL} alt=''/>
      </div>
      }
    </div>
  );
}

export default App;
