import axios from "axios";
import { Article } from "../../types/article.interface";
import AlertDialog from "@/app/component/Alert";
/**
 * @author @dgw7626 Hanul Rheem
 * @description: creates new article
 * @param {any} article:Article
 * @returns {any}: void
 */
const hostAddress: string | void = process.env.NEXT_PUBLIC_BACKEND_LOCAL_ADDRESS;

export async function CreateArticle(article:Article){
    try{
        const response = await axios.post(`${hostAddress}article/upload/`, article,{
            headers: {
              "Access-Control-Allow-Origin": "", 
              "Access-Control-Allow-Methods": "POST", 
              "Access-Control-Allow-Headers": "Content-Type", 
            }}).then((data:any) => {
            });

        return response;
    }
    catch (error){
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
        const response :object | void = await axios.get( `${hostAddress}article/all`,{
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
            return data.data;
        });
        return response;
    }
    catch(error){
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
        const response :object | void = await axios.get( `${hostAddress}article/${anyValue}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
            return data.data;
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
        throw error;
    }
}

export async function DeleteArticle(id:string){
    try{
        const response :object | void = await axios.delete( `${hostAddress}article/delete/${id}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "DELETE", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
    }
}

export async function UpdateArticleApproval(id:string, updateArticle: any){
    try{
        const response :object | void = await axios.patch( `${hostAddress}article/update/${id}`, updateArticle,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "PATCH", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
    }
}

export async function GetArticleByPracticeSE(method: string){
    try{
        const response :object | void = await axios.get( `${hostAddress}article/methods/se_practice/${method}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
            return data.data;
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
    }
}

export async function GetArticleYear(year: number){
    try{
        const response :object | void = await axios.get( `${hostAddress}article/year/${year}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
            return data.data;
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
        throw error;
    }
}

export async function GetArticleAuthor(author: string){
    try{
        const response :object | void = await axios.get( `${hostAddress}article/author/${author}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
        throw error;
    }
}

export async function GetArticleClaim(claim: string){
    try{
        const response :object | void = await axios.get( `${hostAddress}article/claim/${claim}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
          });
          return response;
    }
    catch (error) {
        console.error(`error${error}`);
        throw error;
    }
}

export async function GetArticleEvidence(evidence: string){
    try{
        const response :object | void = await axios.get( `${hostAddress}article/evidence/${evidence}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => {
          });
          return response;
    }
    catch (error) {
        alert(error);
        console.error(`error${error}`);
        throw error;
    }
}

export async function GetSEMethods(){
    try{
        const response : Array<string> | void = await axios.get(`${hostAddress}article/methods/SE`,{
            headers: {
                "Access-Control-Allow-Origin": "", 
                "Access-Control-Allow-Methods": "GET", 
                "Access-Control-Allow-Headers": "Content-Type", 
              }
        }).then((data:any) => { 
            return data.data;
        });
        return response;
    }catch(error){
        console.error(`error: ${error}`);
        throw error;
    }
}