import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewCourse } from '../../action/courses';
const NewCourseModal = ({course}) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [info, setInfo] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();

        try {
            console.log(title);
            var data = new FormData();
            data.append('title', title);
            
            data.append('price', Number.parseInt(price));
            data.append('imageUrl', event.target.imageUrl.files[0]);
            data.append('info', info);
            console.log('dataaa',data)

            //Dispatch
            dispatch(createNewCourse(data));
           
        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <div className='modal-dialog'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <button type='button' className='close' data-dismiss='modal'>
                        &times;
                    </button>
                </div>

                <div className='modal-body'>
                    {' '}
                    <div className='inner form-layer'>
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                name='title'
                                style={{ marginBottom: 3 }}
                                className='form-control'
                                placeholder='عنوان دوره'
                                aria-describedby='title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />

                            <input
                                type='text'
                                name='price'
                                style={{ marginBottom: 3 }}
                                className='form-control'
                                placeholder='قیمت دوره به تومان'
                                aria-describedby='price'
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />

                            <input type='file' name='imageUrl' style={{ marginBottom: 3 }} className='form-control mb-2' aria-describedby='imageUrl' />
                            <textarea
                                name='info'
                                placeholder='توضیحات دوره'
                                className='form-control'
                                style={{ marginBottom: 3 }}
                                value={info}
                                onChange={e => setInfo(e.target.value)}
                            />

                            <button type='submit' className='btn btn-success ' style={{ margin: '1em' }}>
                                ثبت دوره
                            </button>
                            <button className='btn btn-warning mr-5' style={{ margin: '1em' }} data-dismiss='modal'>
                                انصراف
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCourseModal;
