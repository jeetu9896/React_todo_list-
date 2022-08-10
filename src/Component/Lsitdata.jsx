import React, { useState } from "react";
import { Status } from "./Status";
import './List.css'
const Lsitdata = ({item}) => {
  const [btndata,setbtndata] = useState(false)

  const handleupdate = () =>{
    setbtndata( !btndata)
  }
  console.log(btndata)
  return <> 
  <div id="taskitem">
  {
    btndata ? <h1 style={{color:"green"}}>{item}</h1> : <h1 style={{color:"red"}}>{item}</h1>
  }
  
  <Status btndata={btndata} handleupdate= {handleupdate} /> 
  </div>
  
  </>
  } 
  export default Lsitdata;