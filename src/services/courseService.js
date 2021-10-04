import axios from 'axios';
import http from './httpService';

export const getAllCourses = () => {
    return axios.get('https://toplearnapi.ghorbany.dev/api/courses');
};
export const getCourse=(courseId)=>{
    return axios.get(`https://toplearnapi.ghorbany.dev/api/course/${courseId}`);
}
export const newCourse = (course) => {
    return http.post('https://toplearnapi.ghorbany.dev/api/course',  course
    );
};