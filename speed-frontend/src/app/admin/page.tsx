"use client";

import { useEffect, useState } from "react";
import Header from "../component/Header";
import { DeleteArticle, GetArticles, UpdateArticleApproval } from "../../../pages/api/api";
import { AdminPageForm } from "../component/AdminForm";
export default function Admin() {
    const [modeQueue, setModQueue] = useState<any[]>([]);
    const tableStyle: string = "w-32 border-solid border-blue-700 border-2 pr-2 pl-2  bg-zinc-50";
    const buttonStyle: string = "rounded-xl border-2 border-gray-300 focus:outline-none focus:border-black text-base font-medium text-gray-700 hover:bg-gray-100  bg-zinc-50";
    const [dialog, setDialog] = useState({
        title: "",
        message: "",
        buttonValue: "",
        status: false,
    })
    useEffect(() => {
        document.body.style.backgroundColor = "#0332CB";
        document.title = "admin view";
        document.body.style.setProperty("background-image", "url(assets/background.png)");
        document.body.style.setProperty("background-repeat", "no-repeat");
        document.body.style.setProperty("background-size", "cover");
        if (modeQueue.length === 0) { // Check if modeQueue is empty
            GetArticles().then((response: any) => {
                setModQueue(response.article);
            });
        }
    }, []);
    useEffect(() => {
        if (modeQueue.length > 0) {
            console.log('modeQueue has changed:', modeQueue);
        }
    }, [modeQueue])

    function closeDialog() {
        setDialog({
            title: "",
            message: "",
            buttonValue: "",
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
            buttonValue: "Confirm",
            status: true,
        });
    }


    return AdminPageForm(dialog, closeDialog, modeQueue, tableStyle, buttonStyle, cleanArticle);
}
