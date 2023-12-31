"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * @author @Seongrok-Shin
 * Description
 * @returns {any}
 */

const Header = () => {
  const router = useRouter();
  const home = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-wrap p-5 flex-col laptop:flex-row items-center hover:text-black bg-[#0332CB]">
      <Image
        src="/assets/logo.png"
        alt="Logo.png"
        width={75}
        height={75}
        className="px-2"
        onClick={home}
      />
      <a
        href="/"
        className="text-3xl mr-5 font-sans text-white hover:text-gray-900"
      >
        <p className="absolute text-3xl mr-5 ">SPEED</p>
        <p className="text-3xl ml-24 mr-5 font-bold">DATABASE</p>
      </a>
      <ul className="laptop:ml-auto flex flex-wrap items-center text-base justify-center">
        <a
          href="/search"
          className="mr-5 font-mono text-white hover:text-gray-900"
        >
          Search
        </a>
        <a
          href="/moderator"
          className="mr-5 font-mono text-white hover:text-gray-900"
        >
          Moderator
        </a>
        <a
          href="/analyst"
          className="mr-5 font-mono text-white hover:text-gray-900"
        >
          Analyst
        </a>
        <a
          href="/admin"
          className="mr-5 font-mono text-white hover:text-gray-900"
        >
          Administrator
        </a>
      </ul>
    </div>
  );
};

export default Header;
