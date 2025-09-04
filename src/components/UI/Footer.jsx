import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaTwitter } from "react-icons/fa";
import logo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-blacks text-white relative w-full">
      {/* Newsletter Section */}
      <div className="relative w-full">
        <div
          className=" absolute -top-28 lg:-top-16 left-[50%] p-6 sm:p-8 w-[100%] md:w-[90%] max-w-6xl mx-auto rounded-2xl shadow-lg flex flex-col lg:flex-row justify-between items-center md:gap-1 lg:gap-6"
          style={{
            background: "var(--background-color-gradient)",
            // position: "absolute",
            // top: "-3.5rem",
            // left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Left Text */}
          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-xs sm:text-sm md:text-base xl:text-lg mt-1 font-medium leading-relaxed">
              By subscribing and enjoying our newsletter, you can make sending
              and receiving payments easier & faster.
            </p>
          </div>

          {/* Email Input */}
          <div className="flex w-50% my-4 bg-blacks rounded-full shadow-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="px-4 py-2  w-full  md:w-80 text-gray-300 bg-transparent focus:outline-none text-sm md:text-base"
            />
            <button
              className="px-4 me-1 lg:me-16 xl:me-1 my-1 md:px-5 py-2  text-sm md:text-base text-white font-medium rounded-full hover:bg-green-600 transition-all duration-300"
              style={{
                background: "var(--background-color-gradient)",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="px-6 md:px-16 lg:px-28 pt-40">
        <div className="container mx-auto w-full">
          <div className="pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* About / Follow Us Section */}
            <div>
              <h3 className="text-lg xl:text-xl font-bold mb-4">FOLLOW US:</h3>
              <img src={logo} alt="GreenAge Logo" className="h-12" />
              <p className="mt-4 text-gray-300 text-sm md:text-base xl:text-lg leading-relaxed max-w-md">
                GreenAge Industries have etched their name in the field of
                development and manufacturing of rotomoulding
                powder/compounds in blazing fonts. The company was founded
                back in 2012.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg xl:text-xl  font-bold mb-4">CONTACT</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradients p-2 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    +91 79 297 08677 | +91 - 99798 48853
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradients p-2 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm md:text-base ">
                    Info@Greenageind.Com | Sales@Greenageind.Com
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gradients p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    GreenAge Industries, Plot No 123, Road No 6, Phase I
                    Kathwada GIDC, Ahmedabad - 382430, (Gujarat), India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="container mx-auto">
          <div className="py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © Copyright Green Age Industries All Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4 md:mt-0">
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition duration-300"
              >
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition duration-300"
              >
                <FaLinkedinIn className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition duration-300"
              >
                <FaGoogle className="text-white w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-green-600 p-2 rounded-full transition duration-300"
              >
                <FaTwitter className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
