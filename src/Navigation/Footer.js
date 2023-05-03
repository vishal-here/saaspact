import React from "react";
import fb from "../Assets/fb.png";
import tweeter from "../Assets/tweeter.png";
import insta from "../Assets/insta.png";
const Footer = () => {
  return (
    <>
      <div className="min-h-[25vh] bg-[#301E4E] p-10">
        <div className="w-11/12 m-auto  grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-8  gap-4 h-full">
          <div className=" text-white text-5xl sm:text-3xl font-playfair col-span-1 sm:col-span-1 flex flex-col align-middle justify-center">
            Logo
          </div>
          <div className="sm:hidden col-span-1  grid grid-cols-2  text-white ">
            <div className="col-span-1 flex flex-col ">
              <div className="">Home Page</div>
              <div className="">About Us</div>
              <div className="">Book Audit</div>
            </div>
            <div className="col-span-1  flex flex-col ">
              <div className="">Contact Us</div>
              <div className="">Our Services</div>
              <div className="">Blog</div>
            </div>
          </div>
          <div className="hidden sm:block col-span-1 lg:hidden flex flex-col justify-evenly">
            <div className="text-white text-lg font-playfair mt-3">
              Homepage
            </div>
            <div className="text-white text-lg font-playfair mt-3">
              Contact Us
            </div>
          </div>
          <div className="hidden sm:block col-span-1 lg:hidden flex flex-col justify-evenly">
            <div className="text-white text-lg font-playfair mt-3">
              About Us
            </div>
            <div className="text-white text-lg font-playfair mt-3">
              Other Services
            </div>
          </div>
          <div className="hidden sm:block lg:hidden col-span-1 flex flex-col justify-evenly">
            <div className="text-white text-lg font-playfair mt-3">
              Book Audit
            </div>
            <div className="text-white text-lg font-playfair mt-3">Blogs</div>
          </div>
          <div className="hidden lg:block text-white text-lg font-playfair mt-3">
            
            Home page
          </div>
          <div className="hidden lg:block text-white text-lg font-playfair mt-3">
            
            About Us
          </div>
          <div className="hidden lg:block text-white text-lg font-playfair mt-3">
            
            Book Audit
          </div>
          <div className="hidden lg:block text-white text-lg font-playfair mt-3">
            
            Contact Us
          </div>
          <div className="hidden lg:block text-white text-lg font-playfair mt-3">
            
            Our services
          </div>
          <div className="hidden lg:block text-white text-lg font-playfair mt-3">
            
            Blogs
          </div>
          <div className="col-span-1 flex justify-around w-1/2 m-auto sm:w-full">
              <img src={insta} alt="" className="w-contain h-auto  " />
              <img src={fb} alt="" className="w-contain h-auto  " />
              <img src={tweeter} alt="" className="w-contain h-auto " />
          </div>
        </div>
        <div className="flex justify-center text-white mt-8  text-sm">
          Copyright@2023
        </div>
      </div>
    </>
  );
};

export default Footer;
