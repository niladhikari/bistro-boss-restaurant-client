import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-wheat.vercel.app/'
})

const useAxiosOpen = () => {
    return axiosSecure;
};

export default useAxiosOpen;