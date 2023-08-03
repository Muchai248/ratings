import React from "react";
import {useNavigate} from "react-router-dom";

export default function(){
    const navigate=useNavigate()
    

    const navigateToLogin=()=>{
        navigate("/login")


        
    }
    return(
        <>
        <div>
            <h1>Home</h1>
            <button onClick={navigateToLogin}>Login</button>
            
        </div>
        </>
    )
}


