import { useRef, useState, useEffect} from 'react';
import './signup.css';
import {useNavigate} from 'react-router-dom';

export default function Signup()
{
    const navigate = useNavigate();
    const [name,setname] = useState('');
    const[username,setusername] = useState('');
    const[email,setemail] = useState('');
    const[pw,setpw] = useState('');
    const[confipw,setconfipw] = useState('');  
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      fetch("http://localhost:5000/register",{
        method: "POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin":"*",

        },
        body:JSON.stringify({
          name,
          username,
          email,
          pw,
          confipw
        }),
      }).then((res)=>res.text())
      .then((data)=>{
        console.log(data);  
        document.getElementById('textmatch1').innerHTML = data;
        
      })
      setname('');
      setusername('');
      setemail('');
      setpw('');
      setconfipw('');
    }
 
    var check = function()  
    {
        if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('textmatch').style.color = 'white';
        document.getElementById('textmatch').innerHTML = 'Password';
      } else {
        document.getElementById('textmatch').style.color = 'red';
        document.getElementById('textmatch').innerHTML = 'Passwords are not the same';
      }
    }

    const moveback = async() =>
    {
      navigate('/login');
    }

    function historyback()
    {
      navigate("/");
    }
    
    return(
      <>
      <div className="Appsignup">
        <header className="App-headersignup">
          <button onClick = {historyback} className="textloginback">&#129144;</button>
          <p className='text1'>Register</p>
          <p id='textmatch1'></p>     
          <div className='App_main' > 
              <p className='text2'>Name</p> 
              <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)} value={name} required/>     
              <p className='text2'>Username</p> 
              <input type="text" placeholder="Enter Username" onChange={(e)=>setusername(e.target.value)} value={username} required />  
              <p className='text2'>Email</p> 
              <input type="text" placeholder="Enter Email"  onChange={(e)=>setemail(e.target.value)}  value={email} required/>    
              <p id='textmatch'>Password</p>    
              <input type="password"  placeholder="Enter Password"  id="password"  onKeyUp={check} onChange={(e)=>setpw(e.target.value)} value={pw} required/>   
              <p className='text2'>Confirm Password</p>
              <input type="password"  placeholder="Enter Password to confirm" id="confirm_password"  onKeyUp={check} onChange={(e)=>setconfipw(e.target.value)} value={confipw} required/>        
             <form onSubmit={handleSubmit}> 
                <div className='App-signup'>
                  <button className='textlogin'>
                    Sign up
                  </button>
                </div>              
              </form>  
              <form onSubmit={moveback}>  
                <div className='Appremember2'>
                <p className='text5'> Already have an account?  </p> 
                <button className='btf'  >
                      Sign in
                </button>
                </div> 
              </form>                  
            </div> 
        </header>
      </div>
      </>
    );

}
