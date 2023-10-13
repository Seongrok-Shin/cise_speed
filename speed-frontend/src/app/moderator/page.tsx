"use client";

import { useEffect, useState } from "react";
import Header from "../component/Header";
import { GetArticles, UpdateArticleApproval } from "../../../pages/api/api";
import IArticle from "../interface/IArticle";
export default function ModeratorView() {
  const [articles, setArticles] = useState<any>([]);
  const [modeQueue, setModQueue] = useState<any[]>([]);
  const tableStyle: string = "w-32 border-solid border-blue-700 border-2 pr-2 pl-2  bg-zinc-50";
  const buttonStyle: string = "rounded-xl border-2 border-gray-300 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-zinc-50";

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    if (modeQueue.length === 0) { // Check if modeQueue is empty
      GetArticles().then((response: any) => {
        setArticles(response.article);
        // Create a filtered array and set it to modeQueue
        const filteredArticles = response.article.filter(
          (article: IArticle) => !article.is_approved.isModerator && !article.is_approved.isModRejected
        );
        setModQueue(filteredArticles);
      });
    }
  }, []);
  useEffect(() => {
    if (modeQueue.length > 0) {
      console.log('modeQueue has changed:', modeQueue);
    }
  }, [modeQueue])
  function modAccept(id: string) {
    const accepted = {
      is_approved: {
        isModerator: true,
        isModRejected: false,
        isAnalyst: false,
        isAnaRejected: false,
      }
    }
    UpdateArticleApproval(id, accepted);
    const updatedMod = modeQueue.filter((item: any) => item.id !== id);
    setModQueue(updatedMod);
  }

  function modReject(id: string) {
    const rejected = {
      is_approved: {
        isModerator: true,
        isModRejected: true,
        isAnalyst: false,
        isAnaRejected: false,
      }
    }
    UpdateArticleApproval(id, rejected);
    const updatedMod = modeQueue.filter((item: any) => item.id !== id);
    setModQueue(updatedMod);
  }

  return (
    <>
      <Header />
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
                  <th className={tableStyle}>Approval</th>
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
                      <td className={tableStyle}><input className={buttonStyle} type="button" value="Accept" onClick={() => modAccept(result.id)} /></td>
                      <td className={tableStyle}><input className={buttonStyle} type="button" value="Deny" onClick={() => modReject(result.id)} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
