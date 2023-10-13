"use client";
import { useEffect, useState } from "react";
import Form from "../component/submitForm";
import IArticle from "../interface/IArticle";
import { CreateArticle } from "../../../pages/api/api";


/**
 * @author @Seongrok-Shin
 * Description
 * @returns {any}
 */

const SubmitPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0332CB";
  }, [])

  const [data, setData] = useState<IArticle>({
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
    se_practice: 'Mob Programming',
    is_approved: {
      isModerator: false,
      isAnalyst: false,
      isAnaRejected: false,
      isModRejected: false,
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      const res = await CreateArticle(data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return Form(handleChange, handleSubmit, data);
};

export default SubmitPage;
