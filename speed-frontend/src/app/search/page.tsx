"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GetArticleByPracticeSE, GetArticleYear, GetArticles, GetSingleArticle } from "../../../pages/api/api";
import { SearchPageForm } from "../component/SearchForm";
import IArticle from "../interface/IArticle";
export default function SearchView() {
  const router = useRouter();
  const [search, setSearch] = useState<any>("");
  const [filter, setFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    firstButtonValue: "",
    secondButtonValue: "",
    status: false,
  })

  const tableStyle: string = " sm:w-[45px] md:w-[80px] lg:w-[140px] border-solid border-gray-300 border-2 pr-2 pl-2 sm:text-xs md:text-md lg:text-lg break-all ";
  const searchStyle: string = "px-5 rounded-xl border-2 border-gray-300 focus:outline-none focus: border - black text - base font - medium text - gray - 700 hover: bg-gray-100   bg-zinc-50 font-bold";
  const handleAddArticle = (event: any) => {
    event.preventDefault();
    router.push("/submit");
  };

  function closeDialog() {
    setDialog({
      title: "",
      message: "",
      firstButtonValue: "",
      secondButtonValue: "",
      status: false,
    });
  }

  //handle logics
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - searchResult.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value);
  };

  function parseDate(str: string) {
    const parts: any = str.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]) as any;
  }

  function checkInputYear(value: any) {
    const pattern = /^\d{4}$/;
    return pattern.test(value);
  }

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    const updatedSearchResults: any = [];

    // Check if search is a valid year (numeric and 4 digits)
    if (checkInputYear(search)) {
      const year = parseInt(search, 10); // Convert search to an integer
      GetArticleYear(year).then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.forEach((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      }).catch((err: any) => {
        setDialog({
          title: "Search Not Found",
          message: `${search} has no articles`,
          firstButtonValue: "Confirm",
          secondButtonValue: "",
          status: true,
        });
      });
    } else if (search === "") {
      GetArticles().then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.forEach((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      }).catch((err: any) => {
        setDialog({
          title: "Search Not Found",
          message: `${search} has no articles`,
          firstButtonValue: "Confirm",
          secondButtonValue: "",
          status: true,
        });
      });

    }
    else {
      GetSingleArticle(search).then((response: any) => {
        const articles: IArticle[] = response.article;
        articles.forEach((article: IArticle) => {
          if (article.is_approved.isAnalyst && article.is_approved.isModerator) {
            updatedSearchResults.push(article);
          }
        });
        setSearchResult(updatedSearchResults);
      }).catch((err: any) => {
        setDialog({
          title: "Search Not Found",
          message: `${search} has no articles`,
          firstButtonValue: "Confirm",
          secondButtonValue: "",
          status: true,
        });
      });
    }
  };




  function getResults() {
    if (search !== "" || null) {
      // const updatedSearchResults: any = [];
      GetSingleArticle(search).then((response: any) => {
        const articles: IArticle[] = response.article;
        const filteredArticles = articles.filter((article: IArticle) => {
          return article.is_approved.isAnalyst && article.is_approved.isModerator;
        });
        //sort by date
        const sortedArticles: any = filteredArticles.sort((a, b) => parseDate(b.date) - parseDate(a.date));
        setSearchResult(sortedArticles);
      });
    }
    else {
      //    const updatedSearchResults: any = [];
      GetArticles().then((response: any) => {
        const articles: IArticle[] = response.article;
        const filteredArticles = articles.filter((article: IArticle) => {
          return article.is_approved.isAnalyst && article.is_approved.isModerator;
        });
        //sort by date
        const sortedArticles: any = filteredArticles.sort((a, b) => parseDate(b.date) - parseDate(a.date));
        setSearchResult(sortedArticles);
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
          firstButtonValue: "Confirm",
          secondButtonValue: "",
          status: true,
        });
      });
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "search view";
    document.body.style.overflow = "hidden";
    getResults();
  }, []);

  return SearchPageForm(dialog, closeDialog, null, handleSearchButton, handlePracticeMethods, handleYearFilter, handleChangeSearch, handleAddArticle, searchResult, search, searchStyle, tableStyle, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage);
}
