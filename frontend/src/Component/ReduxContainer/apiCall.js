import axios from "axios";
import {loginStart , loginSuccess , loginFailure , logout} from "./userReducer";

export const login = async(dispatch , user)=>{
          dispatch(loginStart());
          try {
                   const res = await axios.post("https://social-media-yvlz.onrender.com/api/user/login" , user);
                   dispatch(loginSuccess(res.data)); 
          } catch (error) {
                    dispatch(loginFailure());
                    alert("Wrong Credentials")
          } 
}

export const VerifyEmail = async(dispatch , user)=>{
          dispatch(loginStart());
          try {
                   const res = await axios.post("https://social-media-yvlz.onrender.com/api/user/verify/email" , user);
                   dispatch(loginSuccess(res.data)); 
          } catch (error) {
                    dispatch(loginFailure());
                    alert("Wrong Key")
          }
}


export const signup = async(dispatch , user)=>{
          dispatch(loginStart());
          try {
                   const res = await axios.post("https://social-media-yvlz.onrender.com/api/user/create/user" , user);
                   dispatch(loginSuccess(res.data)); 
          } catch (error) {
                    dispatch(loginFailure());
                    console.log(error)
                    alert("Error in Signup");
          }
}