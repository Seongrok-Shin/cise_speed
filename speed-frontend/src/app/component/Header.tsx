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
  const AdminPage = () => {
    router.push("/admin");
  };
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center hover:text-black">
      <ul className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <li className="mr-5 text-black hover:text-gray-900 text-white" onClick={HomePage}>
          Speed Database
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900 text-white"
          onClick={SearchPage}
        >
          Search Article
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900 text-white"
          onClick={ModeratorPage}
        >
          Moderator
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900 text-white"
          onClick={AnalystPage}
        >
          Analysis
        </li>
        <li
          className="mr-5 text-black hover:text-gray-900 text-white"
          onClick={AdminPage}
        >
          Admin
        </li>
      </ul>
    </div>
  );
};

export default Header;
