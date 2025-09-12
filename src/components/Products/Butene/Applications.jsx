import React from "react";
import TitleHeading from "../../UI/TitleHeading";
import { ApplicationCard } from "../../UI";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Applications = ({ heading, tagline, applications }) => {
  const isTwoItems = applications.length === 2;

  return (
    <div className="w-full mx-auto py-12">
      {/* Top Heading */}
      <TitleHeading tagline={tagline} heading={heading} />

      {isTwoItems ? (
        // ✅ If only 2 items → Justify center, no slider
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {applications.map((item, index) => (
            <ApplicationCard key={index} img={item.img} title={item.title} />
          ))}
        </div>
      ) : (
        // ✅ Otherwise → Show Swiper
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-10"
          >
            {applications.map((item, index) => (
              <SwiperSlide key={index}>
                <ApplicationCard img={item.img} title={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination below slider */}
          <div className="custom-pagination flex justify-center mt-6"></div>
        </div>
      )}
    </div>
  );
};

export default Applications;
