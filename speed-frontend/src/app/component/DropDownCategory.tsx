import React, { useEffect, useState } from "react";
import { GetSEMethods } from "../../../pages/api/api";

const DropdownFilter = ({ dropDownFilter }: any) => {
  const [filter, setFilter] = useState("");
  const [methods, setMethods] = useState<Array<string>>([]);
  useEffect(() => {
    GetSEMethods().then((value: any) => { setMethods(value.methods) }) as Promise<Array<string> | void>;
  }, [])

  const handleChangeFilter = (event: any) => {
    setFilter(event.target.value);
    dropDownFilter(event.target.value);
  };

  return (
    <select
      className=" border-2 border-gray-300 focus:outline-none
          focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
    >
      <>{methods.map((category: any, index: number) => { return <option value={category} key={index}>{category}</option> })}</>
    </select>
  );
};

export default DropdownFilter;
