import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecommends = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <SectionTitle
        heading="CHEF RECOMMENDS"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              className="object-cover w-full h-80"
              src="https://i.ibb.co/8YGytyy/slide1.jpg"
              alt="ui/ux review check"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Caeser Salad
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets..
            </p>
          </div>
          <div className="grid justify-center mb-3">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              className="object-cover w-full h-80"
              src="https://i.ibb.co/8YGytyy/slide1.jpg"
              alt="ui/ux review check"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Caeser Salad
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets..
            </p>
          </div>
          <div className="grid justify-center mb-3">
            <button className="btn">Add to cart</button>
          </div>
        </div>
        <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              className="object-cover w-full h-80"
              src="https://i.ibb.co/8YGytyy/slide1.jpg"
              alt="ui/ux review check"
            />
          </div>
          <div className="p-6 text-center">
            <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Caeser Salad
            </h4>
            <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets..
            </p>
          </div>
          <div className="grid justify-center mb-3">
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommends;
