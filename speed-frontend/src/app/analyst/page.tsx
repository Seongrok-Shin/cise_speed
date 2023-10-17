"use client";

import { useEffect, useState } from "react";
import Header from "../component/Header";
import { DeleteArticle, GetArticles, UpdateArticleApproval, UpdatePracticeMethod } from "../../../pages/api/api";
import IArticle from "../interface/IArticle";
import AlertDialog from "../component/Alert";
import { AnalystPageForm } from "../component/AnalystForm";
export default function AnalystView() {

  const [articles, setArticles] = useState<any>([]);
  const [modeQueue, setModQueue] = useState<any[]>([]);
  const [data, setData] = useState<any>({
    targetValue: "",
    id: ""
  });
  const tableStyle: string = " sm:w-[45px] md:w-[80px] lg:w-[140px] border-solid border-gray-300 border-2 pr-2 pl-2  bg-zinc-50 sm:text-xs md:text-md lg:text-lg break-all";
  const buttonRejectStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-red-600 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-sky-50 sm:text-xs md:text-md lg:text-lg";
  const buttonAcceptStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-sky-300 focus:outline-none focus:border-black text-base font-medium hover:bg-gray-100 hover:text-gray-700 text-white bg-sky-600 sm:text-xs md:text-md lg:text-lg";
  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    firstButtonValue: "",
    secondButtonValue: "",
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
  }, [data]);

  function modAccept(id: string) {
    const methods = { se_practice: data.targetValue.trim() };
    UpdatePracticeMethod(id, methods);
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
  }

  function handleChange(e: any) {

    if (e.target.name === 'se_practice') {
      setData({ ...data, targetValue: e.target.value });
    }
  }

  function analystConfirm(id: string) {
    setData({ ...data, id: id });
    setDialog({
      title: "Anaylst Accepted",
      message: `Sucessfully added software engineering method: ${data.targetValue}`,
      firstButtonValue: "Accept",
      secondButtonValue: "Reject",
      status: true,
    });
  }

  function rejectDialog() {
    modReject(data.id)
    setDialog({
      title: "",
      message: "",
      firstButtonValue: "",
      secondButtonValue: "",
      status: false,
    });
  }
  function openDialog() {
    modAccept(data.id);
    setDialog({
      title: "",
      message: "",
      firstButtonValue: "",
      secondButtonValue: "",
      status: false,
    });
  }


  return AnalystPageForm(dialog, openDialog, rejectDialog, modeQueue, tableStyle, buttonAcceptStyle, analystConfirm, handleChange, data);
}
