let baseUrl = 'http://localhost:3001/';

const imgCardStyling = () => {
  document.getElementsByClassName('img-card').style = 'display : flex;position: relative;margin: 10px;width: 250px;height: 200px;z-index: 1;';
  document.getElementsByClassName('space').style = 'width: 50px;';
  document.getElementsByClassName('loaded-imgs').style = 'position: absolute;left: 50px;width: 200px;height: 200px;z-index: 2;object-fit: scale-down;';
  document.getElementsByClassName('hidden-space').style = 'position: absolute;left: 200px;width: 50px;display: flex;flex-direction: column;height: 100%;';
  document.getElementsByClassName('moving-block').addEventListener("mouseover", () => {
    console.log(this);
  })
  document.getElementsByClassName('hidden-div').style = 'display: flex;flex: 1;justify-content: center;align-items: center;margin-left: 5px;';
  // document.getElementsByClassName
};

const imgCard = (item, idx) => {
  let trashIcon = 'fa-solid fa-trash fa-2xl';
  let extenseIcon = 'fa-solid fa-up-right-and-down-left-from-center fa-2xl';
  card.addEventListener
  let card = document.createElement('div');
  let space = document.createElement('div');
  let movingBlock = document.createElement('div');
  let img = document.createElement('img');
  let hiddenSpace = document.createElement('div');
  let hiddenDiv1 = document.createElement('div');
  let hiddenDiv2 = document.createElement('div');
  let hiddenIcon1 = document.createElement('i');
  let hiddenIcon2 = document.createElement('i');

  hiddenIcon1.className = trashIcon;
  hiddenIcon2.className = extenseIcon;
  hiddenDiv1.appendChild(hiddenIcon1);
  hiddenDiv2.appendChild(hiddenIcon2);
  hiddenSpace.append(hiddenDiv1, hiddenDiv2); // 이거 되나?

  img.src = URL.createObjectURL(item);
  img.alt = `loaded image num ${idx + 1}`;

  movingBlock.append(img, hiddenSpace);
  card.append(space, movingBlock);
  
  hiddenDiv1.className = 'hidden-div';
  hiddenDiv2.className = 'hidden-div';
  img.className = 'loaded-imgs'
  card.className = 'img-card';
  space.className = 'space';
  movingBlock.className = 'moving-block';
  hiddenSpace.className = 'hidden-space';

  return card;
};

// 이미지 개수 받아오기
const getFileLen = async (yy, mm) => {
  const response = await fetch(baseUrl + 'num-of-files', {
    method: 'GET',
    headers: {
      yy: yy,
      mm: mm,
    },
  });
  if (!response.ok) {
    alert("Error : Function Name 'getFileLen'");
    return;
  }
  return await response.json();
};

// 이미지(blob 파일) 받아오기
const getFiles = async (idx) => {
  const response = await fetch(baseUrl + 'file', {
    method: 'GET',
    headers: {
      idx: idx,
    },
  });
  if (!response.ok) {
    alert("Error : Function Name 'getFiles'");
    return;
  }
  return await response.blob();
};

// 불러온 이미지 파일의 개수가 0일때
const loadedImgExist = () => {
  for (let node of document.body.childNodes) {
    if (node.id === 'loaded-img') {
      return true;
    }
  }
  return false;
};

// 달력 onchange event
const loadBtnHandler = async (id) => {
  if (loadedImgExist()) {
    document.getElementById('loaded-img').remove();
    //document.body.removeChild(document.getElementById('loaded-img'));
    document.getElementById('file-edit').style.display = 'none';
  }

  let ym = document.getElementById(id).value;

  if (!ym) {
    // 달력 삭제 버튼 눌렀을 경우
    document.getElementById('opt-btn-container').style.display = 'none';
    return;
  }
  ym = ym.split('-');
  document.getElementById('opt-btn-container').style.display = 'flex';
  let div = document.createElement('div');
  div.id = 'loaded-img';

  getFileLen(ym[0], ym[1])
    .then((fileLen) => {
      if (fileLen > 0) {
        div.style =
          'margin: 0 auto;height: 130px;width: 90vw;white-space: nowrap;overflow-x: scroll;display: block;';
        for (let i = 0; i < fileLen; i++) {
          getFiles(i).then((result) => {
            div.appendChild(imgCard(result, i));
            // let img = document.createElement('img');
            // img.style =
            //   'height: 100px;width: 200px;object-fit: scale-down;display: inline-block;';
            // img.src = URL.createObjectURL(result);
            // img.alt = `loaded image num ${i + 1}`;
            // div.appendChild(img);
          });
        }
      } else {
        // 해당되는 파일이 없으면 없다고 표기
        div.style = 'text-align:center;';
        div.innerHTML = '이미지가 존재하지 않습니다.';
      }
    })
    .then(() => {
      imgCardStyling();
      document.body.append(div);
    });
};

const uploadFile = (id) => {
  console.log(document.getElementById(id).attributes);
  let ym = document.getElementById('calendar').value;
  ym = ym.split('-');
};

const editModeEnable = () => {};
