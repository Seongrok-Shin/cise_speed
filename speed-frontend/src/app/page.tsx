/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import React from "react";
import Header from "./component/Header";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.body.style.overflow = "hidden";
  }, []);
  const searchPage = () => {
    router.push("/search");
  };
  const moderatorPage = () => {
    router.push("/moderator");
  };
  const analystPage = () => {
    router.push("/analyst");
  };

  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <img
          src="/assets/books.png"
          alt="homeBackground"
          className="absolute opacity-50 w-full h-full"
        />
        <div className="absolute w-full font-bold font-sans leading-7 text-center text-white desktop:text-3xl desktop:py-60 laptop:text-3xl laptop:py-50  tablet:text-lg tablet:py-32 mobile:text-lg">
          <p>❝ Welcome to SPEED DATABASE</p>
          <p>MY BLOG ON EDUCATION</p>
          <p>AND TECHNOLOGY ❞</p>
        </div>
        <div className="absolute mobile:top-[300px] tablet:top-[400px] laptop:top-[400px] desktop:top-[600px] inset-x-0 flex-row flex justify-center font-sans text-center text-white ">
          <button className="font-bold xl:py-8 xl:px-10 lg:py-8 lg:px-10 hover:text-black">
            <img src="/assets/search.png" alt="search" onClick={searchPage} />
            Search View
          </button>
          <span className="px-5"></span>
          <button
            className="font-bold xl:py-8 xl:px-10 lg:py-8 lg:px-10  hover:text-black"
            onClick={moderatorPage}
          >
            <img src="/assets/mode.png" alt="moderator" />
            Moderator View
          </button>
          <span className="px-5"></span>
          <button
            className="font-bold xl:py-8 xl:px-10 lg:py-8 lg:px-10 hover:text-black"
            onClick={analystPage}
          >
            <img src="/assets/analyst.png" alt="Analyst" />
            Analyst View
          </button>
        </div>
      </div>
      <p className="absolute text-white text-xs text-center bottom-0 inset-x-0">
        © 2023 by SPEED DATABASE Powered and secured by AUT
      </p>
    </>
  );
}
