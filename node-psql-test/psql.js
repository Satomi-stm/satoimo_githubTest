//postgreSQLのモジュールをインポート
const { Client } = require("pg");

//クライアントインスタンス作成　初期設定としてオプションにデータベースに接続するための情報を記載
const client = new Client({
  user: "postgres",
  host: "127.0.0.1",
  database: "nodedb",
  password: "satomi1118",
  port: 5432,
});

//データベースに接続
client.connect();

//nodeからpostgreSQLに対してクエリ操作を行う際には.query()を使用
//"SELECT NOW()"で現在時刻をtimestamp型（日付と時刻を表すデータ型）で取得
// client.query("SELECT NOW()", (err, res) => {
//     //timestampを出力
//   console.log(err, res);
//   client.end();
// });

//データを追加してみよう
//SQLコマンド　insert introを使う

//まず.query()に引数として渡すSQLコマンドと渡す値を変数queryに入れる
//今回は「1, ‘山田太郎’」というデータを登録
// const query = {
//     text: "INSERT INTO member VALUES ($1, $2)",
//     values: [1, "山田太郎"],
//   };
//   client
//     .query(query)
//     .then((res) => {
//         //console.logで上に追加したデータに対するレスポンス内容を表示する
//       console.log(res);
//       client.end();
//     })
//     .catch((e) => console.error(e.stack));


//データを取得してみよう
//データの取得はPostgreSQLのSQLコマンドだと「Select from」
//さっき登録した山田太郎を取得しよう

//membersテーブル内のデータを全件取得
// const query = {
//     text: "SELECT * FROM member",
//   };
//   client
//     .query(query)
//     .then((res) => {
//         //console.logで取得したデータを出力
//       console.log(res.rows[0]);
//       client.end();
//     })
//     .catch((e) => console.error(e.stack));



//データを削除してみよう
//データの削除はPostgreSQLのSQLコマンドの「delete from」
const query = {
    text: "DELETE FROM member WHERE id = $1",
    values: [1],
  };
  client
    .query(query)
    .then((res) => {
      console.log(res);
      client.end();
    })
    .catch((e) => console.error(e.stack));