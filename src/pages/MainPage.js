import { routeChange } from '../router.js';

export default function MainPage({ target }) {
  // MainPage에 state 값이 필요없어졌다 !
  const page = document.createElement('div');
  page.className = 'main-page';
  page.innerHTML = '<h1>진도리의 앨범</h1>';

  const input = document.createElement('input');
  input.type = 'month';
  input.id = 'calendar';

  input.addEventListener('change', function () {
    let yymm = this.value.split('-');
    routeChange(`/imgs/${yymm[0] + '/' + yymm[1]}`);
  });

  page.appendChild(input);

  this.render = () => {
    target.appendChild(page);
  };
}
