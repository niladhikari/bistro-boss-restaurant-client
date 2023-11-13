import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useCarts = () => {
    const axios = useAxios();
    const {user} = useAuth();
    const { refetch,data : cart = [] } = useQuery({
        queryKey: ['cart',user?.email], 
        queryFn: async()=>{
            const res = await axios.get(`/carts?email=${user.email}`)
            return res.data;
        }
    })

    return [cart,refetch]
};

export default useCarts;