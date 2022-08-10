// import Lsitdata from "./Lsitdata"
import Lsitdata from "./Lsitdata"

const Printdata = ({data}) => {
  return <> 
  {
    data.map((item,index)=> (
      <Lsitdata key={index} item ={ item} />
    ))
  }
  </>
}
export default Printdata;