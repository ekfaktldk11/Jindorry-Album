const express = require('express'); // express 프레임워크 import
const app = express(); // express를 통해 서버 환경 구축
const port = 3000; // 3001 포트 사용
const path = require('path');
const fs = require('fs');

// view engine 을 html로 사용
app.set('views', path.join(__dirname, '..'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '..')));

const imgPath = path.join(__dirname, '../public/image/');

// 폴더 유무 체크하고 없으면 폴더 생성
const checkImgFolder = (yy, mm) => {
  let yearPath = imgPath + yy;
  let monthPath = imgPath + yy + '/' + mm;
  if (fs.existsSync(yearPath)) {
    if (!fs.existsSync(monthPath)) fs.mkdirSync(monthPath);
  } else {
    fs.mkdirSync(yearPath);
    fs.mkdirSync(monthPath);
  }
  return monthPath
};

app.get('/', function(req, res){
  res.render('index.html');
})

app.get('/img', function(req, res){
  let monthPath = checkImgFolder(req.query.yy, req.query.mm);
  fs.readdir(monthPath, (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send('server error');
    }
    res.json(files);
  });
})

app.delete('/img', function(req, res){
  let monthPath = checkImgFolder(req.headers.yy, req.headers.mm);
  fs.unlink(monthPath.concat('/', req.headers.file), (err) => {
    console.log(monthPath);
    if (err){
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log('unlink worked');
      res.status(204).json();
    }
  })
})

// express 서버 열기
app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
