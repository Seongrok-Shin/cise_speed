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
  const tableStyle: string = "w-32 border-solid border-blue-700 border-2 pr-2 pl-2  bg-zinc-50";
  const buttonStyle: string = "rounded-xl border-2 border-gray-300 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-zinc-50";
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    buttonValue: "",
    status: false,
  })

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "analyst view"
    document.body.style.setProperty("background-image", "url(assets/background.png)");
    document.body.style.setProperty("background-repeat", "no-repeat");
    document.body.style.setProperty("background-size", "cover");
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

  return AnalystPageForm(dialog, closeDialog, modeQueue, tableStyle, buttonStyle, modAccept, modReject);
}
