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
    { id: 10, image: news10 },
  ];

  return (
    <section className="w-full bg-white px-6 lg:px-16 py-14">
      {/* Heading */}
      <TitleHeading tagline="Our News" heading="Today’s Top Stories" />

      {/* News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl p-[2px] bg-gradient-to-b from-[#83BF2D] to-[#00A3AF] shadow-lg"
          >
            <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
              <img
                src={item.image}
                alt="news"
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <p className="text-sm text-gray-400 mb-1">Sep 2017 | Kolkata</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Star IPF Joint Kolkata Regional Meet
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Joint Kolkata Regional Meet On Rotomoulding. GreenAge Industries
                  Continued Its Strong Supporter Role With A Second Successive
                  Meet Sponsorship As Well As An Important Presentation By Mr. Ravi
                  Kadiwar.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center my-10">
        {/* <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#83BF2D] to-[#00A3AF] text-white font-semibold shadow-md hover:opacity-90 transition">
          Load More <ArrowRight size={18} />
        </button> */}
        <Button text="Load More" />
      </div>
    </section>
  );
};

export default NewsSection;
