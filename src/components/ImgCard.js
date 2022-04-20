export default function ImgCard({target, imgSource}){
  const img = document.createElement('img');
  img.src = imgSource;
  img.className = "ImgCard";

  this.render = () => {
    target.appendChild(img);
  }
}