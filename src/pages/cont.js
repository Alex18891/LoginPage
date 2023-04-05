import { useRef, useState, useEffect} from 'react';
import './reviews.css';
import {useNavigate} from 'react-router-dom';
export default function Cont()
{
    const navigate = useNavigate();

    if (localStorage.getItem('token') !== null) 
    {
      window.location.href='userDetails';
    }
    function login()
    {
        navigate('/login');
    }
    function register()
    {
        navigate('/signup');
    }
    function aboutus()
    {
        document.getElementById('divabout').style.display = "block";
    }
    function home()
    {
        document.getElementById('divabout').style.display = "none";
    }
    
    return(
            <>
            <header className='headermain'>
                <div className='divmain'>
                    <ul>
                        <li>
                            <a onClick={home}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a onClick={aboutus}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href='mailto:noreplyloginapp18881@gmail.com'>
                                Contact Us
                            </a>
                        </li>
                    </ul>        
                </div>
                <div className='divmainright'>
                    <ul>
                        <li>
                            <a  onClick={register}> 
                                Register
                            </a>
                        </li>
                        <li>
                            <a  onClick={login}> 
                                Login 
                            </a>
                        </li>
                    </ul>       
                </div>
        </header>
        <div className="App">
            <div id="divabout">
                <ul>
                    <li className='textabout'>This application stores data related with films.</li>
                </ul>  
                <ul>
                    <li className='textabout'>You can select whether film you want. </li>
                </ul>
                <ul>
                    <li className='textabout'>It's possible to see the reviews,the comments.</li>
                </ul>
                <ul>
                    <li className='textabout'>You should create account and login.</li>
                </ul>
                <ul>
                    <li className='textabout'>To more information please contact us.</li>
                </ul>    
            </div>
        </div>
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>IPCA <span>Developer</span></h3>
                <p className="footer-links">
                    <a  onClick={home}>Home</a>
                    &nbsp;|&nbsp;
                    <a onClick={aboutus}> About</a>
                    &nbsp;|&nbsp;
                    <a href='mailto:noreplyloginapp18881@gmail.com'> Contact</a>
                    
                </p>
                <p className="footer-company-name">Copyright 2021 <strong>IPCA Developer </strong>
                All rights reserved</p>
            </div>
            <div className="footer-center">
                <div className='divtext'> 
                    <p><span>Alexandre Ramos</span></p>
                </div>
                <div className='divtext'>
                    <p><span>Esdras Teixeira</span></p>
                </div>
                <div className='divtext'>
                    <p><a href="#">noreplyloginapp18881@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className='fosterdiv'>  
                    <div>
                        <p className="footer-company-about">
                            Alexandre Contacts
                        </p>
                        <nav>
                        <div className="footer-icons">
                            <ul className='social-networks'>
                                <li>
                                    <a href="https://github.com/Alex18891">
                                        <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-github-1-240.png"></img> 
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/alexandre-ramos-7470b7133/">
                                        <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-linkedin-5-240.png"></img> 

                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/351935643952">
                                        <img  width="25px" height="25px" src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-whatsapp-1-240.png"></img>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                    <div>   
                    <p className="footer-company-about">
                        Esdras Contacts
                    </p>
                    <nav>
                    <div className="footer-icons">
                        <ul className='social-networks'>
                            <li>
                                <a href="https://github.com/ETFF2612">
                                    <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-github-1-240.png"></img> 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/esdras-falc%C3%A3o-697351214/">
                                    <img width="25px" height="25px"  src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-linkedin-5-240.png"></img> 

                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/351967687915">
                                    <img  width="25px" height="25px" src="https://tagdetect.s3.eu-west-2.amazonaws.com/iconmonstr-whatsapp-1-240.png"></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                    </div>
                </div>
            </div>
        </footer>  
        </>
    )
}