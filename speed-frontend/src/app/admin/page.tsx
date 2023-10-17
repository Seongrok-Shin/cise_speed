"use client";

import { useEffect, useState } from "react";
import { DeleteArticle, GetArticles } from "../../../pages/api/api";
import { AdminPageForm } from "../component/AdminForm";
export default function Admin() {
    const [modeQueue, setModQueue] = useState<any[]>([]);
    const tableStyle: string = " sm:w-[45px] md:w-[80px] lg:w-[140px] border-solid border-gray-300 border-2 pr-2 pl-2  bg-zinc-50 sm:text-xs md:text-md lg:text-lg break-all";
    const buttonRejectStyle: string = "sm:px-3 lg:px-5 rounded-xl border-2 border-red-600 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-sky-50 sm:text-xs md:text-md lg:text-lg";

    const [dialog, setDialog] = useState({
        title: "",
        message: "",
        firstButtonValue: "",
        secondButtonValue: "",
        status: false,
    })
    useEffect(() => {
        document.body.style.backgroundColor = "#0332CB";
        document.title = "admin view";
        document.body.style.overflow = "hidden";

        if (modeQueue.length === 0) { // Check if modeQueue is empty
            GetArticles().then((response: any) => {
                setModQueue(response.article);
            });
        }
    }, []);
    useEffect(() => {
    }, [modeQueue])

    function closeDialog() {
        setDialog({
            title: "",
            message: "",
            firstButtonValue: "",
            secondButtonValue: "",
            status: false,
        });
    }
    function cleanArticle(id: string) {
        DeleteArticle(id);
        const updatedMod = modeQueue.filter((item: any) => item.id !== id);
        setModQueue(updatedMod);
        setDialog({
            title: "Article Action",
            message: "Successfuly deleted the article in the database",
            firstButtonValue: "Confirm",
            secondButtonValue: "",
            status: true,
        });
    }


    return AdminPageForm(dialog, closeDialog, null, modeQueue, tableStyle, buttonRejectStyle, cleanArticle);
}
