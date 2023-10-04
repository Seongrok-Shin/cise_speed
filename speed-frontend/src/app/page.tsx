'use client';
import Image from "next/image";
import { CreateArticle, GetArticles, GetSingleArticle } from "../../pages/api/api";
import { Article } from "../../types/article.interface";
export default function Home() {
  function SubmitArticle() {
    console.log("testing");
    const article: Article = {
      "title": "Cat",
      "authors": ["meow", "maow"],
      "journal": "Journal", // optional
      "year": 2022,
      "volume": 2, // optional
      "pages": 200,
      "DOI": "10.1093/ajae/aaq063",
      "status": "dasds",
      "claim": "fasdfsd",
      "result": false,
      "research": "fdafsd",
      "participant": "fasdfsd",

    }
    console.log(CreateArticle(article));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Submit Article Example</h1>
        <input style={{ background: "red" }} type="button" value="Click Me!" onClick={SubmitArticle} />
        <br></br>
        <input style={{ background: "blue" }} type="button" value="Search All!" onClick={GetArticles} />
        <br></br>
        <input style={{ background: "green" }} type="button" value="Get Article Title of article!" onClick={() => { GetSingleArticle("Title of article") }} />
      </div>
    </main>
  );
}
