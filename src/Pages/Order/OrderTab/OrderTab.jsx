/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;

  // Function to chunk the items array into groups of specified size
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
  };

  // Chunk the items array into groups of 6
  const paginatedItems = chunkArray(items, itemsPerPage);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        {paginatedItems.map((pageItems, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="grid md:grid-cols-3 gap-10 pb-20">
              {pageItems.map((item) => (
                <FoodCard key={item._id} item={item}></FoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
