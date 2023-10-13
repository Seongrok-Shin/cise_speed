"use client";
import IArticle from "../interface/IArticle";
import React from "react";
import Header from "./Header";

/**
 * @author @Seongrok-Shin
 * Description
 * @param {any} handleChange:any
 * @param {any} handleSubmit:any
 * @param {IArticle} data:DataInterface
 * @returns {any}
 */

function Form(handleChange: any, handleSubmit: any, data: IArticle) {
  return (
    <>
      <Header />
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
              name="authors"
              type="text"
              placeholder="Enter author"
              onChange={handleChange}
              value={data.authors}
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
            <label >Year: </label>
            <input
              name="year"
              type="number"
              placeholder="Enter year"
              onChange={handleChange}
              value={data.year}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-0 w-48 float-right appearance-none"
              required
            />
          </div>
          <div className="py-2">
            <label >Volume: </label>
            <input
              name="volume"
              type="number"
              placeholder="Enter volume"
              onChange={handleChange}
              value={data.volume}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-0 w-48 float-right appearance-none"
              required
            />
          </div>
          <div>
            <label>Pages: </label>
            <input
              name="pages"
              type="text"
              placeholder="Enter pages"
              onChange={handleChange}
              value={data.pages}
              data-testid="pages"
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-0 w-48 float-right appearance-none"
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
          <div className="py-2">
            <input
              name="status"
              type="text"
              placeholder="Enter Status"
              onChange={handleChange}
              value={data.status}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="claim"
              type="text"
              placeholder="Enter Claim"
              onChange={handleChange}
              value={data.claim}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="evidence"
              type="text"
              placeholder="Enter Evidence"
              onChange={handleChange}
              value={data.evidence}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="research"
              type="text"
              placeholder="Enter Research"
              onChange={handleChange}
              value={data.research}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2">
            <input
              name="participant"
              type="text"
              placeholder="Enter Participant"
              onChange={handleChange}
              value={data.participant}
              className="rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div className="py-2" >
            <select name="se_practice" onChange={handleChange} className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" required >
              <option>Mob Programming</option>
              <option>Pair Programming</option>
              <option>Test Driven Development (TDD)</option>
              <option>Agile Software Development</option>
              <option>Continuous Integration (CI)</option>
              <option>Others</option>
            </select>
          </div>
          <div>
            <button
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none
          focus:border-indigo-500 text-base px-4 py-2"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div></>
  );
}

export default Form;
