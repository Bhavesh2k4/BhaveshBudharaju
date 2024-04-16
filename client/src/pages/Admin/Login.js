import React from 'react'
import {useDispatch} from "react-redux";
import axios from "axios";
import {message} from "antd";
import { hideLoading,showLoading } from '../../redux/rootSlice';

function Login() {
const [user,setUser]=React.useState({
    username:"",
    password:"",
})
const dispatch=useDispatch();
const login=async()=>{
    try{
        dispatch(showLoading());
        const response=await axios.post("https://bhavesh-portfolio-backend.vercel.app/api/portfolio/login",user);
        dispatch(hideLoading());
            if(response.data.success){
                message.success(response.data.message);
                localStorage.setItem("token",JSON.stringify(response.data));
                window.location.href="https://bhavesh-portfolio-backend.vercel.app/admin";
            }
            else{
                message.error(response.data.message);
            }
        }
    catch(error){
        message.error(error.message);
        dispatch(hideLoading());
    }
}
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-blue-700'>
  <div className='w-96 p-8 shadow-lg rounded-lg bg-white'>
    <h1 className='text-3xl text-blue-700 mb-4 text-center'>Bhav Login - Admin</h1>
    <hr className="mb-6" />
    <input 
      type="text" 
      placeholder="Username (hint: Github)" 
      className="border border-gray-300 bg-gray-100 px-4 py-2 rounded-md mb-4 w-full focus:outline-none"
      value={user.username} 
      onChange={(e) => setUser({ ...user, username: e.target.value })}
    />
    <input 
      type="password" 
      placeholder="Password (hint: EDM Artist)"
      className="border border-gray-300 bg-gray-100 px-4 py-2 rounded-md mb-6 w-full focus:outline-none"
      value={user.password} 
      onChange={(e) => setUser({ ...user, password: e.target.value })}
    />
    <button 
      className='bg-blue-500 text-white py-2 rounded-md w-full hover:bg-blue-600 focus:outline-none'
      onClick={login}
    >
      Login
    </button>
  </div>
</div>

  )
}

export default Login