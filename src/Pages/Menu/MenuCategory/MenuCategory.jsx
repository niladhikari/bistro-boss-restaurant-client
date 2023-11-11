/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img, height }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} height={height}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16 max-w-7xl mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4 mb-10">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
