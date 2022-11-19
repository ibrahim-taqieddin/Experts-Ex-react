import React from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

export  const LogIn = ({setRemove,remove}) => {
  const navigate = useNavigate();
   const [email, setEmail] = React.useState("");
   const [password, setPassowrd] = React.useState("");

const handleSubmit = (e) => {
  e.preventDefault();
const loggedUser = JSON.parse( localStorage.getItem("user"));
if (email === loggedUser.email && 
  password === loggedUser.password) {
    localStorage.setItem("Loggedin", true);
    setRemove(!remove);
    navigate("/");
}else{
  alert(" Wrong email or password");
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
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />

            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" onChange={(e) =>setPassowrd(e.target.value)} placeholder="Password" />

            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
           <a href="/SignUp">Sign up</a>
        </div>
    </div>
    
    </>
  )
}

