import { getImg } from '../api.js';
import { imageDirURL } from '../static.js';
import { onDeleteImg } from '../events/imgEventHandler.js';
import ImgCard from '../components/ImgCard.js';
import ReportCard from '../components/ReportCard.js';

export default function ImgListPage({ target, yearMonth }) {
  // 이미지 컨테이너는 서버에서 받아온 이미지를 담는 그릇
  // 따라서 이미지의 개수가 달라지면 이미지컨테이너는 업데이트 됨과 동시에
  // 이미지를 새로 받아오고 받아온 이미지 만큼 이미지를 담아야함

  /**
   * ImgListPage 는 (1). 이미지 업로드, (2) 이미지 삭제 에 따라 달라지는 이미지 수가 변경되면
   * this.setState()를 통해 해당 페이지가 업데이트 되어야 함
   * 
   */
  this.state = null;

  this.setState = (files) => {
    this.state = files;
    this.render();
  };

  const div = document.createElement('div');
  div.className = 'img-container';

  const imgSourceHandler = (fileName) =>
    imageDirURL + yearMonth.yy + '/' + yearMonth.mm + '/' + fileName;

  const renderImgCard = () => {
    let i = 0;
    this.state.map((file) => {
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

  const renderNoImageMsg = () => {
    new ReportCard({
      target: div,
      message: '이미지가 존재하지 않습니다!',
    }).render();
  }
  
  this.render = () => {
    target.appendChild(div);
    div.innerHTML = '';
    {
      yearMonth &&
        getImg(yearMonth).then((files) => {
          this.setState(files);
          this.state.length ? renderImgCard() : renderNoImageMsg();
          onDeleteImg(this.render);
        });
    }
  };
}
