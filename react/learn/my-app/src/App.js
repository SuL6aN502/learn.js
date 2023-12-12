import React, { useEffect, useState } from "react";
import Name from "./components/Name";
export default function App() {
 const [data ,setdata] = useState([])

 const sultanshow = data.map((el ,index)=> <Name name={el} key={index}/>)

useEffect(()=>{
  fetch('https://api.imgflip.com/get_memes')
  .then((res) => res.json())
  .then((api) => setdata(api.data.memes.map((itmes) => itmes.name)))
} ,[])
  return (
  <div>
    {sultanshow}
  </div>
  );
}
