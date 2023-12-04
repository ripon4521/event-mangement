



const OrderCard = ({item}) => {
 

    return (
        <div>
    
      
            <div className=" flex flex-col mt-5 md:flex-row lg:flex-row md:gap-3 lg:gap-10 col-span-3">
            <div>
                <img className="w-[400px] h-[300px]" src={item.img} alt="" />
                
            </div>
            {/* Content */}
            <div>
                <h1 className="text-2xl font-bold mb-2"> {item.title}</h1>
                <p className="w-[320px] text-xl mb-2 ">{item.description}</p>
                <p className="text-xl font-semibold mt-5">Date: 7 oct 2023</p>
                <p className="text-xl text-green-500 mt-1">Order Placed</p>

                <div className="flex gap-4 mt-5">
                    <button className="btn btn-info btn-outline">Edit</button>
                    <button className="btn btn-warning btn-outline">Remove</button>
                </div>

            </div>
            <div className="ml-5">
        <h1 className="text-2xl font-semibold text-gray-500">Each </h1>
        <p className="text-xl font-semibold my-5">${item.price} </p>
            </div>
            <div>
        <h1 className="text-2xl font-bold ml-10">Pakage</h1>
                <div className="mr-64 lg:mr-0 md:mr-0">
             <div className="flex  items-center gap-2 justify-center mt-3">
      <input className="checkbox-warning checkbox" type="checkbox" name="" id="" />
             <h1 className="text-xl font-semibold text-cyan-500">Diamon</h1>
             </div>
             <div className="flex items-center gap-2 justify-center mt-3">
      <input className="checkbox-warning checkbox" type="checkbox" name="" id="" />
             <h1 className="text-xl font-semibold text-yellow-400">Golden</h1>
             </div>
             <div className="flex items-center gap-5 justify-center mt-3">
      <input className="checkbox-warning checkbox" type="checkbox" name="" id="" />
             <h1 className="text-xl font-semibold text-slate-500">Silver</h1>
             </div>

                </div>
            </div>
            </div>



        
      </div>
    );
};

export default OrderCard;