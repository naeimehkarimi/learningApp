import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isEmpty } from 'lodash';
const Topnav = () => {
    const user = useSelector(state => {
        return state.userReducer;
    });
  
    return (
        <nav>
            <div className='row'>
                <div className='col-sm-6 col-xs-12'>
                    <ul>
                        <li>
                            <NavLink to='/'>صفحه اصلی</NavLink>
                            <a href=''> درباره ما </a>
                            <a href=''> تماس با ما </a>
                        </li>
                    </ul>
                </div>
                <div className='col-sm-6 col-xs-12'>
                    <div className='clientarea'>
                        {isEmpty(user) ? (
                            <div className='signin '>
                                <i className='zmdi zmdi-account'></i>
                                <NavLink to='/login'> ورود </NavLink> /<NavLink to='/register'> عضویت </NavLink>
                            </div>
                        ) : (
                            <div className="loggein ">
                                <i className="zmdi zmdi-account"></i>
                                <NavLink to="/user-profile">
                                    {user.fullname}
                                </NavLink>{" "}
                                {user.isAdmin ? (
                                    <NavLink to="/dashboard">
                                        /پنل ادمین
                                    </NavLink>
                                ) : null}
                                / <NavLink to="/logout">خروج</NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Topnav;
