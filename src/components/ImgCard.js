export default function ImgCard({ target, imgSource, imgSeq }) {
  const div = document.createElement('div');
  div.className = 'img-card';
  // const img = document.createElement('img');
  // img.className = 'loaded-img';
  // img.src = imgSource;
  // const spaceDiv = document.createElement('div');
  // spaceDiv.className = 'space';
  // const movigBlockDiv = document.createElement('div');
  // movigBlockDiv.className = 'moving-block';
  // const hiddenSpaceDiv = document.createElement('div');
  // hiddenSpaceDiv.className = 'hidden-space';

  this.render = () => {
    div.innerHTML = `
    <div class='space'></div>
    <div class='moving-block'>
      <img class='loaded-img' src=${imgSource} alt='loaded img idx ${imgSeq}'>
      <div class='hidden-space'>
        <div class='hidden-div'>
          <i class='fa-solid fa-trash fa-2xl'></i>
        </div>
        <div class='hidden-div'>
          <i class='fa-solid fa-up-right-and-down-left-from-center fa-2xl'></i>
        </div></div></div>`;
    target.appendChild(div);
  };
}
