import React from 'react';
import  { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';

const Faq = () => {
    useEffect(()=>{
        Aos.init( {duration:"-10", delay:"-10"})
      }, [])
    return (
        <div data-aos ="fade-up">
            
<section class="block">
  <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-5xl px-5 md:px-10">
    <div class="text-center mb-8 md:mb-12 lg:mb-16">
      <p class="text-sm font-bold uppercase text-[#276ef1]">FAQS</p>
      <h2 class="font-bold text-3xl md:text-5xl">Frequently Asked</h2>
      <div class="mx-auto mt-4 max-w-[528px]">
        <p class="text-[#647084]">Here are Four frequently asked questions (FAQs) for social events</p>
      </div>
    </div>


    <div data-aos="zoom-in" class="mb-8 md:mb-12 lg:mb-16">
      <div class="mb-6 border p-8 [border-bottom-style:solid] rounded-sm">
      <div tabIndex={0} className="collapse collapse-arrow ">
  <div className="collapse-title text-xl font-medium">
  Can I bring a plus-one to the event?
  </div>
  <div className="collapse-content"> 
  <p class="">Typically, invitations for our social events specify whether they are for single attendees or if guests are allowed to bring a plus-one. Please check your invitation or event details for this information. If the invitation does not mention it, feel free to reach out to the event organizer for clarification.</p>
  </div>
</div>
        <div class="overflow-hidden mb-4">
         
        </div>
      </div>


      <div data-aos="zoom-in" class="mb-6 border p-8 [border-bottom-style:solid] rounded-sm">
      <div tabIndex={0} className="collapse collapse-arrow ">
  <div className="collapse-title text-xl font-medium">
  What is the dress code for the event?
  </div>
  <div className="collapse-content"> 
  <p class=""> The dress code can vary depending on the type and theme of the event. For formal events, like galas or black-tie dinners, formal attire such as suits and evening gowns is usually expected. Casual events might have a more relaxed dress code, such as business casual or even themed costumes. Always check the event invitation or contact the organizer for specific dress code guidelines.</p>
  </div>
</div>
      </div>


      <div data-aos="zoom-in"  class="mb-6 border p-8 [border-bottom-style:solid] rounded-sm">
      <div tabIndex={0} className="collapse collapse-arrow ">
  <div className="collapse-title text-xl font-medium">
  Can I request dietary accommodations for special dietary needs or restrictions?
  </div>
  <div className="collapse-content"> 
  <p class=""> Yes, we strive to accommodate dietary needs and restrictions to ensure all guests can enjoy the event comfortably. When you RSVP or purchase your ticket, please make sure to indicate any dietary preferences or allergies you have. Our catering team will do their best to provide suitable options. If you have specific concerns or unique dietary requirements, we recommend reaching out to the event organizer in advance to discuss your needs and ensure a seamless dining experience. Your satisfaction is important to us, and we want to make sure you can fully enjoy the culinary offerings at our event.</p>
  </div>
</div>

      </div>

      <div data-aos="zoom-in" class="mb-6 border p-8 [border-bottom-style:solid] rounded-sm">
      <div tabIndex={0} className="collapse collapse-arrow ">
  <div className="collapse-title text-xl font-medium">
  Is there parking available at the venue?
  </div>
  <div className="collapse-content"> 
  <p class=""> Parking arrangements vary from event to event. Some venues offer ample parking on-site, while others may require you to find street parking or use nearby parking lots. We recommend checking the event details or contacting the event organizer ahead of time to inquire about parking options and any associated costs. Additionally, consider carpooling or using rideshare services if parking is limited.</p>
  </div>
</div>
      </div>




    </div>
    <p class="text-center">Can’t find the answer you’re looking for? Reach out to our coustomer , <Link to="/support" class="text-red-600"> support team</Link>.</p>
  </div>
</section>
        </div>
    );
};

export default Faq;