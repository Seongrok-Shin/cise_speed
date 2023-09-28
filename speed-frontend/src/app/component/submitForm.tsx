"use client";
import DataInterface from "../interface/dataInterface";
import React from "react";

/**
 * @author @Seongrok-Shin
 * Description
 * @param {any} handleChange:any
 * @param {any} handleSubmit:any
 * @param {DataInterface} data:DataInterface
 * @returns {any}
 */

function Form(handleChange: any, handleSubmit: any, data: DataInterface) {
  return (
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
            type="text"
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
            type="text"
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
  );
}

export default Form;
