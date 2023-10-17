"use client";

import { useEffect, useState } from "react";
import { GetArticles, UpdateArticleApproval } from "../../../pages/api/api";
import IArticle from "../interface/IArticle";
import { ModeratorPageForm } from "../component/ModeratorForm";
export default function ModeratorView() {
  const [articles, setArticles] = useState<any>([]);
  const [modeQueue, setModQueue] = useState<any[]>([]);
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    firstButtonValue: "",
    secondButtonValue: "",
    status: false,
  });
  const tableStyle: string = " sm:w-[45px] md:w-[80px] lg:w-[140px] border-solid border-gray-300 border-2 pr-2 pl-2  bg-zinc-50 sm:text-xs md:text-md lg:text-lg break-all";
  const buttonRejectStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-red-600 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-sky-50 sm:text-xs md:text-md lg:text-lg";
  const buttonAcceptStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-sky-300 focus:outline-none focus:border-black text-base font-medium hover:bg-gray-100 hover:text-gray-700 text-white bg-sky-600 sm:text-xs md:text-md lg:text-lg";
  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "moderator view";
    document.body.style.overflow = "hidden";
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


  function closeDialog() {
    setDialog({
      title: "",
      message: "",
      firstButtonValue: "",
      secondButtonValue: "",
      status: false,
    });
  }

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
    setDialog({
      title: "Moderator Accepted",
      message: "Sucessfully added to the Analyst Queue",
      firstButtonValue: "Confirm",
      secondButtonValue: "",
      status: true,
    });
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
    setDialog({
      title: "Article Rejected",
      message: "Unsuccessfully rejected by the Moderator",
      firstButtonValue: "Confirm",
      secondButtonValue: "",
      status: true,
    });
  }

  return ModeratorPageForm(dialog, closeDialog, null, modeQueue, tableStyle, buttonAcceptStyle, buttonRejectStyle, modAccept, modReject);
}
