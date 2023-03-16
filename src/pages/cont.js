import { useRef, useState, useEffect} from 'react';
import './cont.css';
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
        <div id="divabout">
            <ul>
                <li className='textabout'>This application stores data related with films.</li>
                <li className='textabout'>You can select whether film you want. </li>
                <li className='textabout'>It's possible to see the reviews,the comments.</li>
                <li className='textabout'>You should create account to be possible make a review about the movie.</li>
                <li className='textabout'>To more information please contact us.</li>
            </ul>
        </div>
        </>
    )
}