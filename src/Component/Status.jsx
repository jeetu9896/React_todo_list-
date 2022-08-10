export const Status = ({btndata, handleupdate}) =>{
  
  return <>
  {
    btndata?
    <button onClick={handleupdate}> Not Compelete</button> 
    : 
    <button onClick={handleupdate}>Compelete</button>
  }
  </>
}
