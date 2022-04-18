import { getImgs } from '../api.js';
import { imageDirURL } from '../static.js';
import ImgCard from './ImgCard.js';

export default function ImgContainer({ target, yearMonth }) {
  this.state = {
    files: [],
  };

  this.setFiles = (files) => {
    this.state.files = [...this.state.files, ...files];
  };
  const div = document.createElement('div');
  div.className = "ImgContainer";
  {
    yearMonth &&
      getImgs(yearMonth).then((files) => {
        //문제 발생
        this.setFiles(files.values());
        console.log(Array(files));
        console.log(this.state.files);
        console.log(typeof(this.state.files));
      });
  }

  this.render = () => {
    this.state.files.map((file) => {
      console.log(imageDirURL + file);
      new ImgCard({
        target:div,
        imgSource: imageDirURL + file
      }).render();
    });
    target.appendChild(div);
  };
}
