"use client";
import IArticle from "../interface/IArticle";
import React from "react";
import Header from "./Header";
import AlertDialog from "./Alert";

/**
 * @author @Seongrok-Shin
 * Description
 * @param {any} handleChange:any
 * @param {any} handleSubmit:any
 * @param {IArticle} data:DataInterface
 * @returns {any}
 */

function SubmitPageForm(handleChange: any, handleSubmit: any, data: IArticle, { title, message, buttonValue, status }: any, closeDialog: any) {
  return (
    <>
      <Header />
      {AlertDialog(title, message, buttonValue, status, closeDialog)}
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <input
              name="title"
              type="text"
              placeholder="Enter title"
              onChange={handleChange}
              value={data.title}
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="text-white" >Year: </label>
            <input
              name="year"
              type="number"
              placeholder="Enter year"
              onChange={handleChange}
              value={data.year}
              className=" rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-0 w-48 float-right appearance-none"
              required
            />
          </div>
          <div className="py-2">
            <label className="text-white">Volume: </label>
            <input
              name="volume"
              type="number"
              placeholder="Enter volume"
              onChange={handleChange}
              value={data.volume}
              className=" rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-0 w-48 float-right appearance-none"
              required
            />
          </div>
          <div>
            <label className="text-white">Pages: </label>
            <input
              name="pages"
              type="text"
              placeholder="Enter pages"
              onChange={handleChange}
              value={data.pages}
              data-testid="pages"
              className=" rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-0 w-48 float-right appearance-none"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
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
            </select>
          </div>
          <div>
            <button
              className="w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 bg-zinc-50"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div></>
  );
}

export default SubmitPageForm;
