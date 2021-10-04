import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCourses } from '../../action/courses';

const Course = () => {
    const courses=useSelector(state=>state.coursesReducer);
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getCourses());
      
    }, []);
    return ( 
        <section className='terms-items'>
                        <header>
                            <h2> آخرین دوره های تاپ لرن </h2>
                            <NavLink to='/archive'> مشاهده همه دوره ها </NavLink>
                        </header>
                        <div className='row'>
                        {courses.map(course => (
                                <div  key={course._id} className='col-lg-4 col-md-4 col-sm-6 col-xs-12 term-col'>
                                    <article>
                                        <nav href='' className='img-layer'>
                                            <img src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`} />
                                        </nav>
                                        <h2>
                                            <NavLink to={`/course/${course._id}`}> {course.title}</NavLink>
                                        </h2>
                                        <span> {course.price} </span>
                                        <i>1:52:32</i>
                                    </article>
                                </div>
                            ))}
                               
                        </div>
                    </section>
     );
}
 
export default Course;