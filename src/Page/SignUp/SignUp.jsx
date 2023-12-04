import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Auth/AuthProvider";




const SignUp = () => {
  const location = useLocation();
  const nvaigate = useNavigate();

    const {sighnUp}=useContext(AuthContext);
    const handleSubmit=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        sighnUp(email,password)
        .then(result=>{
            console.log(result);
            nvaigate(location?.state? location.state : "/")
     toast.success("Succesfuly Created your Acoount.")
   
        })
        .catch(error =>{
     
            toast.warning("Already created your Account.")
      
        })

}


    return (
        <div>
              <div>

            <div className="hero min-h-screen ">
  <div className="hero-content flex-col w-full">
    <div className=" text-center">
      <h1 className="text-5xl font-bold">Register Now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text"
          name="name" 
          placeholder="Your Name"
           className="input input-bordered"
            required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <h1 className="mb-5 font-semibold ">Already You have an account ? <Link to="/login" className="text-sky-600 cursor-pointer">Login</Link></h1>
    
         
          <button  className="px-2 py-3 bg-sky-500 text-white font-semibold text-center text-xl rounded">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default SignUp;