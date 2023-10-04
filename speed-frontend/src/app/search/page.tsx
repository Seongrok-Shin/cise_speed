"use client";
import { useState } from "react";
import Header from "../component/Header";
import { useRouter } from "next/navigation";
import DropdownFilter from "../component/DropDownCategory";
import axios from "axios";
export default function SearchView() {
  /**
   * @author @Seongrok-Shin
   * Description
   * @returns {any}
   */

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value);
  };

  const handleSearchButton = (event: any) => {
    event.preventDefault();

    // TODO: fetch data from backend
    console.log(search);

    axios
      .get(`http://localhost:5000/article/search/${search}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSearchResult(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />

      <main className="flex justify-center">
        <div className="flex flex-col w-full">
          <div className="flex justify-center">
            <form onSubmit={handleSearchButton}>
              <div className="flex flex-row">
                <div className="p-1">
                  <DropdownFilter />
                </div>
                <div className="p-1">
                  <input
                    className="rounded-xl border-2 border-gray-300 focus:outline-none
                    focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100"
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder="Search"
                  />
                </div>
                <div className="p-1">
                  <button
                    className="rounded-xl border-2 border-gray-300 focus:outline-none
                  focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col">
            {searchResult.length >= 0 && (
              <table className="flex flex-col justify-between items-center">
                <thead>
                  <tr>
                    <th className="px-3">Title</th>
                    <th className="px-3">Author/s</th>
                    <th className="px-3">Publication Year</th>
                    <th className="px-3">Source</th>
                    <th className="px-3">DOI</th>
                    <th className="px-3">Claim</th>
                    <th className="px-3">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.map((result: any, i): any => {
                    return (
                      <tr key={i}>
                        <td>{result.title}</td>
                        <td>{result.authors}</td>
                        <td>{result.publicationYear}</td>
                        <td>{result.source}</td>
                        <td>{result.doi}</td>
                        <td>{result.claim}</td>
                        <td>{result.evidence}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
