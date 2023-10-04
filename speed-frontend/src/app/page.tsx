"use client";

import Header from "./component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>This is home</h1>
      </div>
    </>
  );
}
