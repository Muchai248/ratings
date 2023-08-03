import React, { useEffect, useState } from 'react';


export default function Houses(){
const [houses, setHouse]=useState([])
useEffect(()=>{
    fetch("http://localhost:3000/housing")
    .then((r)=>r.json())
    .then(houses=>{
        setHouse(houses)
    })
    console.log(houses)
})

// const housing=houses.map(houses=>{
//     return<card key={houses.id}></card>
// })
    return(
        <>
    <div className="card row-4 col-3">
    <img src="asset/swimhouse.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

        </>
    )
}