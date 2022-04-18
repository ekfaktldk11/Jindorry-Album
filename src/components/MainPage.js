import ImgContainer from "./ImgContainer.js";

export default function MainPage({ target }) {
  this.state = {
    yearMonth : undefined
  }
  const page = document.createElement('div');

  const getYearMonth = () => {
    return this.state.yearMonth;
  }

  const setYearMonth = (yy, mm) => {
    this.state.yearMonth = {
      yy : yy,
      mm : mm
    }
    ImgContainer({
      target:page,
      onCalendarUpdate: this.setYearMonth
    })
  }

  page.innerHTML = "<h1>진도리의 앨범</h1>";
  this.render = () => {
    target.appendChild(page);
  }
}
