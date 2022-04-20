export default function ReportCard({ target, message }) {
  const div = document.createElement('div');
  div.className = 'report-card';
  div.innerHTML = message;

  this.render = () => {
    target.appendChild(div);
  };
}
