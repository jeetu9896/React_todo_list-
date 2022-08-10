const TodoInput =  (props) => {
  const {data,handleChange} = props
  return <> 
  <input placeholder="Enter New Task"  onChange={handleChange}/>
  </>
}

export default TodoInput;