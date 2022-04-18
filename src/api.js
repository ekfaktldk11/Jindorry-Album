import { baseURL } from "./static.js";

export const getImgs = (yearMonth) => {
  try {
    const response = await fetch(baseURL + `imgs?yy=${yearMonth.yy}?mm=${yearMonth.mm}`);
    if (response.ok){
      return await response.json();
    } 
    throw new Error("GET request failed");
  }
  catch (err){
    alert(err);
  }
}