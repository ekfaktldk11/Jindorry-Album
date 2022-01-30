let baseUrl = 'http://localhost:3001/';
const getFileNames = async (yy, mm) => {
  const response = await fetch(baseUrl + 'loadImg', {
    method: 'GET',
    headers: {
      yy: yy,
      mm: mm,
    },
  });
  if (!response.ok) {
    alert("Error : Function Name 'getFileNames'");
    return;
  }
  return response.json();
};

const getFiles = async (path) => {
  const response = await fetch(path);
  if (!response.ok) {
    alert("Error : Function Name 'getFiles'");
    return;
  }
  return response.blob();
};

const loadBtnHandler = (id) => {
  let ym = document.getElementById(id).value;
  if (!ym) {
    // 달력이 나타내는 년/월 값이 공백일때 처리
    return;
    // document.getElementById('loadBtn').disabled = false;
  }
  ym = ym.split('-');
  getFileNames(ym[0], ym[1])
    .then((result) => {
      result.forEach((element) => {
        console.log(element);
        // let blob = getFiles(element);
        // let img = document.createElement('img');
        // document.body.append(img);
        // img.src = URL.createObjectURL(blob);
      });
    })
    .catch((err) => {});
  // fetchFiles(baseUrl + ym).then((result) => {
  //   console.log(result);
  //   // (0). 달력의 년/월 정보가 변경되었으니 전의 년/월 값에 해당되는 요소들을 삭제
  //   document.body.remove(document.getElementsByClassName('errMsg'));
  //   document.body.remove(document.getElementById('imgContainer'));
  //   // (1). 파일이 존재하는 경우
  //   // let imgContainer = document.createElement('div');
  //   // imgContainer.id = "imgContainer";
  //   // (2). 해당루트(폴더루트)가 존재 x
  //   // (3). 루트는 존재하지만 파일 존재 x
  // }).catch((err) => {
  //   // 위 resolve문을 실행하다 생긴 에러를 출력
  //   // fetch는 http error(400, 500번대) 상태를 reject 하지 않음
  //   console.log(err);
  //   // let errMsg = document.createElement('p');
  //   // errMsg.value = "파일정보를 받아오는데 실패했습니다";
  //   // errMsg.className="errMsg";
  //   // errMsg.style = 'align:center';
  //   // document.body.append(errMsg);
  // });
  // // else {
  // //   document.getElementById('loadBtn').disabled = true;
  // // }
};
