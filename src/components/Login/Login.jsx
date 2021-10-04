import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/userService';
import jwt from 'jsonwebtoken';
import { addUser } from '../../action/user';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({ history }) => {
    const user = useSelector((state) => state.userReducer);
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            email: getEmail,
            password: getPassword,
        };

        const reset = () => {
            setEmail('');
            setPassword('');
        };

        try {
            const { status, data } = await loginUser(user);

            if (status === 200) {
                toast.success('کاربر با موفقیت وارد شد.', {
                    position: 'top-right',
                    closeOnClick: true,
                });

                localStorage.setItem('token', data.token);
               
                dispatch(addUser(jwt.decode(data.token, { complete: true }).payload.user));
               
                history.replace('/');
                reset();
            }
        } catch (ex) {
            toast.error('مشکلی پیش آمده.', {
                position: 'top-right',
                closeOnClick: true,
            });
            console.log(ex);
        }
    };

    return (
        <main className='client-page'>
            <div className='container-content'>
                <header>
                    <h2> ورود به سایت </h2>
                </header>

                <div className='form-layer'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <span className='input-group-addon' id='email-address'>
                                <i className='zmdi zmdi-email'></i>
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='ایمیل'
                                aria-describedby='email-address'
                                value={getEmail}
                                onChange={event => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>

                        <div className='input-group'>
                            <span className='input-group-addon' id='password'>
                                <i className='zmdi zmdi-lock'></i>
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='رمز عبور '
                                aria-describedby='password'
                                value={getPassword}
                                onChange={event => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </div>

                        <div className='remember-me'>
                            <label>
                                <input type='checkbox' name='' /> مرا بخاطر بسپار{' '}
                            </label>
                        </div>

                        <div className='link'>
                            <a href=''>
                                {' '}
                                <i className='zmdi zmdi-lock'></i> رمز عبور خود را فراموش کرده ام !
                            </a>
                            <a href=''>
                                {' '}
                                <i className='zmdi zmdi-account'></i> عضویت در سایت{' '}
                            </a>
                        </div>

                        <button className='btn btn-success'> ورود به سایت </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default withRouter(Login);
