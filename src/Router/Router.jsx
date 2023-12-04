import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Details from "../Page/Details/Details";
import Contact from "../Page/Contact/Contact";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import PrivateRoute from "../Private/PrivateRoute";
import Profile from "../Page/Profile/Profile";
import Error from "../Error/Error";
import Faq from "../Page/Faq/Faq";
import Features from "../Page/Features/Features";
import EventCards from "../Page/EventsCards/EventCards";
import Teams from "../Page/Teams/Teams";
import Support from "../Page/Support/Support";
import Order from "../Page/Order/Order";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[{
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/events.json')
    }
,{
    path:"/order",
    element:<PrivateRoute><Order></Order></PrivateRoute>
},{
  path:"/order/:id",
  element:<PrivateRoute><Details></Details></PrivateRoute>,
  loader:()=>fetch('/events.json')

},{
  path:"/contact",
  element:<Contact></Contact>
},{
  path:"/login",
  element:<Login></Login>
},
{
  path:"/signUp",
  element:<SignUp></SignUp>
},{
  path:"/profile",
  element:<Profile></Profile>
},{
  path:"/faq",
  element:<Faq></Faq>
},{
  path:"/feauters",
  element:<Features></Features>
},{
  path:"/team",
  element:<Teams></Teams>
},{
  path:"/support",
  element:<Support></Support>
} 
]
  },
]);
export default router;
