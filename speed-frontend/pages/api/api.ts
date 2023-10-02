import axios from "axios";
import { Article } from "../interface/article.interface";
export async function CreateArticle(article:Article){
    try{
        const response = await axios.post(`http://localhost:5000/article/upload/`, article,{
            headers: {
              "Access-Control-Allow-Origin": "", 
              "Access-Control-Allow-Methods": "GET", 
              "Access-Control-Allow-Headers": "Content-Type", 
            }}).then((data:any) => {
                alert("[successfully submitted]\n data result:" + JSON.stringify(data));
                console.log(JSON.stringify(data));
            });

        return response;
    }
    catch (error){
        alert(`error: ${error}`);
        console.error(`error: ${error}`);
       throw error;
    }
}