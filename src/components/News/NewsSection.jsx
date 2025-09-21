import React from "react";
import { ArrowRight } from "lucide-react";

// Import all your images here
import news1 from "../../assets/Newsimages/news1.jpg";
import news2 from "../../assets/Newsimages/news2.jpg";
import news3 from "../../assets/Newsimages/news3.png";
import news4 from "../../assets/Newsimages/news4.png";
import news5 from "../../assets/Newsimages/news1.jpg";
import news6 from "../../assets/Newsimages/news6.png";
import news7 from "../../assets/Newsimages/news7.png";
import news8 from "../../assets/Newsimages/news8.png";
import news9 from "../../assets/Newsimages/news9.png";
import news10 from "../../assets/Newsimages/news5.png";
import { Button, TitleHeading } from "../UI";

const NewsSection = () => {
  const newsData = [
    { id: 1, image: news1 },
    { id: 2, image: news2 },
    { id: 3, image: news3 },
    { id: 4, image: news4 },
    { id: 5, image: news5 },
    { id: 6, image: news6 },
    { id: 7, image: news7 },
    { id: 8, image: news8 },
    { id: 9, image: news9 },
  ];

  return (
    <section className="w-full bg-white py-14 pb-28 lg:pb-20">
      {/* Heading */}
      <TitleHeading tagline="Our News" heading="Today’s Top Stories" />

      {/* News Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border-gradients  
                       transition-all duration-300  overflow-hidden"
          >
            <div
              className="bg-white h-full flex flex-col relative overflow-hidden 
                         transition-all duration-300 bg-gradient"
            >
              {/* News Image */}
              <div className="relative p-5">
                <img
                  src={item.image}
                  alt="news"
                  className="w-full h-60 object-cover rounded-xl overflow-hidden"
                />
                {/* Date Badge */}
                <span
                  className="absolute top-8 left-5 
             bg-gradients text-white text-xs md:text-sm font-semibold 
             px-3 py-1 rounded-e-full 
             transition-all duration-300 
             group-hover:!bg-white group-hover:!text-green"
                >
                  Sep 2017
                </span>
              </div>

              {/* Card Content */}
              <div className="relative flex flex-col justify-between flex-grow p-5">
                {/* Background faint G */}
                <span className="absolute text-[150px] font-extrabold text-gray-100 opacity-20 -right-0 -bottom-10 pointer-events-none select-none">
                  G
                </span>

                <div>
                  <h3
                    className="text-lg md:text-xl font-bold text-blacks mb-2 
                               transition-colors duration-300 group-hover:!text-white"
                  >
                    Star IPF Joint Kolkata Regional Meet
                  </h3>
                  <p
                    className="text-grays text-sm md:text-base leading-relaxed line-clamp-3 
                               transition-colors duration-300 group-hover:!text-white"
                  >
                    Joint Kolkata Regional Meet On Rotomoulding. GreenAge
                    Industries Continued Its Strong Supporter Role With A Second
                    Successive Meet Sponsorship As Well As An Important
                    Presentation By Mr. Ravi Kadiwar.
                  </p>
                </div>

                {/* Read More Button */}
                <div
                  className="mt-4 flex items-center justify-between gap-2 text-green font-medium 
                             transition-colors duration-300 group-hover:text-white border-t-2 pt-2"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center my-10">
        <Button text="Load More" />
      </div>
    </section>
  );
};

export default NewsSection;
