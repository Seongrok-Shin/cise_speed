import axios from "axios";
import { Article } from "../../types/article.interface";
/**
 * Description
 * @author @dgw7626
 * @param {any} article:Article
 * @returns {any}
 */
export async function CreateArticle(article:Article){
    try{
        const response = await axios.post(`http://localhost:5000/article/upload/`, article,{
            headers: {
              "Access-Control-Allow-Origin": "", 
              "Access-Control-Allow-Methods": "POST", 
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

/**
 * Description
 * @returns {any}
 */
export async function GetArticles(){
    try{
        const response :object | void = await axios.get("http://localhost:5000/article/all",{
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
            alert(JSON.stringify(data.data));
            console.log(JSON.stringify(data.data));
        });
        return response;
    }
    catch(error){
        alert(error);
        console.error(`error${error}`);
        throw error;
    }
}

export async function GetSingleArticle(title: string){
    try{
        const response :object | void = await axios.get(`http://localhost:5000/article/${title}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
            alert(JSON.stringify(data.data));
            console.log(JSON.stringify(data.data))
          });
          return response;
    }
    catch (error) {
        alert(error);
        console.error(`error${error}`);
        throw error;
    }
}