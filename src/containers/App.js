import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Learning from './Learning';
const App = () => {
    return (
        <BrowserRouter>
            <Learning />
            <ToastContainer/>
        </BrowserRouter>
    );
};

export default App;
