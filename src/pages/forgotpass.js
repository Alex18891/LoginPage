import { useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './forgotpass.css';

export default function Forgotpass() {

    const [email,setemail] = useState('');
    const navigate = useNavigate();

    const handleSubmitforgotpass = async (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/forgot-password",{
          method: "POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            email,
          }),
        }).then((res)=>res.text())
        .then((data)=>{
          document.getElementById('textmatch1').innerHTML = data; 
          if (data === "Now you can verify your email")
          {
            document.getElementById('textmatch1').style.color = "white";
          }
          else{
            document.getElementById('textmatch1').style.color = "red";
          }
          
        })
        setemail('');
      }
      function historyback()
      {
        navigate("/login");
      }
    return(
        <>
            <div className="Appsignup">
                <header className="App-headerfor">
                    <button onClick = {historyback} className="textloginback">&#129144; Sign in</button>
                    <p className='text1'>Forgot Password</p>
                    <p id='textmatch1'></p>
                    <div className='App_main' >      
                        <p className='text2'>Email</p> 
                        <input type="text" placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)} value={email} 
                        required/>   
                        <form onSubmit={handleSubmitforgotpass}>   
                            <div className='App-signup'>
                                <button className='textlogin' >
                                    Continue
                                </button>
                            </div>    
                        </form>     
                    </div> 
                </header>
            </div>
        </>
        );
}