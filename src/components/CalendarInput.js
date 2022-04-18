export default function CalendarInput({target, onCalendarUpdate}){
  this.state = {
    inputMode : false
  }
  const div = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'month';
  input.id = 'calendar';
  div.appendChild(input);
  input.addEventListener('change', function(){
    console.log(this);
    console.log(this.value);
  })

  this.render = () => {
    target.appendChild(div);
  }
}