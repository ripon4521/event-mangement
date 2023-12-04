import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";

  

const EventCards = ({load}) => {

    const {title,id,img,price,description}=load;
    // console.log(id);
  useEffect(()=>{
    Aos.init( {duration:"500", delay:"500"})
  }, [])
  return (
    <div className="font-roboto  ">

    
    <div  data-aos="zoom-in"   data-aos-easing="zoom-out" className="relative flex max-w-[24rem] flex-col rounded-xl bg-[#f7f6f2] bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img className="h-[300px]"
      src={img}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block hover:text-sky-500 f text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mt-3 block hover:text-sky-500  text-xl font-normal leading-relaxed text-gray-700 antialiased">
      {description}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
   <div>
    <Link to={`/order/${id}`} >
      <button  className="px-3 py-2 rounded hover:bg-sky-500 bg-blue-500 text-white font-semibold ">View Details</button>
    </Link>
   </div>
    <p className="block font-semibold text-base leading-relaxed text-inherit antialiased">$
    {price}
    </p>
  </div>
</div>


    </div>
  );
};

export default EventCards;


