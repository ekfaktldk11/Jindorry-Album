export default function ImgCard({target, imgSource}){
  console.log(imgSource);
  const img = document.createElement('img');
  img.src = imgSource;

  this.render = () => {
    target.appendChild(img);
  }
}