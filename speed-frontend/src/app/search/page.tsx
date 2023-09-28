"use client";

import Header from "../component/Header";
import { useRouter } from "next/navigation";
export default function SearchView() {
  /**
   * @author @Seongrok-Shin
   * Description
   * @returns {any}
   */

  const router = useRouter();

  const submitArticle = () => {
    router.push("/submit");
  };

  return (
    <>
      <Header />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center">
          <h1>This is search view</h1>
          <button
            onClick={submitArticle}
            className="w-full rounded-xl border-2 border-gray-300 focus:outline-none
          focus:border-indigo-500 text-base px-4 py-2"
          >
            Submit Article
          </button>
        </div>
      </div>
    </>
  );
}
