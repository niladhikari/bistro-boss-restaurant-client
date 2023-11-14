import useCarts from "./../../../Hooks/useCarts";
import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const Cart = () => {
  const [cart,refetch] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axios = useAxios();

  const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {

          axios.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
}
  return (
    <div>
      <SectionTitle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE ?"}
      ></SectionTitle>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Item : {cart.length}</h2>
        <h2 className="text-3xl font-semibold">Total Price : {totalPrice}</h2>
        <button className="btn btn-primary bg-orange-300 text-white">
          Pay
        </button>
      </div>
      <div className="overflow-x-auto mt-8 rounded-xl ">
        <table className="table bg-yellow-100">
          {/* head */}
          <thead>
            <tr className="bg-orange-300 m-10">
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index+1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
