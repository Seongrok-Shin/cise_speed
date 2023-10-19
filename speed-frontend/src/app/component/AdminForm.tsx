import IArticle from "../interface/IArticle";
import AlertDialog from "./Alert";
import BackgroundImage from "./Background";
import Header from "./Header";

export function AdminPageForm({ title, message, firstButtonValue, secondButtonValue, status }: any, closeDialog: any, openDialog: any, modeQueue: any, tableStyle: any, buttonRejectStyle: any, cleanArticle: any) {
    const resultStyle: string = `text-left flex flex-col items-center w-full h-[32rem] overflow-y-scroll`;
    return (<>
        <Header />
        {AlertDialog(title, message, firstButtonValue, secondButtonValue, status, closeDialog, openDialog)}
        <div className="absolute w-full flex justify-center">
            <div className={resultStyle}>
                {modeQueue.length >= 0 && (
                    <table className="border-solid border-gray-300 border-2 bg-white">
                        <thead>
                            <tr>
                                <th className={tableStyle}>Date</th>
                                <th className={tableStyle}>Title</th>
                                <th className={tableStyle}>Author/s</th>
                                <th className={tableStyle}>Publication Year</th>
                                <th className={tableStyle}>Source</th>
                                <th className={tableStyle}>DOI</th>
                                <th className={tableStyle}>Claim</th>
                                <th className={tableStyle}>SE methods</th>
                                <th className={tableStyle}>Verification</th>
                                <th className={tableStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modeQueue.map((result: IArticle, i: number): any => {
                                return (
                                    <tr key={i} className="hover:bg-slate-300">
                                        <td className={tableStyle}>{result.date}</td>
                                        <td className={tableStyle}>{result.title}</td>
                                        <td className={tableStyle}>{result.authors}</td>
                                        <td className={tableStyle}>{result.year}</td>
                                        <td className={tableStyle}>{result.journal}</td>
                                        <td className={tableStyle}>{result.DOI}</td>
                                        <td className={tableStyle}>{result.claim}</td>
                                        <td className={tableStyle}>{result.se_practice}</td>
                                        <td className={tableStyle}>{(result.is_approved.isAnalyst && result.is_approved.isModerator) ? "Verified" : "Unverified"}</td>
                                        <td className={tableStyle}><input className={buttonRejectStyle} type="button" value="Delete" onClick={() => cleanArticle(result.id)} /></td>
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