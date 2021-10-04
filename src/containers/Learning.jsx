import { isEmpty } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import CourseTable from '../components/admin/CourseTable';
import Archive from '../components/Course/Archive';
import Course from '../components/Course/Course';
import SingleCourse from '../components/Course/SingleCourse';
import MainLayout from '../components/Layouts/MainLayout';
import PrivateLayout from '../components/Layouts/PrivateLayout';
import Login from '../components/Login/Login';
import Logout from '../components/Login/Logout';
import Register from '../components/Register/Register';
import Dashboard from "../components/admin/Dashboard";
import jwt from 'jsonwebtoken';
import { addUser, clearUser } from '../action/user';

const Learning = props => {
    const dispatch=useDispatch();
    const user = useSelector(state => {
        return state.userReducer;
    });
    console.log('myTest2',user)
    const courses = useSelector(state => {
        return state.coursesReducer;
    });
   
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decodedToken = jwt.decode(token , { complete: true });
          
            const dateNow = Date.now() / 1000;

            if (decodedToken.payload.exp < dateNow) {
                localStorage.removeItem("token");
                dispatch(clearUser());
            } else {
                dispatch(addUser(decodedToken.payload.user));
                console.log('myTest1',user)
            }
        }
    }, []);
    return (
        <Switch>
            <Route path={["/dashboard"]}>
                <PrivateLayout>
                    <Route
                        path="/dashboard/courses"
                        render={() =>
                            !isEmpty(user) && user.isAdmin ? (
                                
                                    <CourseTable courses={courses} />
                                
                            ) : (
                                <Redirect to='/' />
                            )
                        }
                    />
                    <Route
                        path="/dashboard"
                        exact
                        render={() =>
                            !isEmpty(user) && user.isAdmin ? (
                                <Dashboard courses={courses} />
                            ) : (
                                <Redirect to="/" />
                            )
                        } />
                </PrivateLayout>
            </Route>
            <Route path={["/"]}>
                <MainLayout>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Route path='/archive' component={Archive} />
                        <Route path='/course/:id' component={SingleCourse} />
                        <Route path='/logout' render={() => (isEmpty(user) ? <Redirect to='/' /> : <Logout />)} />
                        <Route path='/' exact component={Course} />
                    </Switch>
                </MainLayout>
            </Route>
        </Switch>
    );
};

export default Learning;
