import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Features = () => {
    useEffect(()=>{
        Aos.init( {duration:"-10", delay:"-10"})
      }, [])
    return (
        <div data-aos = "fade-up">
            
<section class="bg-[#f7f6f2]">

  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

    <div class="mx-auto max-w-3xl text-center">
      <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">Make every step user-centric</h2>
      <div class="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
        <p class="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

      <div data-aos="zoom-in" class="grid grid-cols-1 gap-6 rounded-xl bg-[#f7f6f2] shadow-md  p-8 md:p-10">
        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a287_Circle%20Image.svg" alt="Features Icon" class="inline-block h-16" />
        <p class="text-xl font-semibold">Entertainment</p>
        <p class="text-sm text-[#636262]">Social events often include various forms of entertainment, such as live music, DJs, dancers, or performers. Entertainment adds excitement and keeps guests engaged throughout the event. The choice of entertainment should align with the event's purpose and the preferences of the attendees.</p>
      </div>

      <div data-aos="zoom-in" class="grid grid-cols-1 gap-6 rounded-xl bg-[#f7f6f2] shadow-md p-8 md:p-10">
        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a285_Circle%20Image-1.svg" alt="Features Icon" class="inline-block h-16" />
        <p class="text-xl font-semibold">Theme and Decor</p>
        <p class="text-sm text-[#636262]"> A well-chosen theme can set the tone for the entire event. The decor should reflect this theme, creating a cohesive and visually appealing atmosphere. Whether it's a glamorous Hollywood theme or a rustic country vibe, the decor is a central feature of any social event.</p>
      </div>
      <div data-aos="zoom-in" class="grid grid-cols-1 gap-6 rounded-xl bg-[#f7f6f2] shadow-md  p-8 md:p-10">
        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a286_Circle%20Image-2.svg" alt="Features Icon" class="inline-block h-16" />
        <p class="text-xl font-semibold">Interactive Activities</p>
        <p class="text-sm text-[#636262]">Social events can benefit from interactive activities like photo booths, games, or themed contests. These activities encourage mingling among guests, break the ice, and provide memorable moments for everyone to enjoy.</p>
      </div>
      <div data-aos="zoom-in"  class="grid grid-cols-1 gap-6 rounded-xl bg-[#f7f6f2] shadow-md  p-8 md:p-10">
        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a283_Circle%20Image-3.svg" alt="Features Icon" class="inline-block h-16" />
        <p class="text-xl font-semibold">Networking Opportunities</p>
        <p class="text-sm text-[#636262]"> For many social events, especially those in a professional context, networking is a crucial feature. Providing spaces or designated times for attendees to connect and exchange information can greatly enhance the event's value.</p>
      </div>
      <div data-aos="zoom-in" class="grid grid-cols-1 gap-6 rounded-xl bg-[#f7f6f2] shadow-md  p-8 md:p-10">
        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a284_Circle%20Image-4.svg" alt="Features Icon" class="inline-block h-16" />
        <p class="text-xl font-semibold">Food and Beverage</p>
        <p class="text-sm text-[#636262]">Delicious food and beverages are a must at social events. Whether it's a gourmet dinner, buffet, or a selection of hors d'oeuvres and cocktails, the culinary experience is a significant feature that guests remember. Catering should accommodate various dietary preferences and restrictions.</p>
      </div>
      <div data-aos="zoom-in" class="grid grid-cols-1 gap-6 rounded-xl bg-[#f7f6f2] shadow-md  p-8 md:p-10">
        <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a288_Circle%20Image-5.svg" alt="Features Icon" class="inline-block h-16" />
        <p class="text-xl font-semibold">Customization and Personalization</p>
        <p class="text-sm text-[#636262]">Tailoring the event to the preferences and needs of the attendees is vital. This includes personalized invitations, seating arrangements, and even customizable elements within the event itself. Attendees appreciate when an event feels uniquely designed for them.</p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Features;