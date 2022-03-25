import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
 import { auth, provider } from './firebase'
 import { signInWithPopup } from 'firebase/auth';
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();

     const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch((error)=> {
            console.log(error.message);
        });
    }
    // const signIn = () => {
    //     auth.signInWithPopup(provider)
    //     .then((result) => {
    //         console.log(result)
    //     })
    //     .catch((error) => alert(error.message))
    // }
  return (
    <div className='login'>
       <div className="login_logo">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            alt="" 
           />
           <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
            alt="" 
           />
           </div> 
           <Button type='submit' onClick={signInWithGoogle}>
               Sign In
           </Button>
    </div>
  )
}

export default Login