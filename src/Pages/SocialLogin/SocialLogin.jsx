import { FaGoogle } from "react-icons/fa";
import useAxiosOpen from "../../Hooks/useAxiosOpen";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const { SignInGoogle } = useAuth();
    const axiosPublic = useAxiosOpen();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        SignInGoogle()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
    }
  return (
    <div>
      <div className="p-4 space-y-3 mb-7 text-center grid w-96 m-auto">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline  text-blue-600 "
        >
          <FaGoogle></FaGoogle>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
