// 랜덤 값 저장 변수
var target1=0, target2, target3;

function getRandomNumber(){ //1-9까지 난수 생성
    return Math.floor(Math.random() * 9)+1
}

function getTargetNumber(){
    target1 = getRandomNumber()
    target2 = getRandomNumber()
    target3 = getRandomNumber()
    if (target1 == target2 || target1 == target3 || target2 == target3)
    {
        getTargetNumber() // 중복되는 숫자가 생기면 다시 생성하기
    }
    console.log("Answer is ",target1, target2,target3) // 콘솔에서 상황출력 확인
}


// function getTargetNumber(){
//     target1 = getRandomNumber()
//     target2 = getRandomNumber()
//     target3 = getRandomNumber()
//     for (var i = 0; i <2 ;i++){
//         var target = getRandomNumber();
    
//     }
    
//     if (target1 == target2 || target1 == target3 || target2 == target3)
//     {
//         getTargetNumber() // 중복되는 숫자가 생기면 다시 생성하기
//     }
//     console.log("Answer is ",target1, target2,target3) // 콘솔에서 상황출력 확인
// }

// 게임 시작
function gameStart(){
    if(target1 !=0){ //이미 변수가 생성되어 실행중일 때는 게임시작을 방지
        document.getElementById("상황출력").innerHTML = "이미 게임이 진행중입니다."
        
    }
    else{
        document.getElementById("상황출력").innerHTML = "숫자를 입력해주세요"
        resetResultBoard()
        getTargetNumber()
    }

}

//입력값 전역변수
var input1 = 0 ,input2 = 0, input3 = 0;
var input4 = 0, input5 = 0, input6 = 0;


function inputNumber(n){

    //전광판 색깔 초기화 파트
    resetScoreBoard()
    resetResultBoard();
    if(target1 == 0){
        document.getElementById("상황출력").innerHTML = "게임을 시작해주세요"

    }
    else{
    //숫자 입력 받는 파트
        if(input1 == 0){
            input1 = n
            console.log(input1, "input1에 " + n + "이 저장됩니다")
            document.getElementById("userInput1").innerHTML = n   
        }
        else if (input1 != 0 && input2 == 0 && input1 != n){
            input2 = n
            console.log(input2, "input2에 " + n + "이 저장됩니다")
            document.getElementById("userInput2").innerHTML = n
        }
        else if ((input1 != 0 && input1 != n) && (input2 != 0 && input2 != n) && (input3 == 0 && input3 != n)){
            input3 = n
            console.log(input3, "input3에 " + n + "이 저장됩니다")
            document.getElementById("userInput3").innerHTML = n
        }
        else if(input1 !=0 && input2 !=0 &&input3 !=0){ 
            console.log("숫자 3개를 모두 입력했습니다.")
        }
        else{
            console.log("다른 수를 입력해주세요")
        }
    }
}

// 변수 생성 파트
var strike = 0, ball = 0; out = 0;
var strike2 = 0, ball2 = 0;

// 값이 맞는지 판정하는 부분(던지기)
function judge(target1,target2,target3){

    //로그 기록하기
    document.getElementById("lastInput4").innerHTML = input4;  
    document.getElementById("lastInput5").innerHTML = input5;   
    document.getElementById("lastInput6").innerHTML = input6;
    document.getElementById("lastStrike2").innerHTML = strike2;
    document.getElementById("lastBall2").innerHTML = ball2;


    if(out ==3){//3번 이기면 아무것도 못하도록 막기
        document.getElementById("경기결과").innerHTML = "Game Over! Retry?"
    }
    else{
        console.log("판정이 시작되었고 input1에"+input1+ "이 저장되었습니다.")
        console.log("판정이 시작되었고 input2에"+input2+ "이 저장되었습니다.")
        console.log("판정이 시작되었고 input3에"+input3+ "이 저장되었습니다.")

        //숫자가 3개가 들어왔는 지 여부 + 숫자 비교 판정 
        judgeNumber(input1,target1,target2,target3,1)
        judgeNumber(input2,target2,target1,target3,2)
        judgeNumber(input3,target3,target1,target2,3)

        console.log(strike+"strike")
        console.log(ball+"ball")

        //상황출력 판정 부분
        if (strike == 3){ // 3개 모두 맞출 경우 상황출력 처리
            //결과판 출력
            document.getElementById("상황출력").innerHTML = "상황출력입니다."
            document.getElementById("스트라이크").innerHTML = "3 Strike"
            //전광판 출력
            document.getElementById("strike1").style.backgroundColor = "yellow";
            document.getElementById("strike2").style.backgroundColor = "yellow";
            resetLastInputBox();
            resetLastInputValue
            
            //상황출력 이후에도 여러가지 조건에 따른 상황 변경
            if (out == 0){ // 1out 상황
                out += 1
                document.getElementById("out1").style.backgroundColor = "red";
                getTargetNumber(); //다음게임으로
                resetInputVlaue();
            }
            else if(out == 1){ //2out 상황
                out += 1
                document.getElementById("out2").style.backgroundColor = "red";
                getTargetNumber();//다음게임으로
                resetInputVlaue();

            }
            else if(out == 2){ //3out으로
                out += 1
                document.getElementById("상황출력").innerHTML = "이겼습니다!"
                totalGameWon();
                
           }

        }
        
        else{ // 3개 모두 맞춘 경우가 아니라면 
            if(strike == 1){
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("스트라이크").innerHTML = "1 Strike"
                document.getElementById("strike1").style.backgroundColor = "yellow";
            }
            else if(strike==2 ){
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("스트라이크").innerHTML = "2 Strike"

                document.getElementById("strike1").style.backgroundColor = "yellow";
                document.getElementById("strike2").style.backgroundColor = "yellow";
            }
            else{
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("스트라이크").innerHTML = "0 Strike"
            }

            if(ball == 1){
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML = "1 Ball"

                document.getElementById("ball1").style.backgroundColor = "green";
            }
            else if(ball==2 ){
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML = "2 Ball"

                document.getElementById("ball1").style.backgroundColor = "green";
                document.getElementById("ball2").style.backgroundColor = "green";

            }
            else if(ball==3 ){
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML ="3 Ball"
                document.getElementById("ball1").style.backgroundColor = "green";
                document.getElementById("ball2").style.backgroundColor = "green";
                document.getElementById("ball3").style.backgroundColor = "green";
            }
            else{
                document.getElementById("상황출력").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML ="0 Ball"

            }
            //이전 입력 기록 저장
            document.getElementById("lastInput1").innerHTML = input1;  
            document.getElementById("lastInput2").innerHTML = input2;   
            document.getElementById("lastInput3").innerHTML = input3;
            document.getElementById("lastStrike1").innerHTML = strike;
            document.getElementById("lastBall1").innerHTML = ball;
            
            //이전 입력 기록 저장
            input4 = input1;    
            input5 = input2;
            input6 = input3;
            strike2 = strike;
            ball2 = ball;
            resetInputVlaue(); //입력된 값 초기화         
        }
        resetInputBox(); //숫자 입력 박스 초기화
        resetScore();   //점수 초기화
    } 

}
var blinckBall1Terminal;
var blinckBall2Terminal;
var blinckBall3Terminal;
var blinckStrike1Terminal;
var blinckStrike2Terminal;
var blinckOut1Terminal;
var blinckOut2Terminal;

// 입력,상황출력,전광판,게임 등 리셋하는 함수 부분/////////////////////////////////////////
function resetInputVlaue(){ //입력값 초기화
    input1 = 0;
    input2 = 0;
    input3 = 0;
}

function resetTarget(){     //랜덤값(상황출력) 초기화
    target1 = 0;
    target2 = 0;
    target3 = 0;
}

function resetScore(){      //점수(stike, ball) 초기화
    strike = 0;
    ball =0;
}
function resetResultBoard(){    //결과판 초기화
    document.getElementById("스트라이크").innerHTML = "0 Strike"
    document.getElementById("볼").innerHTML = "0 Ball"
}

function resetScoreBoard(){     //전광판 초기화
    document.getElementById("ball1").style.backgroundColor = "gray";
    document.getElementById("ball2").style.backgroundColor = "gray";
    document.getElementById("ball3").style.backgroundColor = "gray";
    document.getElementById("strike1").style.backgroundColor = "gray";
    document.getElementById("strike2").style.backgroundColor = "gray";
}

function resetInputBox(){       //현재 입력 박스 초기화
    document.getElementById("userInput1").innerHTML = 0   
    document.getElementById("userInput2").innerHTML = 0   
    document.getElementById("userInput3").innerHTML = 0   
}

function resetLastInputValue(){ //지난 입력 기록 초기화
    input4 = 0;
    input5 = 0;
    input6 = 0;
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
    input1 = 0;
    input2 = 0;
    input3 = 0;
    document.getElementById("userInput1").innerHTML = 0;
    document.getElementById("userInput2").innerHTML = 0;
    document.getElementById("userInput3").innerHTML = 0;
}
function resetGame(){   //게임 재시작(개발용) 추후 새게임에 기능 합치기
    resetTarget();
    resetInputVlaue();
    resetScoreBoard();
    // document.getElementById("상황출력").innerHTML = "숫자를 입력하세요"
    //getTargetNumber(); // 이게 게임 시작의 핵심 하드리셋으로 옮기면 
    
    console.clear()
    console.log("Answer is ",target1, target2,target3)
}

function hardResetGame(){   //처음부터 다시시작
    resetGame();
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
    document.getElementById("ball1").style.backgroundColor = "green";
    document.getElementById("ball2").style.backgroundColor = "green";
    document.getElementById("ball3").style.backgroundColor = "green";
    document.getElementById("strike1").style.backgroundColor = "yellow";
    document.getElementById("strike2").style.backgroundColor = "yellow";

    blinckBall1Terminal = setInterval(blinckBall1, 300)
    blinckBall2Terminal = setInterval(blinckBall2, 300)
    blinckBall3Terminal = setInterval(blinckBall3, 300)
    blinckStrike1Terminal = setInterval(blinckStrike1, 300)
    blinckStrike2Terminal = setInterval(blinckStrike2, 300)
    blinckOut1Terminal = setInterval(blinckOut1, 300)
    blinckOut2Terminal = setInterval(blinckOut2, 300)
}

// 숫자 판정 함수
function judgeNumber(inputValue,t1,t2,t3,k){
    if(inputValue == 0){
        console.log("숫자 3개를 입력해주세요 현재 입력된 숫자 개수"+ (k-1))
    }
    else if(inputValue == t1){
        strike += 1
    }
    else if (inputValue == t2 || inputValue == t3){
        ball += 1
    }

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





//추가적인 잡다한 기능


// 전광판 깜빡이기
function blinckBall1(){
    var glowBall = setTimeout(glowBallSign1,0)
    var glowOutBall = setTimeout(glowOutBallSign1, 100)
}

function glowBallSign1(){
    document.getElementById("ball1").style.backgroundColor = 'green'
}
function glowOutBallSign1(){
    document.getElementById("ball1").style.backgroundColor = 'gray'
}


function blinckBall2(){
    var glowBall = setTimeout(glowBallSign2,100)
    var glowOutBall = setTimeout(glowOutBallSign2, 200)
}

function glowBallSign2(){
    document.getElementById("ball2").style.backgroundColor = 'green'
}
function glowOutBallSign2(){
    document.getElementById("ball2").style.backgroundColor = 'gray'
}


function blinckBall3(){
    var glowBall = setTimeout(glowBallSign3,200)
    var glowOutBall = setTimeout(glowOutBallSign3, 300)
}

function glowBallSign3(){
    document.getElementById("ball3").style.backgroundColor = 'green'
}
function glowOutBallSign3(){
    document.getElementById("ball3").style.backgroundColor = 'gray'
}

//스트라이크 빤짝이기
function blinckStrike1(){
    var glowBall = setTimeout(glowStrikeSign1,100)
    var glowOutBall = setTimeout(glowOutStrikeSign1, 200)
}

function glowStrikeSign1(){
    document.getElementById("strike1").style.backgroundColor = 'yellow'
}
function glowOutStrikeSign1(){
    document.getElementById("strike1").style.backgroundColor = 'gray'
}


function blinckStrike2(){
    var glowBall = setTimeout(glowStrikeSign2,200)
    var glowOutBall = setTimeout(glowOutStrikeSign2, 300)
}

function glowStrikeSign2(){
    document.getElementById("strike2").style.backgroundColor = 'yellow'
}
function glowOutStrikeSign2(){
    document.getElementById("strike2").style.backgroundColor = 'gray'
}

//out빤짝이기
function blinckOut1(){
    var glowBall = setTimeout(glowOutSign1,200)
    var glowOutBall = setTimeout(glowOutOutSign1, 300)
}

function glowOutSign1(){
    document.getElementById("out1").style.backgroundColor = 'red'
}
function glowOutOutSign1(){
    document.getElementById("out1").style.backgroundColor = 'gray'
}

function blinckOut2(){
    var glowBall = setTimeout(glowOutSign2,300)
    var glowOutBall = setTimeout(glowOutOutSign2, 400)
}

function glowOutSign2(){
    document.getElementById("out2").style.backgroundColor = 'red'
}
function glowOutOutSign2(){
    document.getElementById("out2").style.backgroundColor = 'gray'
}

