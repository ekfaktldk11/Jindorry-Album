let baseUrl = 'http://localhost:3001/';

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
  return response.json();
};

const getFiles = async (idx) => {
  const response = await fetch(baseUrl + 'files', {
    method: 'GET',
    headers: {
      idx: idx,
    },
  });
  if (!response.ok) {
    alert("Error : Function Name 'getFiles'");
    return;
  }
  return response.blob();
};

const loadedImgExist = () => {
  for (let node of document.body.childNodes){
    if (node.id === 'loadedImg'){
      return true
    }
  }
  return false
}

const loadBtnHandler = async (id) => {
  if(loadedImgExist()){
    document.getElementById('loadedImg').remove();
    //document.body.removeChild(document.getElementById('loadedImg'));
  }

  let ym = document.getElementById(id).value;

  if(!ym) return; // 달력 삭제 버튼 눌렀을 경우

  ym = ym.split('-');
  let div = document.createElement('div');
  div.id = 'loadedImg'

  getFileLen(ym[0], ym[1]).then((fileLen) => {
    if (fileLen > 0) {
      div.style =
        'margin: 0 auto;height: 130px;width: 90vw;white-space: nowrap;overflow-x: scroll;display: block;';
      for (let i = 0; i < fileLen; i++) {
        getFiles(i).then((result) => {
          let img = document.createElement('img');
          img.style =
            'height: 100px;width: 200px;object-fit: scale-down;display: inline-block;';
          img.src = URL.createObjectURL(result);
          img.alt = `loaded Image num ${i + 1}`;
          div.appendChild(img);
        });
      }
    } else {
      // 해당되는 파일이 없으면 없다고 표기
      div.style = 'text-align:center;'
      div.innerHTML = '이미지가 존재하지 않습니다.';
    }
  }).then(() => {
    document.body.append(div);
  });
};