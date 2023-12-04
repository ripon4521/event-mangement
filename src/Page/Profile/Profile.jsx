import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import userImg from "../../assets/user.png"


const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <img className="mt-20 w-[800px] h-[200px] mx-auto rounded          " src="https://images.unsplash.com/photo-1542368474-d159a29c66af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />

            <div className="avatar ml-32 md:ml-[280px] lg:ml-[670px]  -mt-[100px]">
  <div className="w-48 border-8 rounded-full">
    {
        user ? <img src={user.photoURL? user?.photoURL : userImg}  alt="" /> : <img  src={userImg} alt="" />
    }
  </div>

</div>
{
    user?.displayName? <h1 className="text-center mt-2 text-2xl font-semibold">{user?.displayName}</h1>:<h1 className="text-center mt-2 text-2xl font-semibold">Nick Furry Rahman</h1>
        
       
}
<h1 className="text-center mt-2 text-xl font-semibold">Farmer</h1>
<h1 className="text-center mt-2 text-xl font-semibold">Email:{user?.email}</h1>
<h1 className="text-center mt-2 text-xl font-semibold">Uid:{user?.uid}</h1>
            
        </div>
    );
};

export default Profile;