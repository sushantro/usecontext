import React, { useContext } from "react"
import { Productcontext } from "../Global/Productcontext"




const Product=()=>{
    const data=useContext(Productcontext)
    console.log(data);
return(
    <>
    <h1>the is sushant</h1>
    </>

)
}
export default Product