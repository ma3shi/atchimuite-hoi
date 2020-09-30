'use strict';

//勝敗数
let winNum = 0;
let loseNum = 0;

//勝敗数の表示箇所を変数にする
let win = document.getElementById("win")
let lose = document.getElementById("lose")

//もう一度
function again(){
  document.getElementById("message1").innerHTML = `<h3>じゃんけんポン・あっちむいてホイ</h3>`;
  document.getElementById("message2").innerHTML = '';
  document.getElementById("message3").innerHTML = `<h3>スタートボタンを押してね</h3>`;
  document.getElementById('picture1').src = 'janken.png';
  document.getElementById('picture2').src = '';
  document.getElementById("again").innerHTML = '';
  document.getElementById("startButton").innerHTML ='<input class="btn"　type="button" value="スタート" onclick="start();">'
  document.getElementById("rpsButton").innerHTML = '';
  document.getElementById("ltwButton").innerHTML = '';
}

//リセット
function reset(){
  winNum = loseNum = 0;
  win.value = winNum;
  lose.value = loseNum;
  again();
}
//rpsボタン出現
function rpsButtonAppear() {
  document.getElementById("rpsButton").innerHTML = 
  '<input class="btn2"　type="button" value="ぐー" onclick="RockPaperScissors(0);"><input class="btn2"　type="button" value="ちょき" onclick="RockPaperScissors(1);">  <input class="btn2"　type="button" value="ぱー" onclick="RockPaperScissors(2);">';
}
//スタート
function start () {
  rpsButtonAppear();
  document.getElementById("message3").innerHTML = `<h3>じゃんけん</h3>`;
  document.getElementById("startButton").innerHTML = '';
}

//あいこ
function draw () {
  rpsButtonAppear();
  document.getElementById("message3").innerHTML = `<h3>あいこで</h3>`;
}

//じゃんけんで勝ったらあっち向いてホイへ
function nextGame(){
  document.getElementById("ltwButton").innerHTML = 
  '<input class="btn2"  type="button" value="上" onclick="lookThisWay(0);"><input class="btn2" type="button" value="下" onclick="lookThisWay(1);"><input class="btn2"　type="button" value="右" onclick="lookThisWay(2);"><input class="btn2"　type="button" value="左" onclick="lookThisWay(3);">';
  document.getElementById("message3").innerHTML = `<h3>あっち向いて</h3>`;
}

//じゃんけん
function RockPaperScissors(myHandNum){
  // CPUの手を数値で出す
  const cpuHandNum = Math.floor(Math.random()*3);
  // CPUの手
  let cpuHand;
  //自分の手
  let myHand;
　//結果
  let rpsResult;
  let rpsResultNum; 
  //手の画像
  const handImg = ["rock.png","scissors.png","paper.png"];
  //じゃんけんボタンを消す
  document.getElementById("rpsButton").innerHTML = '';
  //0:ぐー　1:ちょき　2:ぱー
  //cpuの手を数値から文字へ
  if(cpuHandNum === 0) {
        cpuHand = "ぐー";
    } else if(cpuHandNum === 1) {
        cpuHand = "ちょき";
    } else if(cpuHandNum === 2) {
        cpuHand = "ぱー";
  } 
  
  //自分の手を数値から文字へ
  if(myHandNum === 0) {
      myHand = "ぐー";
    } else if(myHandNum === 1) {
        myHand = "ちょき";
    } else if(myHandNum === 2) {
        myHand = "ぱー";
  } 

  //cpuのテキストと画像を表示
  document.getElementById("message1").innerHTML = `<h3>あなた:${myHand} </h3>`;
  document.getElementById("message2").innerHTML = `<h3>相手:${cpuHand} </h3>`;
  document.getElementById('picture1').src = handImg[myHandNum];
  document.getElementById('picture2').src = handImg[cpuHandNum];

  //0:勝ち　1:負け　2:あいこ
  if (myHandNum === cpuHandNum){
      //あいこ
      rpsResultNum = 2;
    }else if(myHandNum === 0 ){
      //自分:ぐー　cpu:ちょき
      if(cpuHandNum === 1){
        //勝ち
        rpsResultNum = 0;
      //自分:ぐー　cpu:ぱー
      }else if(cpuHandNum === 2){
        //負け
        rpsResultNum = 1;
      }
    }else if(myHandNum === 1 ){
      //自分:ちょき　cpu:ぐー
      if(cpuHandNum === 0){
        //負け
        rpsResultNum = 1;
      //自分:ちょき　cpu:ぱー  
      }else if(cpuHandNum === 2){
        //勝ち
        rpsResultNum = 0;
      }
    }else if(myHandNum === 2 ){
      //自分:ぱー　cpu:ぐー
      if(cpuHandNum === 0){
        //勝ち
        rpsResultNum = 0;
      //自分:ぱー　cpu:ちょき  
      }else if(cpuHandNum === 1){
        //負け
        rpsResultNum = 1;
      }
  }
  //勝ち：あっち向いてホイへ　負け:負け数を加算　あいこ：もう一度
  //勝ち負けあいこを数値から文字へ
  if(rpsResultNum === 0) {
    rpsResult = "勝ち";
    nextGame();
    } else if(rpsResultNum === 1) {
      rpsResult = "負け";
      loseNum++;
      lose.value = loseNum;
      document.getElementById("again").innerHTML =  '<input class="btn"　type="button" value="もう一度" onclick="again();">';
      document.getElementById("message3").innerHTML = `<h3>負け</h3>`;
    } else if(rpsResultNum === 2) {
      rpsResult = "あいこ";
      document.getElementById("message3").innerHTML = `<h3>あいこで</h3>`;
      //もう一度の処理
      draw();
  }
}

//あっち向いてホイ
function lookThisWay(myNum) {
  // CPUの方向を数値で出す
  const cpuNum= Math.floor(Math.random()*4);
  // CPUの方向
  let cpuWay;
  //自分の方向
  let myWay;
  // 結果
  let result;
  let resultImg;
  //顔向きの画像
  const faceImg = ["up.png", "down.png", "right.png", "left.png"];
  //あっち向いてボタンを消す
  document.getElementById("ltwButton").innerHTML = '';
  //cpuの方向を数値から文字へ
  if(cpuNum === 0) {
        cpuWay = "上";
    } else if(cpuNum === 1) {
        cpuWay = "下";
    } else if(cpuNum === 2) {
        cpuWay = "右";
    } else if(cpuNum ===3) {
        cpuWay = "左"
  }
  //自分の方向を数値から文字へ
  if(myNum === 0) {
        myWay = "上";
    } else if(myNum === 1) {
        myWay = "下";
    } else if(myNum === 2) {
        myWay = "右";
    } else if(myNum ===3) {
        myWay = "左"
  }
  //cpuのテキストと画像を表示
  document.getElementById("message1").innerHTML = `<h3>あなた:${myWay} </h3>`;
  document.getElementById("message2").innerHTML = `<h3>相手:${cpuWay} </h3>`;
  document.getElementById('picture1').src = faceImg[myNum];
  document.getElementById('picture2').src = faceImg[cpuNum];
  //勝ちか負けかで表示する文字と画像を分けて表示
  //勝敗数を加算
  if(myNum === cpuNum ) {
    result = "あなたの勝ち";
    winNum++;
  } else {
    result = "あなたの負け";
    loseNum++;
  }  
  //勝敗数を表示
  win.value = winNum;
  lose.value = loseNum;  
　// 判定結果に応じてテキストと画像を表示
  document.getElementById("message3").innerHTML = `<h3>結果:${result}</h3>`;
　//もう一度ボタンを出現
  document.getElementById("again").innerHTML =  '<input class="btn"　type="button" value="もう一度" onclick="again();">';
}

