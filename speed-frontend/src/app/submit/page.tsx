"use client";
import { useEffect, useState } from "react";
import SubmitPageForm from "../component/SubmitArticleForm";
import IArticle from "../interface/IArticle";
import { CreateArticle } from "../../../pages/api/api";
import { useRouter } from "next/navigation";
import { BibtexParser } from "bibtex-js-parser";

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
  const [tempData, setTempData] = useState<any>({
    doi: [],
    authors: [],
    journal: [],
    pages: [],
    title: [],
    volume: [],
    year: [],
  });

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
  }, [dialog, data, tempData])

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


  function submitFile(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        if (event.target != null) {
          const bibtexData = event.target.result as string;
          const parsedData: any[] = BibtexParser.parseToJSON(bibtexData);
          const extractedData = parsedData.map((item: any) => {
            if (tempData.doi[0] == null && item.doi != null) {
              tempData.doi.push(item.doi);
            }
            if (tempData.authors[0] == null && item.author != null) {
              tempData.authors.push(item.author);
            }
            if (tempData.journal[0] == null && item.journal != null) {
              tempData.journal.push(item.journal);
            }
            if (tempData.pages[0] == null && item.pages != null) {
              tempData.pages.push(parseInt(item.pages.split('--')[1]));
            }
            if (tempData.title[0] == null && item.title != null) {
              tempData.title.push(item.title);
            }
            if (tempData.volume[0] == null && item.volume != null) {
              tempData.volume.push(parseInt(item.volume));
            }
            if (tempData.year[0] == null && item.year != null) {
              tempData.year.push(parseInt(item.year));
            }
            return tempData;
          });
          setData({
            ...data,
            title: String(tempData.title[0]),
            DOI: String(tempData.doi[0]),
            authors: tempData.authors,
            journal: String(tempData.journal[0]),
            pages: Number(tempData.pages[0]),
            volume: Number(tempData.volume[0]),
            year: Number(tempData.year[0]),
          });


        }
      };
      reader.readAsText(file);
    }
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

      if (tempData.title[0] != null || tempData.doi[0] != null || tempData.authors[0] != null || tempData.journal[0] != null || tempData.pages[0] != null || tempData.year[0] != null) {
        setData({
          ...data,
          title: String(tempData.title[0]),
          DOI: String(tempData.doi[0]),
          authors: String(tempData.authors[0]),
          journal: String(tempData.journal[0]),
          pages: Number(tempData.pages[0]),
          volume: Number(tempData.volume[0]),
          year: Number(tempData.year[0]),
        });
      }

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


  return SubmitPageForm(handleChange, handleSubmit, data, dialog, closeDialog, null, submitFile);
};

export default SubmitPage;
