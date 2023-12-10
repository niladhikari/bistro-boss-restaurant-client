import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto  featured-item bg-fixed  text-white pt-8 my-20">
        <SectionTitle
          subHeading="check it out"
          heading="Featured Item"
        ></SectionTitle>
        <div className=" md:flex justify-center items-center   pb-20 pt-12 lg:px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Dec 20, 2023</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
            Chocolate is a popular and beloved food derived from the cacao bean, historically cherished for its rich, indulgent flavor. It has been consumed for centuries, initially by ancient civilizations like the Mayans and Aztecs who utilized cacao beans to create a bitter, frothy drink. Over time, chocolate evolved into various forms and flavors enjoyed worldwide
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
