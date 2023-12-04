import { useEffect, useState } from 'react';

const Discoount = ({itemEven}) => {
    // console.log(itemEven);
    console.log(typeof (itemEven.price));
    const [total, setTotal]=useState(0)
    useEffect(()=>{
      const total = itemEven.reduce((sum , e) =>parseInt(e.price) + sum,0);
      console.log(total);
      setTotal(total)
    },[itemEven])

    const hndleCoupn = ()=>{
        const coupounCode = document.getElementById('coupon')
        const couponValue = coupounCode.value;
      
    }
    
    return (
        <div>
            <div className="">
                    <h1 className='text-4xl font-bold'>Apply coupun to Get Discount</h1>

                    <div>
                <div className='flex items-center gap-4 mt-5'>
     
                <input id='coupon'  name='coupn' type="text" placeholder="Coupon code 'EVENTX' " className="input rounded-none input-bordered" />
                <button onClick={hndleCoupn} type='submit' className='btn btn-info rounded-none text-white '>Submit</button>
       
                </div>
                <div className='text-xl font-semibold my-5 '>
                <div className='flex justify-between mb-2'>
                 <h1>SubTotal </h1>
                     <p>${total}</p>
                 </div>
                <div className='flex justify-between mb-2'>
                    <h1>Shoping Cost (+)</h1>
                <p>$480</p>
                </div>
                    <div className='flex justify-between mb-2'>
                 <h1>Discount (-)</h1>
            <p>$120</p>
                </div>
            </div>
            <hr />

            <div className='mt-5 flex font-semibold text-xl justify-between'>
                <h1>Estaimate Total</h1>
                <p>$250</p>
            </div>
           <div className='mt-5'> 
           <button className='btn btn-info rounded-none text-white w-full'>Check Out</button>
           </div>
           <p className='font-roboto text-center mt-5'>You are <span className='text-red-500'> $11.00  </span> away from free shipping!</p>

                </div>
        </div>
    </div>
    );
};

export default Discoount;