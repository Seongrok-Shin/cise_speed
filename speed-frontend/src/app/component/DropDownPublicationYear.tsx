import React, { useEffect, useState } from "react";
import { GetArticles } from "../../../pages/api/api";

const DropdownYearFilter = ({ dropDownYearFilter }: any) => {
    const [filter, setFilter] = useState("");
    const [articles, setArticles] = useState([]);
    const [years, setYears] = useState<Array<void | number>>([]);
    const [sortedYear, setSortedYear] = useState<Array<void | number>>([]);
    useEffect(() => {
        if (sortedYear && Object.keys(sortedYear).length !== 0) {
            return;
        }
        const fetchArticles = async () => {
            await GetArticles().then((response: any,) => { setArticles(response.article) });
            articles.map((response: any) => { years.push(response.year) });
            setSortedYear(years.filter((value: any, index: number) => years.indexOf(value) === index));
        }
        fetchArticles();
    }, [sortedYear]);

    const handleChangeFilter = (event: any) => {
        setFilter(event.target.value);
        dropDownYearFilter(event.target.value);
    };

    return (
        <select
            className=" border-2 border-gray-300 focus:outline-none
          focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100"
            name="filter"
            value={filter}
            onChange={handleChangeFilter}
        >
            <>{sortedYear.map((category: any, index: number) => { return <option value={category} key={index}>{category}</option> })}</>
        </select>
    );
};

export default DropdownYearFilter;
