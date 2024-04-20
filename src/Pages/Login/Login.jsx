import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { user, googleSignIn, signIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Login')

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                setError("");
                navigate(from, { replace: true })
            })
            .catch((error) => {
                setError("Email or Password doesn't match");
                form.reset();
            });
    }

    const handleWithGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body pb-0" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                                <p>Don't have any account?Please <Link to='/signup' className=" link link-hover text-primary">Register</Link> </p>
                                <p className='text-error'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline">Login</button>
                            </div>
                        </form>
                        <div className='card-body pt-0'>
                            <div className='form-control mt-2'>
                                <button className='btn btn-outline' onClick={handleWithGoogleSignIn}> <FaGoogle /> Continue with Google</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;