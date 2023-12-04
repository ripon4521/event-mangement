import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const {login,googleLogin}=useContext(AuthContext);
   
    const location = useLocation();
    console.log(location);
    const nvaigate = useNavigate();
    const handleLogin =(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

          if (!/[A-Z]/.test(password)) {
                
         toast.warning("Add one Upparcase Letter!")
         return
  
   }
   if (password.length < 6) {
    toast.warning("Added At last 8 charcters!")
    // alert("Added At last 8 charcters")
    return
   }
        
   if (!/[!@#$%^&*()_+]/.test(password)) {
    toast.warning("Added on special chracter!")
    // alert("on special charcter")
    return
   }
          else{
            login(email , password)
            .then(result => {
                toast.success("Login SuccesFull ")
                nvaigate(location?.state? location.state : "/")
            })
            .catch(error=> {
               
                    toast.warning("Invalid email and password")
            
            
          
            })
            return
          }
          

       
        
    }

    const sighninGoogle =()=>{
     
        googleLogin()
        .then ( result => {
          toast.success("Login SuccesFull ")
       
        })
        .catch (error=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col w-full">
    <div className=" text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
            <h1 className="mb-5 font-semibold ">Don't have an account? Please  <Link to="/signUp" className="text-sky-600 cursor-pointer">Register</Link></h1>
          <button className="px-2 py-3 bg-sky-500 text-white font-semibold text-center text-xl rounded">Login</button>
        </div>
        <div className="flex  justify-center gap-2 items-center">
            <h1 className="text-xl font-semibold">Login With </h1>
            <Link onClick={sighninGoogle}  ><FcGoogle className="text-4xl"></FcGoogle></Link>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;