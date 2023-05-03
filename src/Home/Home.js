import React from "react";
import Navbar from "../Navigation/Navbar";
import Button from "../Utils/Button";
import shoe from "../Assets/shoe.png";
import wall from "../Assets/wall.png";
import logos from "../Assets/logos.png";
import man from "../Assets/man.png";
import Footer from "../Navigation/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col sm:justify-center bg-[url('./Assets/landing.png')] bg-center bg-cover h-[60vh] lg:h-screen w-full">
        <div className="w-full sm:w-[50vw] mt-10 sm:mt-0 h-[20%] p-5 sm:h-[60%] bg-white opacity-60 ">
          <h1 className=" text-4xl sm:text-6xl lg:text-8xl font-bold font-playfair text-center">
            We are <span className="text-[#B7364A]"> Extensive</span>
          </h1>
          <p className="font-playfair text-center  font-semibold sm:mt-[10%] sm:text-3xl  lg:text-5xl">
            Helping you stand out in a crowded market
          </p>
        </div>
      </div>
      {/* <div className="text-5xl text-center p-10">Hello world</div> */}
      <div className="w-11/12 min-h:screen m-auto p-10">
        <div className="font-playfair uppercase sm:my-20 lg:my-32 sm:text-3xl lg:text-3xl text-[#463366]">
          who are we
        </div>
        <div className="font-playfair text-[#463366] text-4xl sm:text-6xl lg:text-[100px] my-10 sm:my-20 font-extrabold">
          We are Extensive.
        </div>
        <div className="sm:text-3xl text-gray-500">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className="my-20">
          <Button text={"BOOK A FREE MARKETING AUDIT"} color={"bg-[#301E4E]"}  />
        </div>
      </div>
      <div className="grid grid-cols-2 h-[70vh] lg:h-[90vh] ">
        <div className="col-span-2 h-[175px] sm:h-full sm:col-span-1 w-full bg-[url('./Assets/ellipsesm.jpeg')] bg-[100% 100%] sm:bg-[url('./Assets/ellipse.png')] bg-no-repeat p-5">
          <div className=" hidden sm:block uppercase text-5xl sm:text-7xl font-extrabold font-playfair ml-5 mt-10">
            what <br /> we do.
          </div>
          <div className="sm:hidden uppercase text-5xl sm:text-7xl font-extrabold font-playfair ml-5">
           what we do.
          </div>
          <div className="md:w-1/2 m-auto sm:text-xl md:text-2xl  font-regular ml-5 mt-2 sm:mt-10">
            We do lots of stuffs , basically adding value to your product .
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex flex-col justify-between">
          <div className="text-center text-3xl lg:text-6xl   font-playfair">
            Digital Marketing
          </div>
          <div className="text-center text-3xl lg:text-6xl   font-playfair">
            Digital Marketing
          </div>
          <div className="text-center text-3xl lg:text-6xl   font-playfair">
            Digital Marketing
          </div>
          <div className="text-center text-3xl lg:text-6xl   font-playfair">
            Digital Marketing
          </div>
          <div className="flex justify-center w-full object-fill">
            <Button text={"view all"} color={"bg-[#301E4E]"} />
          </div>
        </div>
      </div>

      {/* product */}
      <div className="min-h-screen bg-[#301E4E] py-10 my-10 ">
        <div className="w-11/12 m-auto">
          <div className="text-5xl sm:text-7xl lg:text-8xl font-playfair  text-white p-5 mt-10">
            
            Our <br /> work.
          </div>
          <div className="my-5">
            <Button text={"view all"} color={"bg-[#FF6E6C]"} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <img src={wall} alt="wall" className="w-full z-50" />
              <span className="uppercase text-[#FF6E6C] mt-4">
                digital marketing
              </span>
              <h1 className="uppercase font-playfair text-5xl lg:text-7xl my-10 text-white">
                starbucks
              </h1>
              <p className="font-playfair text-3xl text-white">
                Our ad campaign brought 80% footfall to the company
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <img src={shoe} alt="shoe" className="w-full z-50" />
              <span className="uppercase text-[#FF6E6C] mt-4 ">
                
                digital marketing
              </span>

              <h1 className=" font-playfair text-5xl lg:text-7xl my-10 text-white">
                Nike
              </h1>
              <p className="font-playfair text-3xl text-white">
                Our ad campaign brought 80% footfall to the company
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-10">
            <div className="col-span-2 sm:col-span-1">
              <img src={shoe} alt="shoe" className="w-full z-50" />
              <span className="uppercase text-[#FF6E6C] mt-4 ">
                
                digital marketing
              </span>

              <h1 className=" font-playfair text-5xl lg:text-7xl my-10 text-white">
                Nike
              </h1>
              <p className="font-playfair text-3xl text-white">
                Our ad campaign brought 80% footfall to the company
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <img src={wall} alt="wall" className="w-full z-50" />
              <span className="uppercase text-[#FF6E6C] mt-4">
                digital marketing
              </span>
              <h1 className="uppercase font-playfair text-5xl lg:text-7xl my-10 text-white">
                starbucks
              </h1>
              <p className="font-playfair text-3xl text-white">
                Our ad campaign brought 80% footfall to the company
              </p>
            </div>
            <div className=" flex justify-center sm:hidden my-4">
              <Button text={"view all"} color={"bg-[#FF6E6C]"} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 m-auto ">
        <div className="text-5xl sm:text-7xl lg:text-8xl font-playfair font-bold mt-10">
          Our <br /> Partners.
        </div>
        <div className="hidden sm:block text-[#FF6E6C]  font-semibold text-3xl my-4">
          Your success is our success.
        </div>
        <div className="sm:hidden text-[#FF6E6C]  font-semibold text-lg my-4">
          We do lots of stuffs , basically adding value to your product .
        </div>
      </div>
      <div>
        <img src={logos} alt="logos" className="z-50" />
      </div>
      <div className="w-11/12 m-auto">
        <div className="text-5xl sm:text-7xl lg:text-8xl font-playfair font-bold my-20">
          Testimonials
        </div>

        <div className="my-20 min-h-[40vh]    rounded-lg shadow-xl border-gray-200 border">
          <div className="w-11/12 mx-auto my-10  grid grid-cols-4">
            <div className="col-span-4 sm:col-span-1">
              <img
                src={man}
                alt="man"
                className="w-contain m-auto sm:w-full h-auto z-50"
              />
            </div>
            <div className="col-span-4 mt-5 sm:mt-0 sm:col-span-3 flex flex-col">
              <h1 className=" font-playfair text-2xl md:text-4xl lg:text-5xl text-center">
                “Working with Extensive is great”
              </h1>
              <div className="flex justify-around mt-20 h-full sm:pl-20  lg:ml-72">
                <div className="hidden sm:flex flex-col  justify-around ">
                  <div className="h-[2px] border-2 w-40 border-black float-right"></div>
                </div>
                <div className="flex flex-col justify-around">
                  <div className="text-3xl font-playfair">Hershel</div>
                  <div className="text-lg text-[#FF6E6C] font-playfair">
                    Head of director
                  </div>
                  <div className="text-lg text-[#FF6E6C] font-playfair">
                    GGPL PVT LTD.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[20vh] sm:min-h-[40vh] bg-[#301E4E] p-10 my-5">
        <h1 className=" font-playfair text-4xl sm:text-7xl text-[#A17FC9]">
          Looking to drive <br />
          results? <span className=" text-[#FF6E6C]">Let's chat</span>
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
