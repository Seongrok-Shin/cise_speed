"use client";

import { useEffect } from "react";
import Header from "./component/Header";

export default function Home() {
  const midParagraphStyle: string = "text-white text-4xl text-center";
  const smallParagraphStyle: string = "text-white text-4xl text-center"
  const headerStyle: string = "text-white text-6xl font-bold text-center";
  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
  }, [])
  return (
    <>
      <Header />
      <div className="z-10 w-full justify-between font-mono text-sm lg:flex">
        <div className="w-1/3 m-auto">
          <h1 className={midParagraphStyle}>Welcome to</h1>
          <h1 className={headerStyle}>SPEED DATABASE</h1>
          <h1 className={smallParagraphStyle}>My Blog on Education & Teaching</h1>
        </div>
      </div>
    </>
  );
}