"use client";

import { useEffect } from "react";
import Header from "./component/Header";
import { useRouter } from "next/navigation";
import BackgroundImage from "./component/Background";
export default function Home() {
  const midParagraphStyle: string = "text-white text-4xl text-center";
  const smallParagraphStyle: string = "text-white text-4xl text-center mb-[35px]"
  const headerStyle: string = "text-white text-6xl font-bold text-center";
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
            <img src="/assets/magnifier.png" className="py-2 bg-opacity-0" />
            Searching View
          </button>
        </div>
        <div className="absolute bottom-24 inset-x-0 font-sans text-white text-xl leading-4 items-center flex flex-col">
          <button
            className="font-bold py-8 px-10 hover:bg-[#0332CB] bg-white rounded-full bg-opacity-25"
            onClick={moderatorPage}
          >
            <img src="/assets/magnifier.png" className="py-2 bg-opacity-0" />
            Moderator View
          </button>
        </div>
        <div className="absolute bottom-[240px] ml-[1300px] font-sans text-white text-xl leading-4 items-center flex flex-col">
          <button
            className="font-bold py-8 px-10 hover:bg-[#0332CB] bg-white rounded-full bg-opacity-25"
            onClick={analystPage}
          >
            <img src="/assets/magnifier.png" className="py-2 bg-opacity-0" />
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