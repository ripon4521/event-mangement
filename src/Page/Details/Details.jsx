import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const [data , setData]=useState({})
   
const {id}=useParams();
const eventsData = useLoaderData();
console.log(eventsData);

useEffect(()=>{
   const findData =  eventsData.find(x =>x.id == id);
   console.log(findData);
        setData(findData)
},[id, eventsData])
console.log(data.length);



const handleDonatebtn =()=>{
    const addedDonationItem = [];
    const donationItem =JSON.parse(localStorage.getItem('user')) ;
    if (!donationItem) {
        addedDonationItem.push(data);
        localStorage.setItem('user',JSON.stringify(addedDonationItem));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Order added to Cart',
            showConfirmButton: false,
            timer: 1500
          })
    }
    else{
        const isExist = donationItem.find(item => item.id === data.id)
        if (!isExist) {
            addedDonationItem.push(...donationItem, data);
            localStorage.setItem('user',JSON.stringify(addedDonationItem))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your Order submit',
                showConfirmButton: false,
                timer: 1500
              })
          }
          else{
            Swal.fire({
              position: 'center',
              icon: 'warning',
              title: 'Already Order it item',
              showConfirmButton: false,
              timer: 1500
            })
            console.log("Third");
          }
         
          
    }
}


// console.log(id);
    return (
        <div className=' flex justify-center mx-auto h-[60vh] items-center '>
 
 <div class="  flex w-full max-w-[48rem] flex-row rounded-xl shadow-md  bg-clip-border text-gray-700 ">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl  rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={data.img}
      alt="image"
      class="h-full w-full "
    />
  </div>
  <div class="p-6">

    <h4 class="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {data.title}
    </h4>
    <p class=" mb-1 block text-base font-normal leading-relaxed text-gray-700 antialiased">
   {data.description}
    </p>
    <p className='text-xl mb-2 font-semibold'>{data.price}$</p>
    <a class="inline-block" href="#">
       
      <button onClick={handleDonatebtn }
        class="flex bg-pink-400 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all  active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Add To Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          class="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>





        </div>
    );
};

export default Details;