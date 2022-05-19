import ImgContainer from './ImgContainer.js';
import { routeChange } from '../router.js';

export default function MainPage({ target }) {
  // this.state = {
  //   yy: null,
  //   mm: null
  // };

  const page = document.createElement('div');
  page.className = 'main-page';
  page.innerHTML = '<h1>진도리의 앨범</h1>';

  const input = document.createElement('input');
  input.type = 'month';
  input.id = 'calendar';

  input.addEventListener('change', function () {
    let yymm = this.value.split('-');
    // this.setState(yymm[0], yymm[1]);
    // 달력 input에서 x 버튼 클릭했을 때의 핸들링 필요
    routeChange(`/imgs/${yymm[0] + '/' + yymm[1]}`);
  });

  page.appendChild(input);

  // this.setState = (yy, mm) => {
  //   if (this.state == { yy, mm }) return;
  //   // 달력 input 의 change 이벤트에서 알아서 동일 값에 대한 이벤트 콜백을 실행하면 해당 if 문 삭제
  //   else if (!mm) {
  //     // 달력 input에서 x 버튼 클릭했을 때의 핸들링 필요
  //   }
  //   this.state = {
  //     yy,
  //     mm,
  //   };
  //   this.render();
  // };

  this.render = () => {
    target.appendChild(page);
  };
}
