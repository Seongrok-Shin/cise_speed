import React, { useState } from "react";

const DropdownFilter = () => {
  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <select
      className="rounded-xl border-2 border-gray-300 focus:outline-none
          focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
    >
      <option value="all">Filter SE Method</option>
      <option value="tdd">TDD</option>
      <option value="date">etc</option>
    </select>
  );
};

export default DropdownFilter;
