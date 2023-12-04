import  { useEffect } from 'react';
import Banner from './Banner/Banner';
import Aos from "aos";
import "aos/dist/aos.css"
import { useLoaderData } from 'react-router-dom';
import EventCards from '../EventsCards/EventCards';
import Contact from '../Contact/Contact';
import Teams from '../Teams/Teams';
import Testimoinals from '../Testimoinals/Testimoinals';
import Features from '../Features/Features';
import Faq from '../Faq/Faq';

const Home = () => {
    useEffect(()=>{
        Aos.init( {duration:"500", delay:"500"})
      }, [])
    const loader = useLoaderData();
    // console.log(loader);
    return (
        <div>
            <Banner></Banner>

                
      <div  data-aos="zoom-in-right" className='text-center font-roboto text-6xl font-bold mt-20'> 
           <span className='border-b-4 w-28 '>Our Services</span>
           
      </div>

   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-5 lg:ml-20 mt-24 '>
    {
        loader.map(load => <EventCards key={load.id} load={load}></EventCards>)
    }
   </div>

   <div className='mt-20'>
   <Contact></Contact>
   </div>

   <div className='mt-10'>
    <Teams></Teams>
   </div>
<div>
    <Testimoinals></Testimoinals>
</div>
<div>
    <Features></Features>
</div>

<div>
    <Faq></Faq>
</div>

        </div>
    );
};

export default Home;