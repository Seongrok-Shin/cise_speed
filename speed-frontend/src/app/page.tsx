"use client";

import { useEffect } from "react";
import Header from "./component/Header";
import MediaCard from "./component/Card";
import { useRouter } from "next/navigation";
export default function Home() {
  const midParagraphStyle: string = "text-white text-4xl text-center";
  const smallParagraphStyle: string = "text-white text-4xl text-center mb-[35px]"
  const headerStyle: string = "text-white text-6xl font-bold text-center";
  const router = useRouter();

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.body.style.backgroundImage = "url(assets/background.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, [])


  return (
    <>
      <Header />
      <div className="z-10 w-full justify-between font-mono text-sm lg:flex">
        <div className="w-1/2 m-auto">
          <h1 className={midParagraphStyle}>Welcome to</h1>
          <h1 className={headerStyle}>SPEED DATABASE</h1>
          <h1 className={smallParagraphStyle}>My Blog on Education & Teaching</h1>
          <div className="grid-cols-3 grid justify-items-center ">
            {MediaCard({ title: "Search", description: "Welcome to the Search", imageSrc: "/assets/search.png", buttonValue: "View Search" }, () => { router.push('search') })}
            {MediaCard({ title: "Moderator", description: "Welcome to the Moderator", imageSrc: "/assets/mode.png", buttonValue: "View Moderator" }, () => { router.push('moderator') })}
            {MediaCard({ title: "Analysis", description: "Welcome to the Analysis", imageSrc: "/assets/analyst.png", buttonValue: "View Analyst" }, () => { router.push('analyst') })}
          </div>
        </div>

      </div>
    </>
  );
}