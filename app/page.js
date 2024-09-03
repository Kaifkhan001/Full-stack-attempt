"use client"
import Image from 'next/image'
import { useState, useEffect } from "react";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import Link from 'next/link';

function Page() {
  const [jokes, setJokes] = useState([]);
  const [isMenuOpen, setisMenuOpen] = useState(false);


  const handleMenuClick = () => {
    setisMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <div
        className={`absolute top-0 right-0 w-[80%] h-screen flex-col bg-black opacity-90 ${
          isMenuOpen ? "flex" : "hidden"
        } sm:w-[40%] h-[70%] sm:opacity-95`}
      >
        <nav className=" w-full h-[10%]  flex items-center justify-between px-6 py-2 text-white text-xl ">
          <span className="font-semibold tracking-wider text-2xl sm:text-base">MENU</span>
          <span
            className="mr-4 hover:cursor-pointer hover:text-gray-400"
            onClick={handleMenuClick}
          >
            <RxCrossCircled className="h-8 w-8 sm:h-5 sm:w-5" />
          </span>
        </nav>
        <ul className="flex flex-col  w-full h-[70%] sm:h-[50%]  text-white">
          <Link href={'/home'} className="text-2xl  hover:bg-gray-600 block text-center border-t-2 sm:border-t-[1px] sm:text-base border-gray-500 py-6 sm:py-2 font-semibold ">
            HOME
          </Link> 
          <Link href={'/register'} className="text-2xl hover:bg-gray-600 block text-center border-t-2 sm:border-t-[1px] sm:text-base border-gray-500 py-6 sm:py-2 font-semibold ">
            REGISTER
          </Link>
          <Link href={'login'} className="text-2xl hover:bg-gray-600 block text-center border-t-2 sm:border-t-[1px] sm:text-base border-gray-500 py-6 sm:py-2 font-semibold ">
            LOG-IN
          </Link>
          <Link href={'/contact-us'} className="text-2xl hover:bg-gray-600 block text-center border-t-2 sm:border-t-[1px] sm:text-base border-gray-500 py-6 sm:py-2 font-semibold ">
            CONTACT-US
          </Link>
        </ul>
        <div className="text-white text-center flex flex-col items-center justify-center ">
          <Image 
          src={'/images/logo02.png'}
          alt={'logo'}
          width={'100'}
          height={'100'}
          />
          <span>
            &copy; 2024 | Deep Blue Thoughts. | All rights reserved.| Kaif Khan{" "}
          </span>
        </div>
      </div>
  

      <div className="w-full min-h-[100vh] bg-black  text-white  flex items-center justify-center flex-col">
        <nav
          className={`w-full sm:min-h-[20vh] min-h-[10vh] px-12 py-2 sm:px-7  overflow-hidden flex items-center justify-between`}
        >
          <Image
            src={"/images/logo02.png"}
            alt={"logo"}
            width={"100"}
            height={"50"}
            className="h-full w-[12vw]"
          />

         

          <div className="gap-5 flex ">
            <Link href={'/login'} className="px-3 hidden sm:flex py-3 border-none rounded-3xl font-semibold hover:bg-gray-700 ">
              Log-In
            </Link>
            <Link href={'/register'} className="px-3 hidden sm:flex py-3 border-none rounded-3xl font-semibold bg-white text-black hover:bg-gray-400">
              ↠ Let &apos;s Connect
            </Link>
            <div className="block ">
            <button onClick={handleMenuClick} className="p-2 flex">
              <FaBars size={24} />
            </button>
          </div>
          </div>
        </nav>
        <section className="w-full min-h-[60vh] flex flex-col items-center justify-center sm:flex-row p-4 mt-1">
          <h1 className=" h-full text-6xl text-center px-8">
            Create, Connect, and <span>&#8621;</span> Grow with Your{" "}
            <span>&#10033;</span> Stories.
          </h1>
          <div className="w-2/3 font-[wilf] flex sm:flex-col sm:h-full flex-col gap-8 items-center   justify-between  sm:items-start sm:justify-between">
            <p className="text-center sm:text-start mt-3">
              Deep Blue Thoughts is the ultimate platform for expressing
              yourself through text and images. Share your moments, ideas, and
              creativity with a community that values your voice.
            </p>
            <Link
              href="https://www.google.com"
              target="_blank"
              className="hover:bg-gray-400 inline-block px-3 py-1 rounded-3xl hover:text-black hover:cursor-pointer bg-gray-600"
            >
              Start Sharing Now
            </Link>
          </div>
        </section>
        <div className="w-full flex items-center justify-center my-2">
          <marquee
            behavior="left"
            direction="alternative"
            className="w-[90%] sm:w-[95%] bg-gray-400 text-black font-semibold rounded-lg"
          >
            Welcome to Our Post Platform! Stay updated with the latest posts,
            and manage your content effortlessly. Create, read, update, and
            delete posts with ease. Your voice matters, and we&apos;re here to help
            you share it!
          </marquee>
        </div>
        <section className="w-full sm:min-h-[50vh] px-6 py-4">
        <Image
            src={"/images/big-Img.svg"}
            alt={"image"}
            width={"1000"}
            height={"100"}
          />
        </section>
        <footer className="sm:min-h-[100vh] min-h-[40vh] w-[95%] bg-black border-2 mx-3 px-4 py-4  rounded-2xl sm:mt-8 mt-4 shadow-2xl shadow-red-800 inset-y-14  ">
          <section className="w-full sm:min-h-[15vh] flex items-start justify-between ">
            <span className="text-[10px] w-1/3 sm:text-sm">
              / Get started /
            </span>
            <div className="w-2/3 ">
              <span className="text-[30px] sm:text-[75px]">
                Let &apos;s Launch Your Journey
              </span>
              <Image
            src={"/images/asteric.svg"}
            alt={"icon"}
            width={"1000"}
            height={"100"}
                className="w-[5vw] inline-block mx-1"
          />
              <Image
            src={"/images/fourS-star.svg"}
            alt={"icon"}
            width={"1000"}
            height={"100"}
            className="w-[5vw] inline-block mx-1 rotate-45"
          />
            </div>
          </section>
          <section className="w-full min-h-[25vh]  flex ">
            <div className="w-1/2 p-6 text-[10px]">
              <p className="font-semibold sm:text-xl sm:font-normal">
                Enjoy Free Consultations! Receive expert guidance on customer
                activation, onboarding strategies, simplifying product
                complexity, and growth experiments.
              </p>
              <span className="text-gray-600 block mt-4 text-[8px] sm:text-lg font-semibold">
                Contact Us
              </span>
              <span className="block sm:text-lg">Kaifkhan@gmail.com</span>
              <span className="sm:text-lg"> +91 7348631366</span>
            </div>
            <div className="w-1/2 py-6">
              <form action="">
                <input
                  type="text"
                  placeholder="FIRST & LAST NAME"
                  className="bg-transparent border-b-[1px] border-gray-500 pb-3 focus:outline-none  sm:pb-8  sm:text-[1rem]  text-[8px] w-full"
                />
                <input
                  type="text"
                  placeholder="EMAIL"
                  className="bg-transparent border-gray-500 border-b-[1px] pb-3 focus:outline-none  sm:text-[1rem] mt-4 sm:pb-8 sm:mt-4 text-[8px] w-full"
                />
                <textarea
                  name="projDetails"
                  id=""
                  placeholder="ABOUT YOUR PROJECT"
                  className="bg-transparent border-b-[1px] border-gray-500 pb-3- focus:outline-none  sm:mt-4 sm:pb-8 sm:text-[1rem] mt-4 w-full text-[8px]"
                  rows={"5"}
                ></textarea>
                <input
                  type="submit"
                  value="Send a message"
                  className="bg-white text-black px-3 py-3 rounded-lg mt-4 text-[8px] font-semibold hover:bg-gray-400 hover:cursor-pointer sm:text-[1rem] sm:rounded-3xl"
                />
              </form>
            </div>
          </section>
          <marquee
            behavior=""
            direction=""
            className="mt-3 bg-white text-black rounded-lg font-semibold sm:text-[1rem]"
          >
            &copy; 2024 | Deep Blue Thoughts. | All rights reserved.{" "}
          </marquee>
        </footer>
      </div>
    </>
  );
}

export default Page;
