import { getImg } from '../api.js';
import { imageDirURL } from '../static.js';
import { onDeleteImg, onExtendImg } from '../events/imgEventHandler.js';
import ImgCard from './ImgCard.js';
import ReportCard from './ReportCard.js';

export default function ImgContainer({ target, yearMonth, imgContainerInit }) {
  // 이미지 컨테이너는 서버에서 받아온 이미지를 담는 그릇
  // 따라서 이미지의 개수가 달라지면 이미지컨테이너는 업데이트 됨과 동시에
  // 이미지를 새로 받아오고 받아온 이미지 만큼 이미지를 담아야함
  this.state = {
    files: null,
  };

  this.setFiles = (files) => {
    this.state.files = files;
  };

  const div = document.createElement('div');
  div.className = 'img-container';

  const imgSourceHandler = (fileName) =>
    imageDirURL + yearMonth.yy + '/' + yearMonth.mm + '/' + fileName;

  const renderImgCard = () => {
    let i = 0;
    this.state.files.map((file) => {
      new ImgCard({
        target: div,
        imgSource: imgSourceHandler(file),
        imgInfo: {
          yearMonth: yearMonth,
          fileName: file,
        },
        imgSeq: i++,
      }).render();
    });
  };

  const renderNoImageMsg = () =>
    new ReportCard({
      target: div,
      message: '이미지가 존재하지 않습니다!',
    }).render();

  this.render = () => {
    target.appendChild(div);
    {
      yearMonth &&
        getImg(yearMonth).then((files) => {
          this.setFiles(files);
          this.state.files.length ? renderImgCard() : renderNoImageMsg();
          onDeleteImg(imgContainerInit);
          onExtendImg();
        });
    }
  };
}
