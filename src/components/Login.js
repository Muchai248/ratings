import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Login(){
const[newuser, setNewUser]=useState({
    "name":"",
    "password":"",
    "id":""
})

const handleSubmit=()=>{
    alert("Submited");
    fetch("http://localhost:3000/Users",{
        method: 'POST',
        header:{
            'Content-Type': 'Application/json', 
        },
        body: JSON.stringify(newuser),
    })
    .then((r)=>r.json())
    .then((newuser)=>{
        setNewUser(newuser)
    });
}



// const newData = {};
// console.log(formData)
// fetch('http://localhost:8001/transactions', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'Application/json',
//   },
//   body: JSON.stringify(formData),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     setTransactions([...transaction,formData])

//   })
//   .catch((error) => {
//     console.error('Error:', error);

// })

    const navigate=useNavigate()
    const navigateToHome=()=>{
        navigate("/")
    }
    return(
        <>
        <form>
     <div className="input-group">
    <span className="input-group-text">@</span>
    <input type="text" className="form-control" placeholder="Username"/>
    </div>
        <div className="mb-3 mt-3">
          <label for="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
        </div>
        <div className="mb-3">
          <label for="pwd" className="form-label">Password:</label>
          <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember"/> Remember me
          </label>
        </div>
        <button onClick={navigateToHome} onSubmit={handleSubmit}type="submit" className="btn btn-primary">Submit</button>
      </form>
      </>
    )
}




<BrowserRouter>
</BrowserRouter>