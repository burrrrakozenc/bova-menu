import React from 'react'
import '../assets/css/footer.css'
import Logo from '../assets/images/LOGO_INVERTED.png'

const Footer = () => {
    return (
        <div className="">
            <footer className="site-footer" id="footer">
                <div className="footer-container mt-3 mb-3">
                    <div className="row">

                        <div className="col-md-3 mt-5">
                            <h6>
                                    CONTACT US
                            </h6>
                            <p>
                                <a href="https://goo.gl/maps/XU98WPUjGDBiCPEe8" rel="noreferrer">
                                    Address: Şehit Muhtar, Mis St. No:17, 34435 Beyoğlu/İstanbul
                                </a>
                            </p>
                            <p>
                                <a href="mailto:bovasahne@gmail.com" rel="noreferrer">
                                    bovasahne@gmail.com
                                </a>
                            </p>
                            <a href="tel:902122434461" rel="noreferrer">
                                +90 212 243 44 61
                            </a>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <img src={Logo} alt="logo"/>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12038.017229391524!2d28.9815485!3d41.0360995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81436739d60da73b!2sBova%20Jazz%20Club!5e0!3m2!1str!2str!4v1661339956780!5m2!1str!2str"
                                style={{width: '90%', height: '400px'}}
                                allowFullScreen="" loading="lazy"
                                aria-label="maps-location"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    {/*<br/>*/}
                    {/*<hr style={{marginTop: '2rem'}}/>*/}
                    {/*<br/>*/}
                </div>
                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        /!*<div className="col-md-8 col-sm-6 col-xs-12">*!/*/}
                {/*        /!*    <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by*!/*/}
                {/*        /!*        <a href="#">Scanfcode</a>.*!/*/}
                {/*        /!*    </p>*!/*/}
                {/*        /!*</div>*!/*/}

                {/*        /!* <div className="col-md-4 col-sm-6 col-xs-12">*/}
                {/*  <ul className="social-icons">*/}
                {/*    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>*/}
                {/*    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>*/}
                {/*    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>*/}
                {/*    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>*/}
                {/*  </ul>*/}
                {/*</div> *!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/* </div> */}
            </footer>
        </div>
    )
}

export default Footer