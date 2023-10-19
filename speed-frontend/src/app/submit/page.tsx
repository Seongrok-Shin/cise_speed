"use client";
import { useEffect, useState } from "react";
import SubmitPageForm from "../component/SubmitArticleForm";
import IArticle from "../interface/IArticle";
import { CreateArticle } from "../../../pages/api/api";
import { useRouter } from "next/navigation";
import { parseBibFile, normalizeFieldValue } from "bibtex";

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
  const [jsonData, setJsonData] = useState<any>({});

  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
    document.title = "submission form";
    document.body.style.overflow = "visible";
  }, [dialog, jsonData])

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
          const bibtex = event.target.result as string;
          const parsedData: any = parseBibFile(bibtex);

          if (parsedData != null) {
            if (parsedData.entries) { // Check if 'entries' is defined
              // Iterate through BibTeX entries and log the "author" field for each entry
              const entries = parsedData.entries$;
              const extractedEntries = [];

              for (const entryId in entries) {
                const entry = entries[entryId];
                const author = entry.fields.author ? entry.fields.author.data.join(" ") : "Author not found";
                const title = entry.fields.title ? entry.fields.title.data.join(" ") : "Title not found";
                const journal = entry.fields.journal ? entry.fields.journal.data.join(" ") : "Journal not found";

                extractedEntries.push({ author, title, journal });
              }

              console.log(JSON.stringify(extractedEntries));
            } else {
              console.log("No BibTeX entries found.");
            }
          }

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


  return SubmitPageForm(handleChange, handleSubmit, data, dialog, closeDialog, null, submitFile, JSON.stringify(jsonData));
};

export default SubmitPage;
