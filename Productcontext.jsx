// import React, { createContext, useState } from "react";


// export const Productcontext=createContext()

// const ProductcontextProvider=(props)=>{
//     const[Products,setProduct]=useState([
//         {id:1,name:"ssuha",age:25}
//     ])
//     return(
//         <>
//         <Productcontext.Provider value={{Products:[...Products]}} >
//         {props.children}
//         </Productcontext.Provider>
//         </>


//     )
// }
// export default ProductcontextProvider;

import React, { createContext, useState } from 'react';
export const Productcontext=createContext()
const ProductcontextProvider=(props)=>{
    const [Product,setProduct]=useState([
        {id:1,name:"sushant",age:25}
    ])
    return(
        <>
        <Productcontext.Provider value={{Products:[...Product]}}>
            {props.children}
        </Productcontext.Provider>

        </>

    )
}
export default ProductcontextProvider;