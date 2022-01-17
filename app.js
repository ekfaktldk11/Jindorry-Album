let express = require('express');  // express 프레임워크 import
let app = express(); // express를 통해 서버 환경 구축
let port = 3001; // 3001 포트 사용
let path = require('path');

// view engine 을 html로 사용
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

// css, js 파일 사용을 위해 기본 path를 /public 으로 설정
app.use(express.static(path.join(__dirname, 'public')));

let fs = require('fs');
let imagePath = path.join(__dirname, 'public/image/');

// 폴더 유무 체크하고 없으면 폴더 생성
const checkFolder = (yr, mth) => {
    let yearPath = imagePath+yr;
    let monthPath = imagePath+yr+'/'+mth;
    if (fs.existsSync(yearPath)) {
        if (fs.existsSync(monthPath)){
            console.log("년/월 폴더 둘다 존재");
        }
        else fs.mkdirSync(monthPath);
    }
    else {
        fs.mkdirSync(yearPath);
        fs.mkdirSync(monthPath);
    }
    return monthPath;
}

app.get('/', function(req, res){
    res.render('index.html');
})

app.get('/loadImg', function(req, res){
    let monthPath = checkFolder(req.headers.yy, req.headers.mm);
    fs.readdir(monthPath, (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send("server error");
        }
        res.json(files);
    });
    // res.sendFiles(monthPath, (err, files) => {
    //     if(err) {
    //         console.log("fucked up");
    //         console.log(err);
    //         res.status(500).send("server error");
    //     }
    //     console.log(files);
    // });
    // let ym = req.query.calendar.split('-');
    // let monthPath = checkFolder(ym[0], ym[1]);
    // fs.readdir(monthPath, (err, files) => {
    //     if(err) {
    //         console.log(err);
    //         res.status(500).send("server error");
    //     }
    //     console.log(files);
    //     res.render('index.html');
    // });
})

// express 서버 열기
app.listen(port, () => { // port, hostName, () 으로 인자를 하나 추가하여 직접 호스트명 선언 가능
    console.log(`express is running on ${port}`);
})