"use client";
import { useState } from "react";
import Header from "../component/Header";
import { useRouter } from "next/navigation";
import DropdownFilter from "../component/DropDownCategory";
import { GetArticleByPracticeSE, GetArticleYear, GetArticles, GetSingleArticle } from "../../../pages/api/api";
import DropdownYearFilter from "../component/DropDownPublicationYear";
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

  const handleAddArticle = (event: any) => {
    event.preventDefault();
    router.push("/submit");
  };

  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value);
  };

  const handleSearchButton = (event: any) => {
    event.preventDefault();

    // TODO: fetch data from backend setSearchResult(response.data)
    console.log(search);
    if (search !== "" || null) {
      GetSingleArticle(search).then((response: any) => { setSearchResult(response.article) });
    }
    else {
      GetArticles().then((response: any) => { setSearchResult(response.article) });
    }
  };

  function handleYearFilter(value: number) {
    if (value !== 0 || null) {
      GetArticleYear(value).then((response: any) => { setSearchResult(response.article) });
    }
  }

  function handlePracticeMethods(value: string) {
    if (value !== "" || null) {
      GetArticleByPracticeSE(value).then((response: any) => { setSearchResult(response.article) }).catch((err: any) => { alert('Can not found practice method') });
    }
  }


  return (
    <>
      <Header />

      <main className="flex justify-center">
        <div className="flex flex-col w-full">
          <div className="flex justify-center">
            <form onSubmit={handleSearchButton}>
              <div className="flex flex-row">
                <div className="p-1">
                  <DropdownFilter dropDownFilter={handlePracticeMethods} />
                  <DropdownYearFilter dropDownYearFilter={handleYearFilter} />
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
                <div className="p-1">
                  <button
                    className="rounded-xl border-2 border-gray-300 focus:outline-none
                  focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100"
                    onClick={handleAddArticle}
                  >
                    Add Article
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className=" text-left flex flex-col justify-between items-center">
            {searchResult.length >= 0 && (
              <table className="border-solid border-blue-700 border-2">
                <thead>
                  <tr>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">Title</th>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">Author/s</th>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">Publication Year</th>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">Source</th>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">DOI</th>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">Claim</th>
                    <th className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.map((result: any, i): any => {
                    return (
                      <tr key={i}>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.title}</td>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.authors}</td>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.year}</td>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.journal}</td>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.doi}</td>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.claim}</td>
                        <td className="w-32 border-solid border-blue-700 border-2 pr-2 pl-2">{result.evidence}</td>
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
