"use client";

import { useEffect, useState } from "react";
import Header from "../component/Header";
import { GetArticles, UpdateArticleApproval } from "../../../pages/api/api";
import IArticle from "../interface/IArticle";
import AlertDialog from "../component/Alert";
import { ModeratorPageForm } from "../component/ModeratorForm";
export default function ModeratorView() {
  const [articles, setArticles] = useState<any>([]);
  const [modeQueue, setModQueue] = useState<any[]>([]);
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    buttonValue: "",
    status: false,
  });
  const tableStyle: string = "w-32 border-solid border-blue-700 border-2 pr-2 pl-2  bg-zinc-50";
  const buttonStyle: string = "rounded-xl border-2 border-gray-300 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-zinc-50";

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "moderator view";
    document.body.style.backgroundImage = "url(assets/background.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
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
        isAnaRejected: false,
      }
    }
    UpdateArticleApproval(id, rejected);
    const updatedMod = modeQueue.filter((item: any) => item.id !== id);
    setModQueue(updatedMod);
    setDialog({
      title: "Article Rejected",
      message: "Unsuccessfully rejected by the Moderator",
      buttonValue: "Confirm",
      status: true,
    });
  }

  return ModeratorPageForm(dialog, closeDialog, modeQueue, tableStyle, buttonStyle, modAccept, modReject);
}
