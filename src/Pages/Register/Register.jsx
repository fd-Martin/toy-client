import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const navigateToLoginPage = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photo.value;
        if (password.length < 6) {
            setError('Password must have atleast 6 digit');
            return
        }
        createUser(email, password, name, photoURL)
            .then((result) => {
                setError('');
                userInfo(result.user, name, photoURL);
                form.reset();
                navigateToLoginPage('/login');
            })
            .catch((error) => {
                setError(error.message);
                form.reset();
            });

        const userInfo = (user, name, photoURL) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            })
                .then(() => {
                })
                .catch((error) => {
                    setError(error.message);
                })
        }
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </div>
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
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Name" name="photo" className="input input-bordered" />
                            </div>
                            <p className='text-error'>{error}</p>
                            <p>Already  have any account?Please <Link to='/login' className=" link link-hover text-primary">Login</Link> </p>
                            <div className="form-control mt-2">
                                <button className="btn btn-outline">Register</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;