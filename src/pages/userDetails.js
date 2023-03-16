import { useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './userDetails.css';
export default function UserDetails() {

const navigate = useNavigate();


function loginpag() {
    localStorage.clear();
    navigate('/');
}

var item = localStorage.getItem('user');
console.log(item);

function test()
{
    var a = document.getElementById('welcomeDiv');
    if (a.style.display == "none")
    {
        a.style.display = "block";
        document.querySelector('#textusername').innerHTML = "Username: " + item;     
    }
    else{
        a.style.display = "none";
    } 
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
                       
                    <button className='buttonimg' onClick={test}>
                        <div className='divmain1'>
                            <p id = "accountinfo" >Your Account</p>
                            <img src="https://tagdetect.s3.eu-west-2.amazonaws.com/profile.png" alt="buttonpng" border="0" width="70px" height="65px"/>
                        </div>     
                    </button>
                              
                    <div id = "welcomeDiv">
                        <p id = "textusername"> 
                            
                        </p>
                        <button className='logout' onClick={loginpag}>
                            Log Out
                        </button>     
                    </div>
                       
                    
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
    
);
    
}


