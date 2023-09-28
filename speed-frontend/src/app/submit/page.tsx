"use client";
import React, { useState } from "react";
import axios from "axios";

const SubmitPage = () => {
  const [data, setData] = useState({
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
      const res = await axios.post("/api/submit", data);
      console.log(res);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <input
              name="title"
              type="text"
              placeholder="Enter title"
              onChange={handleChange}
              value={data.title}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div>
            <input
              name="author"
              type="text"
              placeholder="Enter author"
              onChange={handleChange}
              value={data.author}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="journal"
              type="text"
              placeholder="Enter journal"
              onChange={handleChange}
              value={data.journal}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div>
            <input
              name="year"
              type="date"
              placeholder="Enter year"
              onChange={handleChange}
              value={data.year}
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="volume"
              type="number"
              placeholder="Enter volume"
              onChange={handleChange}
              value={data.volume}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div>
            <input
              name="pages"
              type="number"
              placeholder="Enter pages"
              onChange={handleChange}
              value={data.pages}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="DOI"
              type="text"
              placeholder="Enter DOI"
              onChange={handleChange}
              value={data.DOI}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <button
            className="w-full rounded-xl border-2 border-gray-300 focus:outline-none
          focus:border-indigo-500 text-base px-4 py-2"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubmitPage;
