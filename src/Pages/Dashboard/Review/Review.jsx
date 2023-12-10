import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosOpen from "../../../Hooks/useAxiosOpen";
// import Swal from "sweetalert2";

const Review = () => {
  const axiosPublic = useAxiosOpen();
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const rating = form.rating.value;
    const details = form.details.value;

    const myProducts = {
      name,
      rating,
      details,
    };
    console.log(myProducts);

    axiosPublic.post("/reviews", myProducts).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Book Added Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Payment History</title>
      </Helmet>
      <SectionTitle
        subHeading={"Talk Something"}
        heading={"Add Your Review"}
      ></SectionTitle>

      <form onSubmit={handleAddProduct}>
        <div className="md:flex mb-8">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold"> Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
            <label className="label">
              <span className="label-text font-semibold">Product Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Food Review"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Review"
          className="btn btn-block font-bold bg-blue-200"
        />
      </form>
    </div>
  );
};

export default Review;
