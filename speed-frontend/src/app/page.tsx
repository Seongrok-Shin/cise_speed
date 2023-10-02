'use client';
import Image from "next/image";
import { CreateArticle } from "../../pages/api/api";
import { Article } from "../../types/article.interface";
export default function Home() {
  function  SubmitArticle(){
    console.log("testing");
    const article:Article = {"title": "Title of article",
    "authors": ["Author 1", "Author 2"], 
    "journal": "Journal", // optional
    "year": 2022,
    "volume": 2, // optional
    "pages": 200,
    "DOI": "10.1093/ajae/aaq063"}
    console.log(CreateArticle(article));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Submit Article Example</h1>
        <input style={{ background: "red"}}type="button" value="Click Me!" onClick={SubmitArticle} />
      </div>
    </main>
  );
}
