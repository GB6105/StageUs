// 랜덤 값 저장 변수
var target1, target2, target3;

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
    console.log("Answer is ",target1, target2,target3) // 콘솔에서 정답 확인
}


// 게임 시작
function gameStart(){
    document.getElementById("정답").innerHTML = "숫자를 입력해주세요"
    resetResultBoard()
    getTargetNumber()
}

//입력값 전역변수
var input1 =0 ,input2=0, input3=0;


function inputNumber(n){
    //전광판 색깔 초기화 파트
    resetScoreBoard()
    resetResultBoard();
    
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

// 값이 맞는지 판정하는 부분
var strike =0, ball =0; out = 0;

function judge(target1,target2,target3){
    if(out ==3){//3번 이기면 아무것도 못하도록 막기
        document.getElementById("경기결과").innerHTML = "Game Over! Retry?"
    }
    else{
        console.log("판정이 시작되었고 input1에"+input1+ "이 저장되었습니다.")
        console.log("판정이 시작되었고 input2에"+input2+ "이 저장되었습니다.")
        console.log("판정이 시작되었고 input3에"+input3+ "이 저장되었습니다.")


        judgeNumber(input1,target1,target2,target3,1)
        judgeNumber(input2,target2,target1,target3,2)
        judgeNumber(input3,target3,target1,target2,3)

        console.log(strike+"strike")
        console.log(ball+"ball")

        //정답 판정 부분
        if (strike == 3){
            document.getElementById("정답").innerHTML = "정답입니다."
            document.getElementById("스트라이크").innerHTML = "3 Strike"

            document.getElementById("strike1").style.backgroundColor = "yellow";
            document.getElementById("strike2").style.backgroundColor = "yellow";
        
            if (out == 0){
                out += 1
                document.getElementById("out1").style.backgroundColor = "red";
                getTargetNumber(); //다음게임으로
                resetInputVlaue();
            }
            else if(out == 1){
                out += 1
                document.getElementById("out2").style.backgroundColor = "red";
                getTargetNumber();//다음게임으로
                resetInputVlaue();

            }
            else if(out == 2){
                out += 1
                document.getElementById("정답").innerHTML = "이겼습니다!"
                totalGameWon();
            }

        }
        
        else{ // 틀리면 값을 초기화
            if(strike == 1){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("스트라이크").innerHTML = "1 Strike"
                document.getElementById("strike1").style.backgroundColor = "yellow";
            }
            else if(strike==2 ){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("스트라이크").innerHTML = "2 Strike"

                document.getElementById("strike1").style.backgroundColor = "yellow";
                document.getElementById("strike2").style.backgroundColor = "yellow";
            }
            else{
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("스트라이크").innerHTML = "0 Strike"
            }

            if(ball == 1){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML = "1 Ball"

                document.getElementById("ball1").style.backgroundColor = "green";
            }
            else if(ball==2 ){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML = "2 Ball"

                document.getElementById("ball1").style.backgroundColor = "green";
                document.getElementById("ball2").style.backgroundColor = "green";

            }
            else if(ball==3 ){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML ="3 Ball"
                document.getElementById("ball1").style.backgroundColor = "green";
                document.getElementById("ball2").style.backgroundColor = "green";
                document.getElementById("ball3").style.backgroundColor = "green";
            }
            else{
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("볼").innerHTML ="0 Ball"

            }
            //이전 입력 기록 저장
            document.getElementById("lastInput1").innerHTML = input1;  
            document.getElementById("lastInput2").innerHTML = input2;   
            document.getElementById("lastInput3").innerHTML = input3;

            resetInputVlaue(); //입력된 값 초기화         
        }
        resetInputBox(); //숫자 입력 박스 초기화
        resetScore();   //점수 초기화
    } 

}
// 입력,정답,전광판,게임등 리셋하는 함수 부분
function resetInputVlaue(){ //입력값 초기화
    input1 = 0;
    input2 = 0;
    input3 = 0;
}
function resetTarget(){     //랜덤값 초기화
    target1 = 0;
    target2 = 0;
    target3 = 0;
}

function resetScore(){      //점수 초기화
    strike = 0;
    ball =0;
}
function resetResultBoard(){    //결과판 초기화
    document.getElementById("스트라이크").innerHTML = "0 Strike"
    document.getElementById("볼").innerHTML = "0 Strike"
}

function resetScoreBoard(){     //전광판 초기화
    document.getElementById("ball1").style.backgroundColor = "gray";
    document.getElementById("ball2").style.backgroundColor = "gray";
    document.getElementById("ball3").style.backgroundColor = "gray";
    document.getElementById("strike1").style.backgroundColor = "gray";
    document.getElementById("strike2").style.backgroundColor = "gray";
}

function resetInputBox(){       //입력 박스 초기화
    document.getElementById("userInput1").innerHTML = 0   
    document.getElementById("userInput2").innerHTML = 0   
    document.getElementById("userInput3").innerHTML = 0   

}

function resetGame(){   //게임 재시작(개발용)
    resetTarget();
    resetInputVlaue();
    resetScoreBoard();
    document.getElementById("정답").innerHTML = "숫자를 입력하세요"

    getTargetNumber();
    console.clear()
    console.log("Answer is ",target1, target2,target3)
}

function hardResetGame(){   //처음부터 다시시작
    resetGame();
    out = 0;
    document.getElementById("out1").style.backgroundColor = "gray";
    document.getElementById("out2").style.backgroundColor = "gray";
    document.getElementById("최종 승리").innerHTML = ""
    document.getElementById("경기결과").innerHTML = ""
}

function totalGameWon(){    //전광판 색깔 변경함수(3게임 승리시)
    document.getElementById("ball1").style.backgroundColor = "green";
    document.getElementById("ball2").style.backgroundColor = "green";
    document.getElementById("ball3").style.backgroundColor = "green";
    document.getElementById("strike1").style.backgroundColor = "yellow";
    document.getElementById("strike2").style.backgroundColor = "yellow";
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