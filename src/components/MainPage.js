import CalendarInput from "./CalendarInput.js";
import ImgContainer from "./ImgContainer.js";

export default function MainPage({ target }) {
  this.state = {
    yearMonth : undefined
  }
  const page = document.createElement('div');
  page.className = "main-page";
  page.innerHTML = "<h1>진도리의 앨범</h1>";

  const imgContainerInit = () => {
    let imgContainer = document.querySelector(".img-container");
    imgContainer && page.removeChild(document.querySelector(".img-container"));
  }

  this.setYearMonth = (yy, mm) => {
    this.state.yearMonth = {
      yy : yy,
      mm : mm
    }
    imgContainerInit();
    new ImgContainer({
      target:page,
      yearMonth: this.state.yearMonth
    }).render();
  }

  this.render = () => {
    target.appendChild(page);
    new CalendarInput({
      target: page,
      onCalendarUpdate: this.setYearMonth
    }).render();

    new ImgContainer({
      target:page,
      yearMonth: this.state.yearMonth
    }).render();
  }
}
