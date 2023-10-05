import axios from "axios";
import { Article } from "../../types/article.interface";
/**
 * @author @dgw7626 Hanul Rheem
 * @description: creates new article
 * @param {any} article:Article
 * @returns {any}: void
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
 * @author @dgw7626 Hanul Rheem
 * @description: returns all articles
 * @returns {any}
 */
export async function GetArticles(){
    try{
        const response :object | void = await axios.get( "http://localhost:5000/article/all",{
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

/**
 * @author @dgw7626 Hanul Rheem
 * @description: returns single article with keyword
 * @param {any} anyValue:string
 * @returns {any}: Article
 */
export async function GetSingleArticle(anyValue: string){
    try{
        const response :object | void = await axios.get( `http://localhost:5000/article/${anyValue}`,
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

export async function GetArticleYear(year: number){
    try{
        const response :object | void = await axios.get( `http://localhost:5000/article/year/${year}`,
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

export async function GetArticleAuthor(author: string){
    try{
        const response :object | void = await axios.get( `http://localhost:5000/article/author/${author}`,
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

export async function GetArticleClaim(claim: string){
    try{
        const response :object | void = await axios.get( `http://localhost:5000/article/claim/${claim}`,
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

export async function GetArticleEvidence(evidence: string){
    try{
        const response :object | void = await axios.get( `http://localhost:5000/article/evidence/${evidence}`,
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

