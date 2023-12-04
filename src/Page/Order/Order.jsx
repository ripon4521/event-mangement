import Discoount from "./Discoount";
import OrderCard from "./OrderCard";
import {  useEffect, useState } from "react";


const Order = () => {
    const [itemEven , setItemEven]=useState([])
    // const {user} = useContext(AuthContext);
    useEffect(()=>{
      const even = JSON.parse(localStorage.getItem('user'));
      if (even) {
  setItemEven(even);
      }
    },[])
    console.log(itemEven.length);

    return (
        
 
  <div>
           <h1 className="text-4xl font-bold mt-24">Your Orderd Crat</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4  "> 

<div className="col-span-3 mt-10 p-5">
{
         itemEven.map(item =><OrderCard item={item} key={item.id}></OrderCard>)
     }
</div>

<div className="lg:mt-20">

<Discoount itemEven={itemEven}></Discoount>

</div>
</div>
  </div>
    );
};

export default Order;
// import React from 'react';

// const Order = () => {
//   return (
//     <div>
//       <h1>order</h1>
//     </div>
//   );
// };

// export default Order;