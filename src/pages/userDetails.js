import { useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './reviews.css';
import  {namesfromDataset} from './namemovies';

export default function UserDetails() {
      
    const navigate = useNavigate();
    const [title,settitle] = useState('');
    const [names,setNames] = useState('');

    function loginpag() {
        localStorage.clear();
        navigate('/');
    }

    useEffect(()=> {
    namesfromDataset.map(name =>{
      if (name.title == names)
      {
        settitle(names);
      }  
     })
    })

    var item = localStorage.getItem('user');
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
        document.getElementById('App-header4').style.display = "none";
    }
    function home()
    {
        document.getElementById('divabout').style.display = "none";
        document.getElementById('App-header4').style.display = "flex";
    }
    

    if(title !== '')
    {
      //  console.log(title);
        document.getElementById('sear').value = title;
          
    }
        
    //console.log(title);
   // console.log(names);
    const filmsearch = async (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/filmsearch",{
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin":"*",

        },
        body:JSON.stringify({
            title,
        }),
        }).then((res)=>res.json())
        .then((data)=>{
        console.log(data);
        if (data.title === title)
        {
            document.getElementById('textmatch1').innerHTML = ""; 
            localStorage.setItem('title',JSON.stringify(data));
            window.location.href = "reviews.html";
        }
        else {
           
            document.getElementById('textmatch1').innerHTML = data.title; 
            document.getElementById('textmatch1').style.color = "red";
        }
         
        })
        settitle('');
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
            <div className='divmainright1'>
                <ul > 
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
            <header id="App-header4">
                <p className='text1'>Choose a film</p>
                <p id='textmatch1'></p>
                <form onSubmit={filmsearch}>
                    <div className='App_main1' >      
                        <input type="search" id="sear"  placeholder='Type a film' onChange={(e)=>setNames(e.target.value)}/>
                        <button className='textlogin' >
                            Continue
                        </button>
                    </div> 
                </form>
                <div className='appmain3'>
                    <ul className='ul3'>
                        {namesfromDataset.filter((name)=>{ 
                            return names.toLowerCase() === '' 
                            ? null
                            : name.title.toLowerCase().includes(names);
                        }).map(name =>{
                            return <button value={name.title} onClick={(e)=>settitle(e.target.value)} key={name._id}>{name.title}</button>
                        })}
                    </ul>

                </div>
            </header>
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
                <p className="footer-company-name">Copyright 2021 <strong>IPCA Developer</strong>
                All rights reserved</p>
            </div>
            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Alexandre Ramos</span></p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+351 935643952</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="#">noreplyloginapp18881@gmail.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    Social Media
                </p>
                <div className="footer-icons">
                    <a href="https://github.com/Alex18891">
                        <img width="85px" height="65px" style={{display: "inline-block"}} src="https://tagdetect.s3.eu-west-2.amazonaws.com/github.png"></img> 
                    </a>
                    <a href="https://www.linkedin.com/in/alexandre-ramos-7470b7133/">
                        <img width="85px" height="65px" style={{display: "inline-block"}} src="https://tagdetect.s3.eu-west-2.amazonaws.com/linkedin.png"></img>
                    </a>
                </div>
            </div>
        </footer>  


    </>          
        
    );
    
}


