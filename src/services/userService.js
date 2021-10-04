import axios from "axios";
import http from './httpService';


export const registerUser=user=>{
   return axios.post(
       "https://toplearnapi.ghorbany.dev/api/register",
       JSON.stringify(user),
       {
           headers: {
               "Content-Type": "application/json"
           }
       }
   )
};

export const loginUser=user=>{
    return http.post(
        "https://toplearnapi.ghorbany.dev/api/login",
        JSON.stringify(user)
    )
 };