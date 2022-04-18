import { getImgs } from "../api.js";

export default function ImgContainer({target}){
  
  const div = document.createElement('div');
  this.render = () => {
    target.append(div);
  }
}