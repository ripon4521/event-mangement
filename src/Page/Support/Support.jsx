
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {


    const submitToken=()=>{
   
    

        toast.success("Problem Submit SucessFull!")
      
    }

    return (
        <div>
            
<div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
  <div class="grid grid-cols-1 bg-[#f2f2f7] p-8 text-left max-[991px]:px-8 max-[767px]:justify-items-center sm:p-10 md:grid-cols-[1.5fr_1fr] md:p-16 gap-4">
    <div class="max-[767px]:text-center">
      <h3 class="mb-2 text-2xl font-bold max-[767px]:text-center md:text-3xl">Please tell your Question</h3>
      <div>
        <p class="max-w-md text-[#647084]">Tell any question and service reletd question!</p>
      </div>
    </div>
    <div class="w-full text-center max-[767px]:max-w-[400px] md:text-right">
      <div class="mx-auto mb-4 flex max-w-[640px] flex-col items-center justify-center">
   

<div className='flex items-center'>
<form  name="form" method="get" class="relative flex w-full max-w-full flex-row items-stretch max-[991px]:flex-col lg:items-start">
          <input  type="text" class="m-0  mr-6 block h-9 w-full bg-white px-6 py-7 align-middle text-sm text-[#333333] focus:border-[#3898ec]" maxlength="256" name="email-3" placeholder="Write your Problem" />
    
         
        </form>
        <Link onClick={submitToken} to="/" class="m-0 inline-block cursor-pointer bg-[#276ef1] px-6 py-3 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] max-[479px]:relative max-[479px]:right-0 max-[479px]:w-full">Submit</Link>
</div>

    
      </div>
      
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Support;