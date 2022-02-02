let express = require('express'); // express 프레임워크 import
let app = express(); // express를 통해 서버 환경 구축
let port = 3001; // 3001 포트 사용
let path = require('path');

// view engine 을 html로 사용
app.set('views', path.join(__dirname, '/code/html'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// css, js 파일 사용을 위해 기본 path를 /code 로 설정
app.use(express.static(path.join(__dirname, 'code')));

let fs = require('fs');
let imagePath = path.join(__dirname, 'public/image/');

// 폴더 유무 체크하고 없으면 폴더 생성
const checkFolder = (yr, mth) => {
  let yearPath = imagePath + yr;
  let monthPath = imagePath + yr + '/' + mth;
  if (fs.existsSync(yearPath)) {
    if (fs.existsSync(monthPath)) {
      console.log('년/월 폴더 둘다 존재');
    } else fs.mkdirSync(monthPath);
  } else {
    fs.mkdirSync(yearPath);
    fs.mkdirSync(monthPath);
  }
  return monthPath;
};

app.get('/', function (req, res) {
  res.render('index.html');
});

let monthPath = '';
let fileList = [];

app.get('/num-of-files', function (req, res) {
  monthPath = checkFolder(req.headers.yy, req.headers.mm);
  fs.readdir(monthPath, (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send('server error');
    }
    fileList = files.map((item) => path.join(monthPath, item));
    res.json(fileList.length);
  });
});

app.get('/files', function (req, res) {
  res.sendFile(fileList[req.headers.idx])
});

// express 서버 열기
app.listen(port, () => {
  // port, hostName, () 으로 인자를 하나 추가하여 직접 호스트명 선언 가능
  console.log(`express is running on ${port}`);
});
