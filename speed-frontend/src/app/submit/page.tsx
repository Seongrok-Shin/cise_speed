"use client";
import React, { useState } from "react";
import axios from "axios";
import DataInterface from "../interface/dataInterface";
import Form from "../component/submitForm";
import { CreateArticle } from "../../../pages/api/api";
import { Article } from "../../../types/article.interface";

/**
 * @author @Seongrok-Shin
 * Description
 * @returns {any}
 */

const SubmitPage = () => {
  const [data, setData] = useState<Article>({
    title: "",
    authors: [],
    journal: "",
    year: 0,
    volume: 0,
    pages: 0,
    DOI: "",
    claim: "",
    evidence: "",
    research: "",
    participant: ""    
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: any) => {
    if (e.target.name === "year" || e.target.name === "volume" || e.target.name === "pages") {
      // Parse the value as a number using parseFloat or parseInt
      const numericValue = parseFloat(e.target.value);
      setData({
        ...data,
        [e.target.name]: numericValue,
      });
    } else if (e.target.name === "authors") {
      // If the input field is for "authors," split the input by commas to create an array.
      const authorsArray = e.target.value.split(',');
      setData({
        ...data,
        authors: authorsArray,
      });
    } else {
      // For other fields, just update as usual.
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await CreateArticle(data);
      console.log(res);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return Form(handleChange, handleSubmit, data);
};

export default SubmitPage;
