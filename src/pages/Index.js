import React from 'react';
import MainImage from '../assets/images/cover_1.jpg'
import Footer from '../components/Footer';
import '../assets/css/main.css'

const IndexPage = () => (
    <div className="m-auto  ">
        <div className="section-1">
            <div className="image-wrapper">
                <img src={MainImage} alt=""/>
                <h2 style={{fontSize:'3em',lineHeight:'1.2em'}} className="text-white">UNDER CONSTRUCTION</h2>
            </div>
        </div>
        <Footer/>
    </div>
);

export default IndexPage;
