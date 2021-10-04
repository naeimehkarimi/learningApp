import { toast } from 'react-toastify';
import { getAllCourses, newCourse } from '../services/courseService';

export const getCourses = () => {
    return async dispatch => {
        const { data } = await getAllCourses();

        await dispatch({ type: 'INIT', payload: data.courses });
    };
};

export const createNewCourse = course => {
    return async (dispatch, getState) => {
        const { data, status } = await newCourse(course);
        if (status === 201) {
            toast.success('دوره با موفقیت اضافه شد.', {
                position: 'top-right',
                closeOnClick: true,
            });
        }

        await dispatch({
            type: 'ADD_COURSE',
            payload: [...getState().courses, data.course],
        });
    };
};
