"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetArticleByPracticeSE, GetArticleYear, GetArticles, GetSingleArticle } from "../../../pages/api/api";
import { SearchPageForm } from "../component/SearchForm";
import IArticle from "../interface/IArticle";
export default function SearchView() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    buttonValue: "",
    status: false,
  })

  const tableStyle: string = "w-32 border-solid border-blue-700 border-2 pr-2 pl-2 bg-zinc-50 ";
  const searchStyle: string = "px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus: border - black text - base font - medium text - gray - 700 hover: bg-gray-100   bg-zinc-50 font-bold";
  const handleAddArticle = (event: any) => {
    event.preventDefault();
    router.push("/submit");
  };

  function closeDialog() {
    setDialog({
      title: "",
      message: "",
      buttonValue: "",
      status: false,
    });
  }

  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value);
  };

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    if (search !== "" || null) {
      const updatedSearchResults: any = [];
      GetSingleArticle(search).then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.map((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      }).catch((err: any) => {
        setDialog({
          title: "Search Not Found",
          message: `${search} has no articles`,
          buttonValue: "Confirm",
          status: true,
        });
      });
    }
    else {
      const updatedSearchResults: any = [];
      GetArticles().then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.map((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      }).catch((err: any) => {
        setDialog({
          title: "Search Not Found",
          message: `${search} has no articles`,
          buttonValue: "Confirm",
          status: true,
        });
      });
    }
  };

  function getResults() {
    if (search !== "" || null) {
      const updatedSearchResults: any = [];
      GetSingleArticle(search).then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.map((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      });
    }
    else {
      const updatedSearchResults: any = [];
      GetArticles().then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.map((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      });
    }
  }

  function handleYearFilter(value: number) {
    if (value !== 0 || null) {
      const updatedSearchResults: any = [];
      GetArticleYear(value).then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.map((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      });
    }
  }

  function handlePracticeMethods(value: string) {
    if (value !== "" || null) {
      const updatedSearchResults: any = [];
      GetArticleByPracticeSE(value).then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.map((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      }).catch((err: any) => {
        setDialog({
          title: "Not Found Software Engineering Method",
          message: `${value} has no articles`,
          buttonValue: "Confirm",
          status: true,
        });
      });
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "search view";
    document.body.style.setProperty("background-image", "url(assets/background.png)");
    document.body.style.setProperty("background-repeat", "no-repeat");
    document.body.style.setProperty("background-size", "cover");
    getResults();
  }, []);

  return SearchPageForm(dialog, closeDialog, handleSearchButton, handlePracticeMethods, handleYearFilter, handleChangeSearch, handleAddArticle, searchResult, search, searchStyle, tableStyle);
}
