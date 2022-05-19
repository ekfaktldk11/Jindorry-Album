import MainPage from './components/MainPage.js';
import ImgContainer from './components/ImgContainer.js';
import { init } from './router.js';

export default function App({ root }) {
  const { pathname } = location;
  
  // ROUTE_CHANGE 이벤트 발생 시 마다 App의 this.route 함수가 호출되도록

  this.route = () => {
    console.log(pathname);
    if (pathname === '/') {
      new MainPage({ target: root }).render();
    } else if (pathname.indexOf('/imgs/') === 0){
      const [, yy, mm] = pathname.split('/');
      new ImgContainer({
        target: root,
        yearMonth: {
          yy,
          mm
        }
      }).render();
    }
  };
  init(this.route);
  this.route();
}
