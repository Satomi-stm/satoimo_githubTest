
//Expressサーバーインスタンスを設定
const express = require("express");

//別ファイルで用意したルーティング実装オブジェクトを読み込む
const router = require('./router/index');
const app = express();
const PORT = 8000;

//テンプレートエンジンの設定
app.set('view engine', 'ejs');

//routerを使うときは「app.get」の代わりに「app.use」を使う
//第一引数にはパスをセット、第二引数にはルーティング処理を実装したrouterオブジェクトをセット
app.use('/',router);
app.listen(PORT,() =>{
    console.log("start server!");
})

  