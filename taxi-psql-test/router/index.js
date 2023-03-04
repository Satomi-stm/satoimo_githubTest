//Expressサーバーインスタンスを作成
const express = require('express');

//ルーティング処理用のオブジェクトを生成して変数routerに代入
const router = express.Router();

//postgresを使うために必要な宣言
const pg = require("pg");　//これがないと13行目のpg.Poolがコンストラクターじゃないよというエラーが起きる
const path = require("path");
// const { name } = require("ejs"); 

//DBに接続
var pool = new pg.Pool({
    database: "taxidb",
    user: "postgres", //ユーザー名はデフォルト以外を利用した人は適宜変更すること
    password: "satomi1118", //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
    host: "localhost",
    port: 5432
  });

//「GET/」,「GET/about」にリクエストがあったのときの処理をrouterに実装する
router
    .get('/', (req,res) =>{
        //データベースからデータを読み込む
        pool.connect((err,client) => {
            if(err){
                console.log(err);
            }else{
                     // query関数の第一引数にSQL文をかく
                    client.query("SELECT id,name,phonenumber FROM taxi_information", (err, result) =>{
                        res.render("index", {
                            id: result.rows[0].id,
                            name: result.rows[0].name,
                            phonenumber: result.rows[0].phonenumber

                        });

                        //コンソール上での確認用
                        console.log(result);
                    });
            }
        });
    })

    .get('/about', (req, res) =>{
        res.render('about');
    });

    //ルーティング処理の実装を行ったルーティングオブジェクトを外部に公開する
    module.exports = router;