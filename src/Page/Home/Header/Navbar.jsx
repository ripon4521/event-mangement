import { Link } from "react-router-dom";
import userImg from "../../../assets/user.png"
import { AuthContext } from "../../../Auth/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineShoppingCart} from 'react-icons/ai';



const Navbar =()=>{

const [item , setItem]=useState([])
const {user, logOut} = useContext(AuthContext);
useEffect(()=>{
  const evens = JSON.parse(localStorage.getItem('user'));
  if (evens) {
setItem(evens);
  }
},[])

// console.log(user);

const ListItem = <>
  <div className="flex items-center lg:flex-row flex-col font-semibold">
  <li><Link to="/">Home</Link></li>
 
    
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
    <li><Link to="/feauters">Feauters</Link></li>
    <li><Link to="/team">Teams</Link></li>
  {
  user &&   <li><Link to="/profile">Profile</Link></li>
  }
    <li><Link to="/order"><div className="indicator">
        <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
        <span className="badge bg-slate-500 text-white badge-sm indicator-item">{item.length}</span>
      </div></Link></li>
  </div>
    
</>

const hnadlelogOut = () =>{
  logOut()
  .then (result =>{
  toast.success("Logout Succesfull")
  })
  .catch(error => {
    
  })

}


return (
  <div>
  <div className="navbar ">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {ListItem}
    </ul>
  </div>
  <a className="btn btn-ghost normal-case text-2xl">Event<span className="text-4xl text-red-600">X</span></a>
</div>
<div className="navbar-center hidden  lg:flex">
  <ul className="menu menu-horizontal px-1">
    {ListItem}
  </ul>
</div>


  <div className="navbar-end">

  

<div>
{
    user ? <div className="flex gap-4 items-center">

<div>
    {
      user ? <img className="w-12 rounded-full" src={user.photoURL? user.photoURL : userImg} alt="" /> : <img className="w-10 mr-5" src={userImg} alt="" />
    }
  </div>

      <form onSubmit={hnadlelogOut} ><button to="/" className="  px-3 rounded font-semibold cursor-pointer py-2 bg-blue-600 text-white">Logout</button></form>
    </div>: <div>
      
  <Link to="/login" className="mr-5 font-bold cursor-pointer">LogIn</Link>
  <Link to="/signUp" className=" px-3 rounded font-semibold cursor-pointer py-2 bg-blue-600 text-white">SignUp</Link>
      </div>
  }
</div>
</div>



</div>
<ToastContainer></ToastContainer>
  </div>
);
};

export default Navbar;