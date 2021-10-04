import React from 'react';
import {withRouter} from'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Mainnav from '../navs/Mainvav';
import Topnav from '../navs/Topnav';

const MainLayout = props => {
    const { pathname } = props.location;
    return (
        <React.Fragment>
            <div className='landing-layer'>
                <div className='container'>
                    <Topnav />
                    {pathname==='/'?<Header />:null}
                </div>
            </div>

            <Mainnav />

            <main id='home-page'>
                <div className='container'>
                    {props.children}
                </div>
            </main>

            <Footer />
        </React.Fragment>
    );
};




export default withRouter(MainLayout);
