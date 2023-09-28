"use client";
import React from "react";
import { useRouter } from "next/navigation";

/**
 * @author @Seongrok-Shin
 * Description
 * @returns {any}
 */
const Header = () => {
  const router = useRouter();
  const HomePage = () => {
    router.push("/");
  };
  const SearchPage = () => {
    router.push("/search");
  };
  const ModeratorPage = () => {
    router.push("/moderator");
  };
  const AnalystPage = () => {
    router.push("/analyst");
  };
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center hover:text-black">
      <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <li className="mr-5 text-black hover:text-gray-900" onClick={HomePage}>
          Home
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900"
          onClick={SearchPage}
        >
          Search View
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900"
          onClick={ModeratorPage}
        >
          Moderator View
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900"
          onClick={AnalystPage}
        >
          Analyst View
        </li>
      </ul>
    </div>
  );
};

export default Header;
