import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import galleryImage1 from "../../assets/images/galleryImage1.jpg";
import galleryImage2 from "../../assets/images/galleryImage2.jpg";
import galleryImage3 from "../../assets/images/galleryImage3.jpg";
import galleryImage4 from "../../assets/images/galleryImage4.png";
import galleryImage5 from "../../assets/images/galleryImage5.jpg";
import galleryImage6 from "../../assets/images/galleryImage6.jpg";
import SearchIcon from "../../assets/images/search.png";
import TitleHeading from "../UI/TitleHeading";
import { Button } from "../UI";

const galleryImages = [
  { id: 1, img: galleryImage1, alt: "Gallery Image 1" },
  { id: 2, img: galleryImage2, alt: "Gallery Image 2" },
  { id: 3, img: galleryImage3, alt: "Gallery Image 3" },
  { id: 4, img: galleryImage4, alt: "Gallery Image 4" },
  { id: 5, img: galleryImage5, alt: "Gallery Image 5" },
  { id: 6, img: galleryImage6, alt: "Gallery Image 6" },

];

const GallerySlider = () => {
  return (
    <section className="bg-white pt-16 ">
      <div className="mx-auto">
        {/* Section Title */}
        <TitleHeading tagline="Our Gallery" heading="Gallery Of Excellence" />

        {/* Gallery Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 }, // small screens
            1024: { slidesPerView: 3 }, // desktop
          }}
          className="mt-10"
        >
          {galleryImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative group overflow-hidden rounded-lg h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] cursor-pointer">
                {/* Gallery Image */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(131, 191, 45, 0.5) -53.23%, rgba(0, 163, 175, 0.5) 191.13%)",
                  }}
                >
                  {/* Search Icon */}
                  <div className="rounded-full p-2 sm:p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <img
                      src={SearchIcon}
                      alt="Search"
                      className="w-4 h-4 sm:w-8 sm:h-8"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View More Button */}
        <div className="my-8 sm:mt-10 flex justify-center text-center">
          <Button text="View More" className="text-center" />
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
