"use client";

import { useEffect } from "react";
import Header from "./component/Header";
import { useRouter } from "next/navigation";
import BackgroundImage from "./component/Background";
import Image from "next/image";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
  }, [])
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
    <div className="bg-[#0332CB]">
      <Header />
      <div className="overflow-hidden">
        <div className="absolute w-full font-bold font-sans py-48 px-52 text-white text-3xl leading-4">
          <p className="py-4">Welcome to</p>
          <p className="py-4">SPEED DATABASE</p>
          <p className="py-4">MY BLOG ON EDUCATION</p>
          <p className="py-4">AND TECHNOLOGY</p>
        </div>
        <div className="absolute py-48 inset-x-0 font-sans text-white text-xl leading-4 items-center flex flex-col">
          <button
            className="font-bold py-8 px-10 hover:bg-[#0332CB] bg-white rounded-full bg-opacity-25"
            onClick={searchPage}
          >
            <Image src="/assets/magnifier.png" alt="search" className="py-2 bg-opacity-0" width="0"
              height="0"
              sizes="100vw" />
            Searching View
          </button>
        </div>
        <div className="absolute bottom-24 inset-x-0 font-sans text-white text-xl leading-4 items-center flex flex-col">
          <button
            className="font-bold py-8 px-10 hover:bg-[#0332CB] bg-white rounded-full bg-opacity-25"
            onClick={moderatorPage}
          >
            <Image src="/assets/magnifier.png" alt="moderator" className="py-2 bg-opacity-0" width="0"
              height="0"
              sizes="100vw" />
            Moderator View
          </button>
        </div>
        <div className="absolute bottom-[240px] ml-[1300px] font-sans text-white text-xl leading-4 items-center flex flex-col">
          <button
            className="font-bold py-8 px-10 hover:bg-[#0332CB] bg-white rounded-full bg-opacity-25"
            onClick={analystPage}
          >
            <Image src="/assets/magnifier.png" alt="analyst" className="py-2 bg-opacity-0" width="0"
              height="0"
              sizes="100vw" />
            Analysting View
          </button>
        </div>
        {BackgroundImage("/assets/books.png")}
        <div className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center leading-4">
          © 2023 by SPEED DATABASE Powered and secured by AUT
        </div>
      </div>
    </div>
  );
}