import TodoInput from "./Todoinput"
import TodoButton from "./TodoButton"
import { useState } from "react"
import Printdata from "./Printdata"

const Todolist = () => {
  const [inputdata,setinputdata] = useState("")
 const [data,setdata] = useState([])

 const handleChange = (e) =>{
  
   let temp =e.target.value

    setinputdata(temp)
}
console.log(inputdata)
const handleSubmit = () => {
if (inputdata.trim().length !==0){
  setdata([...data,inputdata])

}
else{
  alert("Enter your Task")
}
  
}

  return <> 
  <h1>Enter Your Todo Below </h1>
  <TodoInput data ={data} handleChange={handleChange} />
  <TodoButton handleSubmit={handleSubmit} />
  <Printdata data={data}/>
  </>
}
export default  Todolist;