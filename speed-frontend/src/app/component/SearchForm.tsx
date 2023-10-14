import IArticle from "../interface/IArticle";
import AlertDialog from "./Alert";
import BackgroundImage from "./Background";
import DropdownFilter from "./DropDownCategory";
import DropdownYearFilter from "./DropDownPublicationYear";
import Header from "./Header";

export function SearchPageForm({ title, message, buttonValue, status }: any, closeDialog: any,
    handleSearchButton: any,
    handlePracticeMethods: any,
    handleYearFilter: any,
    handleChangeSearch: any,
    handleAddArticle: any,
    searchResult: any,
    search: any,
    searchStyle: any,
    tableStyle: any,
) {
    const resultStyle: string = `text-left flex flex-col items-center w-full h-[32rem] overflow-y-scroll`;
    return (<>
        <Header />
        {AlertDialog(title, message, buttonValue, status, closeDialog)}
        <div>
            <main className="absolute flex justify-center w-full">
                <div className="flex flex-col w-full">
                    <div className="flex justify-center">
                        <form onSubmit={handleSearchButton}>
                            <div className="flex md:flex-row lg:flex-row sm:flex-col w-full">
                                <div className="p-1">
                                    <DropdownFilter dropDownFilter={handlePracticeMethods} />
                                    <DropdownYearFilter dropDownYearFilter={handleYearFilter} />
                                </div>
                                <div className="p-1">
                                    <input
                                        className="border-2 border-gray-300 focus:outline-none
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
                                        className={searchStyle}
                                        type="submit"
                                    >
                                        Search
                                    </button>
                                </div>
                                <div className="p-1">
                                    <button
                                        className={searchStyle}
                                        onClick={handleAddArticle}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={resultStyle}>
                        {searchResult.length >= 0 && (
                            <table className="border-solid border-blue-700 border-2">
                                <thead>
                                    <tr>
                                        <th className={tableStyle}>Date</th>
                                        <th className={tableStyle}>Title</th>
                                        <th className={tableStyle}>Author/s</th>
                                        <th className={tableStyle}>Publication Year</th>
                                        <th className={tableStyle}>Journal</th>
                                        <th className={tableStyle}>DOI</th>
                                        <th className={tableStyle}>Volume</th>
                                        <th className={tableStyle}>Pages</th>
                                        <th className={tableStyle}>Claim</th>
                                        <th className={tableStyle}>Evidence</th>
                                        <th className={tableStyle}>Verification</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchResult.map((result: IArticle, i: number): any => {
                                        return (
                                            <tr key={i}>
                                                <td className={tableStyle}>{result.date}</td>
                                                <td className={tableStyle}>{result.title}</td>
                                                <td className={tableStyle}>{result.authors}</td>
                                                <td className={tableStyle}>{result.year}</td>
                                                <td className={tableStyle}>{result.journal}</td>
                                                <td className={tableStyle}>{result.DOI}</td>
                                                <td className={tableStyle}>{result.volume}</td>
                                                <td className={tableStyle}>{result.pages}</td>
                                                <td className={tableStyle}>{result.claim}</td>
                                                <td className={tableStyle}>{result.evidence}</td>
                                                <td className={tableStyle}>{(result.is_approved.isModerator && result.is_approved.isAnalyst) ? "Verified" : "Unverified"}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </main>
        </div>
        {BackgroundImage("/assets/background.png", "absolute w-full h-full z-[-1]")}
        <div className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center leading-4">
            © 2023 by SPEED DATABASE Powered and secured by AUT
        </div>
    </>);
}