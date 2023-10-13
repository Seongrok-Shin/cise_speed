"use client";

import { useEffect, useState } from "react";
import { Article } from "../../../types/article.interface";
import Header from "../component/Header";
export default function ModeratorView() {
  const [search, setSearch] = useState("");
  const [modeQueue, setModQueue] = useState<any>([]);
  const tableStyle: string = "w-32 border-solid border-blue-700 border-2 pr-2 pl-2";
  useEffect(() => {

  });

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
                      <td className={tableStyle}><input type="button" /></td>
                      <td className={tableStyle}><input type="button" /></td>
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
