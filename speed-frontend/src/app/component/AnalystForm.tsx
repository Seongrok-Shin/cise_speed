import IArticle from "../interface/IArticle";
import AlertDialog from "./Alert";
import BackgroundImage from "./Background";
import Header from "./Header";
export function AnalystPageForm({ title, message, firstButtonValue, secondButtonValue, status }: any, closeDialog: any, openDialog: any, modeQueue: any, tableStyle: any, buttonAcceptStyle: any, analystConfirm: any, handleChange: any, data: IArticle,) {
    const resultStyle: string = `text-left flex flex-col items-center w-full h-[32rem] overflow-y-scroll`;
    return (<>
        <Header />
        {AlertDialog(title, message, firstButtonValue, secondButtonValue, status, closeDialog, openDialog)}
        <div className=" absolute w-full flex justify-center">
            <div className={resultStyle}>
                {modeQueue.length >= 0 && (
                    <table className="border-solid border-gray-300 border-2 bg-white">
                        <thead>
                            <tr>
                                <th className={tableStyle}>Title</th>
                                <th className={tableStyle}>Author/s</th>
                                <th className={tableStyle}>Publication Year</th>
                                <th className={tableStyle}>SE Method</th>
                                <th className={tableStyle}>Moderator</th>
                                <th className={tableStyle}>Approval</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modeQueue.map((result: IArticle, i: number): any => {
                                return (
                                    <tr key={i} className="hover:bg-slate-300">
                                        <td className={tableStyle}>{result.title}</td>
                                        <td className={tableStyle}>{result.authors}</td>
                                        <td className={tableStyle}>{result.year}</td>
                                        <td className={tableStyle}> <input
                                            name="se_practice"
                                            type="text"
                                            placeholder="Enter SE methods"
                                            onChange={handleChange}
                                            value={data.se_practice}
                                            className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 sm:text-xs md:text-md lg:text-lg px-1 py-2"
                                            required
                                        /></td>
                                        <td className={tableStyle}>{(result.is_approved.isModerator) ? "Approved" : "Unapproved"}</td>
                                        <td className={tableStyle}><input className={buttonAcceptStyle} type="button" value="Accept" onClick={() => { analystConfirm(result.id) }} /></td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
        {BackgroundImage("/assets/background.png", "absolute w-full h-full z-[-1]")}
        <div className="absolute w-full py-2.5 bottom-0 inset-x-0 text-white text-xs text-center leading-4">
            © 2023 by SPEED DATABASE Powered and secured by AUT
        </div>
    </>);
}