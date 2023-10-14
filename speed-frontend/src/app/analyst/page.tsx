"use client";

import { useEffect, useState } from "react";
import Header from "../component/Header";
import { DeleteArticle, GetArticles, UpdateArticleApproval } from "../../../pages/api/api";
import IArticle from "../interface/IArticle";
import AlertDialog from "../component/Alert";
import { AnalystPageForm } from "../component/AnalystForm";
export default function AnalystView() {

  const [articles, setArticles] = useState<any>([]);
  const [modeQueue, setModQueue] = useState<any[]>([]);
  const tableStyle: string = " sm:w-[45px] md:w-[80px] lg:w-[140px] border-solid border-gray-300 border-2 pr-2 pl-2  bg-zinc-50 sm:text-xs md:text-md lg:text-lg break-all";
  const buttonRejectStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-red-600 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-sky-50 sm:text-xs md:text-md lg:text-lg";
  const buttonAcceptStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-sky-300 focus:outline-none focus:border-black text-base font-medium hover:bg-gray-100 hover:text-gray-700 text-white bg-sky-600 sm:text-xs md:text-md lg:text-lg";
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    buttonValue: "",
    status: false,
  })

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "analyst view";
    document.body.style.overflow = "hidden";
    if (modeQueue.length === 0) { // Check if modeQueue is empty
      GetArticles().then((response: any) => {
        setArticles(response.article);
        // Create a filtered array and set it to modeQueue
        const filteredArticles = response.article.filter(
          (article: IArticle) => !article.is_approved.isAnalyst && !article.is_approved.isAnaRejected && article.is_approved.isModerator && !article.is_approved.isModRejected
        );
        setModQueue(filteredArticles);
      });
    }
  }, [modeQueue]);


  function closeDialog() {
    setDialog({
      title: "",
      message: "",
      buttonValue: "",
      status: false,
    });
  }

  function modAccept(id: string) {
    const accepted = {
      is_approved: {
        isModerator: true,
        isModRejected: true,
        isAnalyst: true,
        isAnaRejected: true,
      }
    }
    UpdateArticleApproval(id, accepted);
    const updatedMod = modeQueue.filter((item: any) => item.id !== id);
    setModQueue(updatedMod);
    setDialog({
      title: "Anaylst Accepted",
      message: "Sucessfully added to the Database",
      buttonValue: "Confirm",
      status: true,
    });
  }

  function modReject(id: string) {
    const rejected = {
      is_approved: {
        isModerator: true,
        isModRejected: true,
        isAnalyst: false,
        isAnaRejected: true,
      }
    }
    UpdateArticleApproval(id, rejected);
    const updatedMod = modeQueue.filter((item: any) => item.id !== id);
    setModQueue(updatedMod);
    setDialog({
      title: "Anaylst Rejected",
      message: "Unsuccessfuly added to the database it will stay in the temporary queue",
      buttonValue: "Confirm",
      status: true,
    });
  }

  return AnalystPageForm(dialog, closeDialog, modeQueue, tableStyle, buttonAcceptStyle, buttonRejectStyle, modAccept, modReject);
}
