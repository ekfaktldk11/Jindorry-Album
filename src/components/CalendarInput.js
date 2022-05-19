export default function CalendarInput({ target, onCalendarUpdate }) {
  const input = document.createElement('input');
  input.type = 'month';
  input.id = 'calendar';

  input.addEventListener('change', function () {
    let yymm = this.value.split('-');
    //onCalendarUpdate(yymm[0], yymm[1]);
  });

  this.render = () => {
    target.appendChild(input);
  };
}
