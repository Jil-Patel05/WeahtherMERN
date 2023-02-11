import React, { useContext, useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import {useNavigate} from "react-router-dom"
import { Usercontext } from '../App';
import axios from 'axios'


const Signin = () => {
  const { state, dispatch } = useContext(Usercontext);
  const navigate = useNavigate();
  const [user, setuser] = useState({
    email:"",password:""
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
     setuser({ ...user, [name]: value });
  }
  const Change = async(e) => {
    e.preventDefault();
    console.log("clicked");
    const {  email, password } = user;
    
    const res = await axios.post("/signin", {
        email, password
    });
    if (res.status === 422 || !res) {
      window.alert("login Failed")
    }
    else {
       dispatch({ type: "user", payload:true})
       window.alert("login successfull");
       navigate("/")
    }
   
  } 
  return (
    <>
      <div className="signin">
        <div className="signin_form">
          <div className="signin_photo">
            <img src="https://metamug.com/article/images/security/linkedin/linkedin-signin.jpg" alt="SignIN image" className='photo_1' />
          </div>
          <div className="signin_content">
            <div className="p">
              <p>Sign In</p>
            </div>
            <div className="imformation_1">
              <EmailIcon className="svg_icons" />
              <input type="text" placeholder='Enter Your email' name='email' id='email' autoComplete='off'  value={user.name} onChange={handleInput}/>
            </div>
            <div className="imformation_1">
              <KeyIcon className="svg_icons" />
              <input type="password" placeholder='Enter Your password' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInput} />
            </div>
            <div className='form-group form-button'>
              <input type="submit" name="signup" id="signup" value="Register" className='form_submit' onClick={Change} />
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Signin