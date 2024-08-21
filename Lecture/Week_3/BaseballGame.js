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
            document.getElementById("상황출력").innerHTML = "맞췄습니다!"
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
                resetInputValue();
            }
            else if(out == 1){ //2out 상황
                out += 1
                document.getElementById("out2").style.backgroundColor = "red";
                getTargetNumber();//다음게임으로
                resetInputValue();

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
            resetInputValue(); //입력된 값 초기화         
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
function resetInputValue(){ //입력값 초기화
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
    resetInputValue();
    resetScoreBoard();
    // document.getElementById("상황출력").innerHTML = "숫자를 입력하세요"
    //getTargetNumber(); // 이게 게임 시작의 핵심 하드리셋으로 옮기면 
    
    console.clear()
    console.log("Answer is ",target1, target2,target3)
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

function tutorial(){
    //안내문구 작성
    document.getElementById("상황출력").innerHTML = "튜토리얼을 시작합니다."
    target1 = 8;
    target2 = 3;
    target3 = 7;
    printPart1();
    

    // if(ball2 == 1){
    //     printPart2();
    // }
    // else{
    //     document.getElementById("상황출력").innerHTML = "1 2 3 을순서대로 입력해주세요"
    // }
    // printPart2();
    // printPart3();
    // printPart4();
    // printPart5();
    // printPart6();
    
}


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


// 대사 뭉치
function text1(){
    document.getElementById("상황출력").innerHTML = "MLB는 컴퓨터가 생각한 임의의 숫자를 유추하는 게임입니다."
}

function text2(){
    document.getElementById("상황출력").innerHTML = "지금 컴퓨터가 생각한 값은 8 3 7입니다."
}

function text3(){
    document.getElementById("상황출력").innerHTML = "숫자를 입력하면 숫자가 있는지 없는지를 알 수 있습니다."
}

function text4(){
    document.getElementById("상황출력").innerHTML = "1 2 3을 입력해보세요"
}
function printPart1(){
    setTimeout(text1, 2000)
    setTimeout(text2, 4000)
    setTimeout(text3, 6000)
    setTimeout(text4, 8000)
}

//PART2
function text5(){
    document.getElementById("상황출력").innerHTML = "정답에 3이 있지만 순서가 맞지 않았습니다." 
}

function text6(){
    document.getElementById("상황출력").innerHTML = "이럴 경우 1개의 숫자가 맞았지만 순서가 틀렸으므로 1 ball입니다."
} 

function text7(){
    document.getElementById("상황출력").innerHTML = "1 3 5를 입력해보세요"
}

function printPart2(){
    setTimeout(text5,2000)
    setTimeout(text6,4000)
    setTimeout(text7,6000)
}

//PART3
function text8(){
    document.getElementById("상황출력").innerHTML = "3이 순서까지 맞았으므로 1 strike 입니다." 
}

function text9(){
    document.getElementById("상황출력").innerHTML = "7 3 5 을 입력해보세요"
}
function printPart3(){
    setTimeout(text8,2000)
    setTimeout(text9,4000)
}

//PART4
function text10(){
    document.getElementById("상황출력").innerHTML = "결과는 1stike 1ball 입니다. 3이 stike라는 것을 알 수 있었으므로"
}

function text11(){
    document.getElementById("상황출력").innerHTML = "새롭게 입력한 7이 들어간 다는 것을 유추할 수 있습니다." 
}

function text12(){
    document.getElementById("상황출력").innerHTML = "5 3 7 을 입력해보세요"
}
function printPart4(){
    setTimeout(text10,2000)
    setTimeout(text11,4000)
    setTimeout(text12,6000)
}

//PART5
function text13(){
    document.getElementById("상황출력").innerHTML = "결과는 2stike 입니다. 이제 남은 한 자리만 맞추면 되겠네요"
}

function text14(){
    document.getElementById("상황출력").innerHTML = "정답을 입력해보세요"
}

function text15(){
    document.getElementById("상황출력").innerHTML = "이제 8 3 7 을 입력해보세요"
}
function printPart5(){
    setTimeout(text13,2000)
    setTimeout(text14,4000)
    setTimeout(text15,6000)
}
//PART6
function text16(){
    document.getElementById("상황출력").innerHTML = "숫자 3개와 순서까지 맞추었으므로 3strike 입니다."
}

function text17(){
    document.getElementById("상황출력").innerHTML = "정답을 맞추면 다음 게임으로 넘어갑니다."
}

function text18(){
    document.getElementById("상황출력").innerHTML = "총 3번 정답을 맞추면 이깁니다. 행운을 빕니다."
}
function printPart6(){
    setTimeout(text16,2000)
    setTimeout(text17,4000)
    setTimeout(text18,6000)
}