"use client";
import { useEffect, useState } from "react";
import SubmitPageForm from "../component/SubmitArticleForm";
import IArticle from "../interface/IArticle";
import { CreateArticle } from "../../../pages/api/api";
import { useRouter } from "next/navigation";

/**
 * @author @Seongrok-Shin
 * Description
 * @returns {any}
 */

const SubmitPage = () => {
  const router = useRouter();

  const [dialog, setDialog] = useState({
    title: "",
    message: "",
    firstButtonValue: "",
    secondButtonValue: "",
    status: false,
  })
  const initialDate = new Date().toLocaleDateString();
  const [data, setData] = useState<any>({
    title: '',
    authors: [],
    journal: '',
    year: 0,
    volume: 0,
    pages: 0,
    DOI: '',
    status: '',
    claim: '',
    result: false,
    evidence: '',
    research: '',
    participant: '',
    date: `${initialDate.toString()}`,
    se_practice: 'Others',
    is_approved: {
      isModerator: false,
      isAnalyst: false,
      isAnaRejected: false,
      isModRejected: false,
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "submission form";
    document.body.style.overflow = "visible";
  }, [dialog])

  function closeDialog() {
    setDialog({
      title: "",
      message: "",
      firstButtonValue: "",
      secondButtonValue: "",
      status: false,
    });
    router.push('search');
  }

  const handleChange = (e: any) => {
    if (e.target.name === "year" || e.target.name === "volume" || e.target.name === "pages") {
      const numericValue = parseFloat(e.target.value);
      setData({
        ...data,
        [e.target.name]: numericValue,
      });
    } else if (e.target.name === "authors") {
      const authorsArray = e.target.value.split(',');
      setData({
        ...data,
        authors: authorsArray,
      });
    }
    else if (e.target.name === "date") {
      setData({
        ...data,
        date: e.target.value,
      })
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    };
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await CreateArticle(data);

      setDialog({
        title: "Article Accepted",
        message: "Sucessfully submitted to the queue.",
        firstButtonValue: "Confirm",
        secondButtonValue: "",
        status: true,
      });

    } catch (err: any) {
      setDialog({
        title: "Article Rejected",
        message: `Unsuccessfully submitted to the queue. ${err}`,
        firstButtonValue: "Confirm",
        secondButtonValue: "",
        status: true,
      });
      setError(err);
    }
    setLoading(false);
  };


  return SubmitPageForm(handleChange, handleSubmit, data, dialog, closeDialog, null);
};

export default SubmitPage;
