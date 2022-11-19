
import React from 'react'
import './SignUp.css';
import {useNavigate} from 'react-router-dom'

export  const SignUp = () => { 
    const navigate = useNavigate(); 
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassowrd] = React.useState("");


 // to store value in local storage

 const handleSubmit = (e) => {
   e.preventDefault();
   if(name && password && email){
      const user = {'name': name, 'password': password, 'email': email}
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/LogIn");
   }
 };

  return (
<>
<div class="wrapper">
        <div class="logo">
            <img src="https://pbs.twimg.com/profile_images/1484629743529988096/awgt9WKv_400x400.jpg" alt="" />
        </div>
        <div class="text-center mt-4 name">
            Experts EX
        </div>
        <form class="p-3 mt-3" onSubmit={handleSubmit}>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="name" onChange={(e) =>setName(e.target.value)}  placeholder="Username" />
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" onChange={(e) =>setPassowrd(e.target.value)} placeholder="Password" />
            </div>
            <button class="btn mt-3">Register</button>
        </form>
        
    </div>
</>
  );
};
