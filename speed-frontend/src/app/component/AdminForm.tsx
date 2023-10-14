import AlertDialog from "./Alert";
import Header from "./Header";

export function AdminPageForm({ title, message, buttonValue, status }: any, closeDialog: any, modeQueue: any, tableStyle: any, buttonStyle: any, cleanArticle: any) {
    return (<>
        <Header />
        {AlertDialog(title, message, buttonValue, status, closeDialog)}
        <div className="flex justify-center">
            <div className=" text-left flex flex-col justify-between items-center">
                {modeQueue.length >= 0 && (
                    <table className="border-solid border-blue-700 border-2">
                        <thead>
                            <tr>
                                <th className={tableStyle}>Title</th>
                                <th className={tableStyle}>Author/s</th>
                                <th className={tableStyle}>Publication Year</th>
                                <th className={tableStyle}>Source</th>
                                <th className={tableStyle}>DOI</th>
                                <th className={tableStyle}>Claim</th>
                                <th className={tableStyle}>Evidence</th>
                                <th className={tableStyle}>Verification</th>
                                <th className={tableStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modeQueue.map((result: any, i: number): any => {
                                return (
                                    <tr key={i}>
                                        <td className={tableStyle}>{result.title}</td>
                                        <td className={tableStyle}>{result.authors}</td>
                                        <td className={tableStyle}>{result.year}</td>
                                        <td className={tableStyle}>{result.journal}</td>
                                        <td className={tableStyle}>{result.doi}</td>
                                        <td className={tableStyle}>{result.claim}</td>
                                        <td className={tableStyle}>{result.evidence}</td>
                                        <td className={tableStyle}>{(result.is_approved.isAnalyst && result.is_approved.isModerator) ? "Verified" : "Unverified"}</td>
                                        <td className={tableStyle}><input className=" px-5 rounded-xl border-2 border-red-600 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-sky-50" type="button" value="Delete" onClick={() => cleanArticle(result.id)} /></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    </>);
}