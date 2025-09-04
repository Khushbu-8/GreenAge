import React, { useState } from "react";
import BagImage1 from "../../assets/AboutUsimages/beg.png";
import BagImage2 from "../../assets/AboutUsimages/beg.png";
import BagImage3 from "../../assets/AboutUsimages/beg.png";
import BagImage4 from "../../assets/AboutUsimages/beg.png";
import Icon1 from "../../assets/AboutUsimages/Icon1.png";
import Icon2 from "../../assets/AboutUsimages/Icon2.png";
import Icon3 from "../../assets/AboutUsimages/Icon3.png";
import Icon4 from "../../assets/AboutUsimages/Icon4,png";
import TitleHeading from "../UI/TitleHeading";

const WhyGreenage = () => {
  const [currentBag, setCurrentBag] = useState(BagImage1);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto flex flex-col items-center text-center">
        {/* Section Title */}

        <TitleHeading tagline="Why Greenage?" heading="Why Greenage?" />

        {/* Bag & Features */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center relative w-full py-10 gap-8">
          {/* Bag Image */}
          <div className="flex justify-center mb-8 lg:mb-0">
            <img
              src={currentBag}
              alt="GreenAge Bag"
              className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[680px] lg:h-[430px] xl:w-[720px] transition-all duration-300"
            />
          </div>

          {/* Features for small screens (stacked) */}
          <div className="flex flex-col gap-6 lg:hidden">
            {/* Feature 1 */}
            <div
              onClick={() => setCurrentBag(BagImage1)}
              className="group cursor-pointer p-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:[background:linear-gradient(180deg,#83BF2D_-53.23%,#00A3AF_191.13%)]"
            >
              <div className="flex items-start gap-3 text-left">
                <img
                  src={Icon1}
                  alt="Low Investment"
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h6 className="font-semibold text-blacks group-hover:text-white">
                    Low Investment
                  </h6>
                  <p className="text-grays text-sm leading-relaxed group-hover:text-white">
                    It cuts down heavily on investment required for hi-tech
                    machines used for Granulation and Pulverising the powder.
                    This paves the way for budding entrepreneurs to venture in
                    rotomoulding in a cost effective manner with low manpower
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              onClick={() => setCurrentBag(BagImage2)}
              className="group cursor-pointer p-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:[background:linear-gradient(180deg,#83BF2D_-53.23%,#00A3AF_191.13%)]"
            >
              <div className="flex items-start gap-3 text-left">
                <img
                  src={Icon2}
                  alt="Low Pricing"
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h6 className="font-semibold text-blacks group-hover:text-white">
                    Low Pricing
                  </h6>
                  <p className="text-grays text-sm leading-relaxed group-hover:text-white">
                    We offer a lower price margin of Green Ethene Powder as we
                    procure it through large scale processing. This enables us
                    to leverage on costing, offering Quantity discounts from the
                    suppliers.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              onClick={() => setCurrentBag(BagImage3)}
              className="group cursor-pointer p-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:[background:linear-gradient(180deg,#83BF2D_-53.23%,#00A3AF_191.13%)]"
            >
              <div className="flex items-start gap-3 text-left">
                <img
                  src={Icon3}
                  alt="High Quality"
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h6 className="font-semibold text-blacks group-hover:text-white">
                    High Quality
                  </h6>
                  <p className="text-grays text-sm leading-relaxed group-hover:text-white">
                    We practise a no tolerance policy in terms of quality. All
                    our products pass stringent quality test following the norms
                    as per IS 12701: 1996 & IS 1014:2001.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div
              onClick={() => setCurrentBag(BagImage4)}
              className="group cursor-pointer p-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:[background:linear-gradient(180deg,#83BF2D_-53.23%,#00A3AF_191.13%)]"
            >
              <div className="flex items-start gap-3 text-left">
                <img
                  src={Icon4}
                  alt="Less Space"
                  className="w-14 h-14 object-contain"
                />
                <div>
                  <h6 className="font-semibold text-blacks group-hover:text-white">
                    Less Space
                  </h6>
                  <p className="text-grays text-sm leading-relaxed group-hover:text-white">
                    Procuring the compound from us relieves the customer from
                    managing inventories leading to less space requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features absolute positioned for lg+ screens (same as before) */}
          <div className="hidden lg:block w-full">
            {/* Feature 1 */}
            <div
              onClick={() => setCurrentBag(BagImage1)}
              className="absolute top-4 right-40 flex items-start gap-3 text-left w-[50%] cursor-pointer"
            >
              <img
                src={Icon1}
                alt="Low Investment"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h6 className="font-semibold text-blacks">Low Investment</h6>
                <p className="text-grays text-sm leading-relaxed">
                  It cuts down heavily on investment required for hi-tech
                  machines used for Granulation and Pulverising the powder. 
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div
              onClick={() => setCurrentBag(BagImage2)}
              className="absolute top-36 right-20 flex items-start gap-3 text-left w-[50%] cursor-pointer"
            >
              <img
                src={Icon2}
                alt="Low Pricing"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h6 className="font-semibold text-blacks">Low Pricing</h6>
                <p className="text-grays text-sm leading-relaxed">
                  We offer a lower price margin of Green Ethene Powder as we
                  procure it through large scale processing.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div
              onClick={() => setCurrentBag(BagImage3)}
              className="absolute bottom-1/3 right-20 flex items-start gap-3 text-left w-[50%] cursor-pointer"
            >
              <img
                src={Icon3}
                alt="High Quality"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h6 className="font-semibold text-blacks">High Quality</h6>
                <p className="text-grays text-sm leading-relaxed">
                  We practise a no tolerance policy in terms of quality. All our
                  products pass stringent quality test following the norms as
                  per IS 12701: 1996 & IS 1014:2001.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div
              onClick={() => setCurrentBag(BagImage4)}
              className="absolute bottom-10 right-40 flex items-start gap-3 text-left w-[50%] cursor-pointer"
            >
              <img
                src={Icon4}
                alt="Less Space"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h6 className="font-semibold text-blacks">Less Space</h6>
                <p className="text-grays text-sm leading-relaxed">
                  Procuring the compound from us relieves the customer from
                  managing inventories leading to less space requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyGreenage;
