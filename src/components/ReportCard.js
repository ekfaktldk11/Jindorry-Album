export default function ReportCard({ target, message }) {
  const div = document.createElement('div');
  div.className = 'ReportCard';
  div.innerHTML = message;

  this.render = () => {
    target.appendChild(div);
  };
}
