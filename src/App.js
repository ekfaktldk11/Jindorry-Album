import MainPage from './pages/MainPage.js';
import ImgListPage from './pages/ImgListPage.js';
import { init } from './router.js';

export default function App({ root }) {
  // ROUTE_CHANGE 이벤트 발생 시 마다 App의 this.route 함수가 호출되도록

  this.route = () => {
    const { pathname } = location;
    root.innerHTML = ''; // 얘로 인해 페이지가 변화될 때 마다 화면에 있는 컴포넌트들을 삭제하는 코드를 없애줄 수 있음
    if (pathname === '/') {
      new MainPage({ target: root }).render();
    } else if (pathname.indexOf('/imgs/') === 0){
      const [, , yy, mm] = pathname.split('/');
      new ImgListPage({
        target: root,
        yearMonth: {
          yy,
          mm
        }
      }).render();
    }
  };
  window.addEventListener('popstate', this.route);
  init(this.route);
  this.route();
}
