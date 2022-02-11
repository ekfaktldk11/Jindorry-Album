let baseUrl = 'http://localhost:3001/';

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
    if (node.id === 'loadedImg') {
      return true;
    }
  }
  return false;
};

// 달력 onchange event
const loadBtnHandler = async (id) => {
  if (loadedImgExist()) {
    document.getElementById('loadedImg').remove();
    //document.body.removeChild(document.getElementById('loadedImg'));
    document.getElementById('fileEdit').style.display = 'none';
  }

  let ym = document.getElementById(id).value;

  if (!ym) {
    // 달력 삭제 버튼 눌렀을 경우
    document.getElementById('optBtnContainer').style.display = 'none';
    return;
  }
  ym = ym.split('-');
  document.getElementById('optBtnContainer').style.display = 'flex';
  let div = document.createElement('div');
  div.id = 'loadedImg';

  getFileLen(ym[0], ym[1])
    .then((fileLen) => {
      if (fileLen > 0) {
        div.style =
          'margin: 0 auto;height: 130px;width: 90vw;white-space: nowrap;overflow-x: scroll;display: block;';
        for (let i = 0; i < fileLen; i++) {
          getFiles(i).then((result) => {
            let img = document.createElement('img');
            img.style =
              'height: 100px;width: 200px;object-fit: scale-down;display: inline-block;';
            img.src = URL.createObjectURL(result);
            img.alt = `loaded image num ${i + 1}`;
            div.appendChild(img);
          });
        }
      } else {
        // 해당되는 파일이 없으면 없다고 표기
        div.style = 'text-align:center;';
        div.innerHTML = '이미지가 존재하지 않습니다.';
      }
    })
    .then(() => {
      document.body.append(div);
    });
};

const uploadFile = (id) => {
  console.log(document.getElementById(id).attributes);
  let ym = document.getElementById('calendar').value;
  ym = ym.split('-');
}

const editModeEnable = () => {

}