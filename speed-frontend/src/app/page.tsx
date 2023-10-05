'use client';
import Image from "next/image";
import { CreateArticle, GetArticleAuthor, GetArticleClaim, GetArticleEvidence, GetArticleYear, GetArticles, GetSingleArticle } from "../../pages/api/api";
import { Article } from "../../types/article.interface";
export default function Home() {
  //Example use case of api calls.
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
      "evidence": "please"
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
        <input style={{ background: "green" }} type="button" value="Get Article Title of article!" onClick={() => { GetSingleArticle("Cat") }} />
        <br></br>
        <input style={{ background: "white" }} type="button" value="Author" onClick={() => { GetArticleAuthor("John Doe") }} />
        <br></br>
        <input style={{ background: "white" }} type="button" value="Year" onClick={() => { GetArticleYear(2022) }} />
        <br></br>
        <input style={{ background: "white" }} type="button" value="Claim" onClick={() => { GetArticleClaim("Agile is better than waterfall") }} />
        <br></br>
        <input style={{ background: "white" }} type="button" value="Evidence" onClick={() => { GetArticleEvidence("please") }} />
      </div>
    </main>
  );
}
