import { useRef, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './reviews.css';


export default function Login() {
  const userRef = useRef();
  const errRef = useRef();
  const [email,setemail] = useState('');
  const[pw,setPwd] = useState('');
  const [errMsg,setErrMsg] = useState('');
  const [data1,setdata] = useState(false);
  const navigate = useNavigate();
  useEffect(()=> {
   userRef.current.focus();
   },[])

  useEffect(()=> {
    setErrMsg('');
  },[email,pw])

  const handleSubmitlogin = async (e) => {
    e.preventDefault();
    console.log(email,pw);
    fetch("http://localhost:5000/loginuser",{
      method: "POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
        pw
      }),
    }).then((res)=>res.text())
    .then((data)=>{
      console.log(data);
      document.getElementById('textmatch1').innerHTML = data;
      if(((data !== "error") && (data !== "Invalid Password") && (data !== "User not found") ) && (pw != "") && (email != ""))
      {
        localStorage.setItem("user",data);
        navigate('/userDetails');
        if(data1==true)
        {
          localStorage.setItem("token",data.data);
        }
        
      }  
    })
    setemail('');
    setPwd('');
  }
  const setcookie = () => {
    setdata(value=>!value);
   }
   
  const handleSubmitforgot = async (e) => {
    navigate('/forgotpass');
  }
  function moveforward() {
   navigate('/signup');
  }

  function historyback()
  {
    navigate("/");
  }

  return (
    <>   
    <div className="App">
      <p ref={errRef} className={errMsg?"errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
      <header className="App-header">
        <button onClick = {historyback} className="textloginback">&#129144;</button>
        <p className='text1'>Login</p>
        <p id='textmatch1'></p>
        <div className='App_main' >      
            <p className='text2'>Email</p> 
            <input type="text" placeholder="Enter Email" ref={userRef}  onChange={(e)=>setemail(e.target.value)} value={email} 
            required/>     
            <p className='text2'>Password</p>
            <input type="password"  placeholder="Enter Password"  onChange={(e)=>setPwd(e.target.value)} value={pw} 
            required/>    
            <form onSubmit={handleSubmitforgot}>    
              <div className='Appremember'>
                <div className='Appremember1'>
                  <input type="checkbox"  onChange={setcookie} checked={data1}/>
                  <p className='text2'> Remember me</p>
                </div>           
                  <button className='btf'>
                    Forgot Password?
                  </button>
              </div> 
            </form>
            <form onSubmit={handleSubmitlogin}>   
              <div className='App-login'>
                  <button className='textlogin' >
                      Sign In
                  </button>
                </div>    
            </form>    
            <form onSubmit={moveforward}>
                <div className='Appremember2'>
                <p className='text5'> Not a member?  </p>   
                <button className='btf' >
                    Register free
                </button>
                </div> 
            </form>  
          </div> 
      </header>
    </div> 
    </>
  );
}

