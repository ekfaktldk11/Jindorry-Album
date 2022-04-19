import { getImgs } from '../api.js';
import { imageDirURL } from '../static.js';
import ImgCard from './ImgCard.js';

export default function ImgContainer({ target, yearMonth }) {
  this.state = {
    files: null,
  };

  this.setFiles = (files) => {
    this.state.files = files;
  };

  const imgSourceHandler = (fileName) =>
    imageDirURL + yearMonth.yy + '/' + yearMonth.mm + '/' + fileName;

  const div = document.createElement('div');
  div.className = 'ImgContainer';
  
  const renderImgCard = () => {
    this.state.files.map((file) => {
      new ImgCard({
        target: div,
        imgSource: imgSourceHandler(file),
      }).render();
    });
  }

  const renderNoImageText = () => {
    const noImageText = document.createElement('p');
    noImageText.innerHTML("이미지가 존재하지 않습니다!");
    noImageText.className = "NoImageText";
    div.appendChild(noImageText);
  }

  this.render = () => {
    target.appendChild(div);
    {
      yearMonth &&
        getImgs(yearMonth)
          .then((files) => {
            this.setFiles(files);
          })
          .then(() => {
            this.state.files ? renderImgCard() : renderNoImageText();
          });
    }
  };
}
