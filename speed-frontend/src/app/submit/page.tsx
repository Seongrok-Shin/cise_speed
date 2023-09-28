"use client";
import React, { useState } from "react";
import axios from "axios";
import DataInterface from "../interface/dataInterface";
import Form from "../component/submitForm";

/**
 * @author @Seongrok-Shin
 * Description
 * @returns {any}
 */

const SubmitPage = () => {
  const [data, setData] = useState<DataInterface>({
    title: "",
    author: [],
    journal: "",
    year: "",
    volume: "",
    pages: "",
    DOI: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(data);
      const res = await axios.post("/api/submit", data);
      console.log(res);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return Form(handleChange, handleSubmit, data);
};

export default SubmitPage;
