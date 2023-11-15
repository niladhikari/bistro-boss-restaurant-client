import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
    const axios = useAxios();
    const { data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('/users');
            return res.data;
        }
    })
  return (
    <div>
      <SectionTitle
        subHeading={"How Many ???"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <div>
        <h2 className="text-3xl font-semibold">Total Users : {users.length}</h2>
      </div>
      <div className="overflow-x-auto mt-8 rounded-xl ">
        <table className="table bg-yellow-100">
          {/* head */}
          <thead>
            <tr className="bg-orange-300 m-10">
              <th></th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th>
                  <button
                   className="btn btn-ghost btn-xs bg-orange-300">
                    <FaUsers></FaUsers>
                  </button>
                </th>
                <th>
                  <button
                   
                   className="btn btn-ghost btn-xs bg-red-600">
                    <RiDeleteBin5Line></RiDeleteBin5Line>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
