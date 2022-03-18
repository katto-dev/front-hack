import React, { useState } from "react";
import Swal from "sweetalert2";

import logo from '../../assets/img/hackaton-8.png'; //estatico

async function loginUser(credentials) {
  return fetch("https://www.mecallapi.com/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password,
        });
        
        if ("accessToken" in response) {
            let timerInterval
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                html: 'Logged in.',
                timer: 2000,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((value) => {
                localStorage.setItem("accessToken", response["accessToken"]);
                localStorage.setItem("user", JSON.stringify(response["user"]));
                window.location.href = "/";
            });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Missing username and/or password.',
            })
        }
    };

    // const signInWithGoogle = () =>{
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup( auth, provider )
    //         .then( ( { user } ) => {
    //             dispatch( login( user.uid, user.displayName ) )
    //         } )
    //         .catch( (err) => {
    //             console.error( err );
    //         });
    // }

    return (
        <div className="auth__main">
            <div className='auth__box-container'>
                <div className="text-center">
                    <img 
                        src={ logo } 
                        alt="Hackaton #8"
                    />
                    <h2 className='auth__title'>Login</h2>
                </div>
                <form noValidate onSubmit={handleSubmit}>
                    <input
                        required
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        className="auth__input"
                        autoComplete="off"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        required
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="auth__input"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        className='bton bton-primary bton-block'
                    >
                        Sign In
                    </button>
                </form>

                <div className='auth__social_network'>
                    <h6 className='auth__title'>Login with social network</h6>
                    
                    <div 
                        className="google-btn" 
                        //onClick={ signInWithGoogle }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text text-center">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;