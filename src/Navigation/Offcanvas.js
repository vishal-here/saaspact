import React from "react";
import Button from "../Utils/Button";
import cross from "../Assets/cross.png";
const Offcanvas = props => {
    
  return (
    <>
      <div className="fixed top-0 left-0 overscroll-none h-screen w-screen z-10  bg-black opacity-60"></div>
      <div className="fixed overflow-x-hidden overflow-y-hidden inset-0  h-screen w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-50 opacity-100 ">
        <div className="col-span-1 sm:hidden bg-[url('./Assets/offcanvas.png')] h-full">
          <div className="w-11/12 p-10 flex justify-end">
            <img src={cross} alt=" " onClick={()=> props.handleClick()} />
          </div>
          <div className=" h-[70%] flex flex-col justify-around m-auto p-10">
            <p className="text-5xl font-playfair text-white">Services</p>
            <p className="text-5xl font-playfair text-white">About Us</p>
            <p className="text-5xl font-playfair text-white">Blogs</p>
            <p className="text-5xl font-playfair text-white">Contact us</p>
            <Button text={"Book an free marketing aduit "} color={"bg-[#FF6E6C]"} />
          </div>
        </div>
        <div className="hidden sm:block  col-span-1  "></div>
        <div className="hidden sm:block lg:hidden col-span-1  bg-[url('./Assets/offcanvas.png')] h-full ">
          <div className="w-11/12 p-10 flex justify-end">
            <img src={cross} alt=" "  onClick={()=> props.handleClick()}/>
          </div>
          <div className=" h-[70%] flex flex-col justify-around m-auto p-10">
            <p className="text-5xl font-playfair text-white">Services</p>
            <p className="text-5xl font-playfair text-white">About Us</p>
            <p className="text-5xl font-playfair text-white">Blogs</p>
            <p className="text-5xl font-playfair text-white">Contact us</p>
            <Button text={"Book an free marketing aduit "} color={"bg-[#FF6E6C]"} />
          </div>
        </div>
        <div className="hidden lg:block  col-span-1  "></div>
        <div className="hidden lg:block col-span-1 bg-[url('./Assets/offcanvas.png')] h-full   ">
          <div className="w-11/12 p-10 flex justify-end">
            <img src={cross} alt=" " onClick={()=> props.handleClick()} />
          </div>
          <div className="  h-[70%] flex flex-col justify-around m-auto p-10">
            <p className="text-5xl font-playfair text-white">Services</p>
            <p className="text-5xl font-playfair text-white">About Us</p>
            <p className="text-5xl font-playfair text-white">Blogs</p>
            <p className="text-5xl font-playfair text-white">Contact us</p>
            <Button text={"Book an free marketing aduit "} color={"bg-[#FF6E6C]"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
