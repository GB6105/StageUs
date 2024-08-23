// 전역 변수 설정
var answer = []
var input = []
var lastInput = [0,0,0]
var strike1 = 0, strike2 = 0;
var ball1 = 0, ball2 = 0;
var out = 0;


function getRandomNumber(){ //1-9까지 난수 생성
    return Math.floor(Math.random() * 9)+1
}

function getTargetNumber(){
    for(;;){
        answer[0] = getRandomNumber()
        answer[1] = getRandomNumber()
        answer[2] = getRandomNumber()

        if (answer[0] != answer[1] && answer[0] != answer[2] && answer[1] != answer[2])
            {
               break; // 중복되는 숫자가 없을 때 break
            }
    }
       
    console.log("Answer is ",answer[0], answer[1],answer[2]) // 콘솔에서 상황출력 확인
    return answer
}

// 게임 시작
function gameStart(){
    if(answer[0] != null){ //이미 변수가 생성되어 실행중일 때는 게임시작을 방지
        document.getElementById("상황출력").innerHTML = "이미 게임이 진행중입니다."
        return 
    }
    
    document.getElementById("상황출력").innerHTML = "숫자를 입력해주세요"
    resetResultBoard()
    getTargetNumber()
}


function judgeNumber(input, answer){
    if (input.length < 3){
        console.log("숫자를 3개 입력해주세요. 현재 입력된 숫자 개수" + (input.length))
        return
    }

    for(var i = 0 ; i< input.length ; i++){
        if(input[i] == answer[i]){
            strike1 += 1
        }
        else if(answer.indexOf(input[i]) != -1){
            ball1 += 1
        }
    }
    
}


function inputNumber(n){
    //전광판 색깔 초기화 파트
    resetScoreBoard()
    resetResultBoard();

    if(answer[0] === null){
        document.getElementById("상황출력").innerHTML = "게임을 시작해주세요"
        return
    }
    //숫자 입력 받는 파트
    if(input.length >= answer.length){ //3개 이상 입력 오류
        console.log("숫자를 3개 입력했습니다. 던지세요")
        return
    }
    if (input.indexOf(n) !== -1){ // 증복입력 방지
        console.log("이미 입력된 숫자입니다.")
        return
    }

    input.push(n)
    document.getElementById("userInput"+input.length).innerHTML = n
    console.log((n + " 이 " +input.indexOf(n))+ " 번에 저장")    

}



// 값이 맞는지 판정하는 부분(던지기)
function judge(answer){

    //로그 기록하기
    recordLastInput()

    if(out ==3){//3번 이기면 아무것도 못하도록 막기
        document.getElementById("경기결과").innerHTML = "Game Over! Retry?"
        return
    }

    judgeNumber(input,answer)

    console.log(strike1+"strike1")
    console.log(ball1+"ball1")

    //상황출력 판정 부분
    if (strike1 == 3){ // 3개 모두 맞출 경우 상황출력 처리
        //결과판 출력
        document.getElementById("상황출력").innerHTML = "맞췄습니다!"
        document.getElementById("스트라이크").innerHTML = "3 Strike"
        //전광판 출력
        document.getElementById("strike0").style.backgroundColor = "yellow";
        document.getElementById("strike1").style.backgroundColor = "yellow";
        resetLastInputBox();
        resetLastInputValue();
        return
    }

    document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
    for (var i = 0 ; i < strike1; i++){
        document.getElementById("strike"+i).style.backgroundColor = "Yellow";
        document.getElementById("스트라이크").innerHTML = "Strike" + i
    }

    for (var j = 0 ; j < ball1; j++){
        document.getElementById("ball"+i).style.backgroundColor = "green";
        document.getElementById("볼").innerHTML = "Ball" + i
    }
    
    //이전 입력 기록 저장
    recordInput();
    
    //이전 입력 기록 저장
    lastInput[0] = input[0];    
    lastInput[1] = input[1];
    lastInput[2] = input[2];
    strike2 = strike1;
    ball2 = ball1;
    resetInputValue(); //입력된 값 초기화         
    resetInputBox(); //숫자 입력 박스 초기화
    resetScore();   //점수 초기화

     
}

var blinckBall1Terminal, blinckBall2Terminal, blinckBall3Terminal;
var blinckStrike1Terminal, blinckStrike2Terminal;

var blinckOut1Terminal,blinckOut2Terminal;


// 입력,상황출력,전광판,게임 등 리셋하는 함수 부분/////////////////////////////////////////

function resetInputValue(){ //입력값 초기화
    input = []
    return input;
}

function resetTarget(){     //랜덤값(상황출력) 초기화
    answer = []
    return answer
}

function resetScore(){      //점수(stike, ball1) 초기화
    strike1 = 0;
    ball1 =0;
}
function resetResultBoard(){    //결과판 초기화
    document.getElementById("스트라이크").innerHTML = "0 Strike"
    document.getElementById("볼").innerHTML = "0 Ball"
}

function resetScoreBoard(){     //전광판 초기화
    document.getElementById("ball0").style.backgroundColor = "gray";
    document.getElementById("ball1").style.backgroundColor = "gray";
    document.getElementById("ball2").style.backgroundColor = "gray";
    document.getElementById("strike0").style.backgroundColor = "gray";
    document.getElementById("strike1").style.backgroundColor = "gray";
}

function resetInputBox(){       //현재 입력 박스 초기화
    document.getElementById("userInput1").innerHTML = 0   
    document.getElementById("userInput2").innerHTML = 0   
    document.getElementById("userInput3").innerHTML = 0   
}

function recordInput(){
    document.getElementById("lastInput1").innerHTML = input[0];  
    document.getElementById("lastInput2").innerHTML = input[1];   
    document.getElementById("lastInput3").innerHTML = input[2];
    document.getElementById("lastStrike1").innerHTML = strike1;
    document.getElementById("lastBall1").innerHTML = ball1;
}

function recordLastInput(){
    document.getElementById("lastInput4").innerHTML = lastInput[0];  
    document.getElementById("lastInput5").innerHTML = lastInput[1];   
    document.getElementById("lastInput6").innerHTML = lastInput[2];
    document.getElementById("lastStrike2").innerHTML = strike2;
    document.getElementById("lastBall2").innerHTML = ball2;
}
function resetLastInputValue(){ //지난 입력 기록 초기화
    lastInput[0] = 0;
    lastInput[1] = 0;
    lastInput[2] = 0;
    strike2 = 0;
    ball2 = 0;
}

function resetLastInputBox(){ // 과거 기록 전광판 초기화
    document.getElementById("lastInput1").innerHTML = 0;  
    document.getElementById("lastInput2").innerHTML = 0;  
    document.getElementById("lastInput3").innerHTML = 0;  
    document.getElementById("lastInput4").innerHTML = 0;  
    document.getElementById("lastInput5").innerHTML = 0;   
    document.getElementById("lastInput6").innerHTML = 0;
}

function newInput(){    //사용자가 직접 입력을 다시 할 수 있음
    resetInputValue();
    resetInputBox();
}
function resetGame(){   //게임 재시작(개발용) 추후 새게임에 기능 합치기
    resetTarget();
    resetInputValue();
    resetScoreBoard();
    // document.getElementById("상황출력").innerHTML = "숫자를 입력하세요"
    //getTargetNumber(); // 이게 게임 시작의 핵심 하드리셋으로 옮기면 
    
    console.clear()
    console.log("Answer is ",answer[0], answer[1],answer[2])
}

function hardResetGame(){   //처음부터 다시시작
    resetTarget();
    resetInputValue();
    resetScoreBoard();
    resetLastInputBox();
   
    out = 0;
    document.getElementById("상황출력").innerHTML = "Press Start to play"
    document.getElementById("스트라이크").innerHTML = ""
    document.getElementById("볼").innerHTML = ""
    document.getElementById("out1").style.backgroundColor = "gray";
    document.getElementById("out2").style.backgroundColor = "gray";
    document.getElementById("경기결과").innerHTML = ""    

    clearInterval(blinckBall1Terminal)
    clearInterval(blinckBall2Terminal)
    clearInterval(blinckBall3Terminal)
    clearInterval(blinckStrike1Terminal)
    clearInterval(blinckStrike2Terminal)
    clearInterval(blinckOut1Terminal)
    clearInterval(blinckOut2Terminal)
    
}

function totalGameWon(){    //전광판 색깔 변경함수(3게임 승리시)
    document.getElementById("ball0").style.backgroundColor = "green";
    document.getElementById("ball1").style.backgroundColor = "green";
    document.getElementById("ball2").style.backgroundColor = "green";
    document.getElementById("strike0").style.backgroundColor = "yellow";
    document.getElementById("strike1").style.backgroundColor = "yellow";

    blinckBall1Terminal = setInterval(blinckBall1, 300)
    blinckBall2Terminal = setInterval(blinckBall2, 300)
    blinckBall3Terminal = setInterval(blinckBall3, 300)
    blinckStrike1Terminal = setInterval(blinckStrike1, 300)
    blinckStrike2Terminal = setInterval(blinckStrike2, 300)
    blinckOut1Terminal = setInterval(blinckOut1, 300)
    blinckOut2Terminal = setInterval(blinckOut2, 300)
}



//console파트는 꼭 필요한게 아니면 완료후에 지우도록 합시다.

// 게임 설명 파트
// 팝업창 하나 써서
// 게임 룰 설명
// 버튼 기능 설명하기

// 기능 설명 파트
// 반투명 팝업창으로 전체화면 덥고 해당 파트에 대한 설명 작성해주기




// 튜토리얼
// 버튼 눌러서 시작
// 변수는 임의로 지정해주기
// 저지 함수 그대로 가져오고
// 값에 대한 설명 주기 (결과판으로 설명하기)
// 변수 입력은 이상한거 누를라하면 막기(그냥 함수를 빼버리면 됨)
// ball에 대한 설명 , strike에 대한설명
// 정답 기준에 대한 설명 

function tutorial(){
    //안내문구 작성
    document.getElementById("상황출력").innerHTML = "튜토리얼을 시작합니다."
    answer[0] = 8;
    answer[1] = 3;
    answer[2] = 7;
    printPart1();

}
