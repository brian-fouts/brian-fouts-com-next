import { auth, googleAuthProvider } from '../lib/firebase';
import {signInWithPopup} from 'firebase/auth';

import toast from 'react-hot-toast';

export default function Contact({ }) {
    const user = null;
    return (
        <div className="page">
            <h1>Contact</h1>
            { user ? <SignOutButton /> : <SignInButton /> }
            <button onClick={() => toast.success('Success')}>Submit</button>
        </div>
    )
  }

function SignInButton() {
    const signInWIthGoogle = async () => {
        await signInWithPopup(googleAuthProvider, auth);
    }
    return (
        <button className="sign-in" onClick={signInWIthGoogle}>Sign in with Google</button>
    )
}

function SignOutButton() {

}

function Submit() {

}
