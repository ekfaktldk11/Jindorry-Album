export default function ImgCard({ target, imgSource, imgInfo, imgSeq }) {
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

  div.innerHTML = `
    <div class='space'></div>
    <div class='moving-block'>
      <img class='loaded-img' src=${imgSource} alt='loaded img idx ${imgSeq}'>
      <div class='hidden-space'>
        <div class='hidden-div' >
          <i class='fa-solid fa-trash fa-2xl' data-yy=${imgInfo.yearMonth.yy} data-mm=${imgInfo.yearMonth.mm} data-file=${imgInfo.fileName}></i>
        </div>
        <div class='hidden-div'>
          <i class='fa-solid fa-up-right-and-down-left-from-center fa-2xl' data-src=${imgSource}></i>
        </div></div></div>`;
  //
  // ImgCard 컴포넌트 내부의 HTML 태그 작성을 어떤 방식으로 작성할 까 고민했음
  // 위처럼 작성하는 방식보다는 아래의 innerHTML을 작성해주면, 다수의 element에 대한 변수 생성이 줄어들고,
  // element의 attributes들을 하나하나 접근해서 수정해줄 필요도 없어짐
  // 이는 결국 변수 생성에 대한 메모리 사용도 적고 코드 길이도 줄어듬

  this.render = () => {
    target.appendChild(div);
  };
}
