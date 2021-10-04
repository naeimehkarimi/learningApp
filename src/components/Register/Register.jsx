import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { registerUser } from '../../services/userService';
import { Circle2 } from 'react-preloaders';

const Register = ({ history }) => {
    const [getFullname, setFullname] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getLoading, setLoading] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        const user = {
            fullname: getFullname,
            email: getEmail,
            password: getPassword,
        };

        const reset = () => {
            setFullname('');
            setEmail('');
            setPassword('');
        };

        try {
            // setLoading(true);
            const { status } = await registerUser(user);
            if (status === 201) {
                toast.success('کاربر با موفقیت ساخته شد.', {
                    position: 'top-right',
                    closeOnClick: true,
                });
                setLoading(false);
                history.push('/login');
                reset();
            }
        } catch (ex) {
            setLoading(false);
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
                    <h2> عضویت در سایت </h2>
                </header>
                {getLoading ? (<Circle2 customLoading={getLoading} time={0} /> ): null}
                <div className='form-layer'>
                    <form action='' method='' onSubmit={handleSubmit}>
                        <div className='input-group'>
                            <span className='input-group-addon' id='username'>
                                <i className='zmdi zmdi-account'></i>
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='نام و نام خانوادگی'
                                aria-describedby='username'
                                value={getFullname}
                                onChange={event => {
                                    setFullname(event.target.value);
                                }}
                            />
                        </div>

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

                        <div className='accept-rules'>
                            <label>
                                <input type='checkbox' name='' /> قوانین و مقررات سایت را میپذیرم{' '}
                            </label>
                        </div>

                        <div className='link'>
                            <a href=''>
                                {' '}
                                <i className='zmdi zmdi-assignment'></i> قوانین و مقررات سایت !
                            </a>
                            <a href=''>
                                {' '}
                                <i className='zmdi zmdi-account'></i> ورود به سایت{' '}
                            </a>
                        </div>

                        <button className='btn btn-success'> عضویت در سایت </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default withRouter(Register);
