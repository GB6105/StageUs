// 변수 생성 함수
var target1, target2, target3;

function getRandomNumber(){
    return Math.floor(Math.random() * 9)+1
}

function getTargetNumber(){
    target1 = getRandomNumber()
    target2 = getRandomNumber()
    if (target1 == target2){
        target2 = getRandomNumber();
    }
    target3 = getRandomNumber()
    if (target1 == target3 || target2 == target3){
        target3 = getRandomNumber()
    }
    // 정답 출력 부분(추후 삭제 요망)
    // document.getElementById("target1").innerHTML = target1
    // document.getElementById("target2").innerHTML = target2
    // document.getElementById("target3").innerHTML = target3

    console.log("Answer is ",target1, target2,target3)
}

//입력 부분 함수
var input1 =0 ,input2=0, input3=0;

function inputNumber(n){
    //전광판 색깔 초기화 파트
    resetScoreBoard();

    if(input1 == 0){
        input1 = n
        console.log(input1, "input1에 " + n + "이 저장됩니다")   
    }
    else if (input1 != 0 && input2 == 0 && input1 != n){
        input2 = n
        console.log(input2, "input2에 " + n + "이 저장됩니다")
    }
    else if ((input1 != 0 && input1 != n) && (input2 != 0 && input2 != n) && (input3 == 0 && input3 != n)){
        input3 = n
        console.log(input3, "input3에 " + n + "이 저장됩니다")
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

        console.log(strike)
        console.log(ball)

        //정답 판정 부분
        if (strike == 3){
            document.getElementById("정답").innerHTML = "정답입니다."
            document.getElementById("strike1").style.backgroundColor = "yellow";
            document.getElementById("strike2").style.backgroundColor = "yellow";
        
            if (out == 0){
                out += 1
                document.getElementById("out1").style.backgroundColor = "red";
                getTargetNumber(); //다음게임으로
                resetInput();
            }
            else if(out == 1){
                out += 1
                document.getElementById("out2").style.backgroundColor = "red";
                getTargetNumber();//다음게임으로
                resetInput();

            }
            else if(out == 2){
                out += 1
                document.getElementById("최종 승리").innerHTML = "이겼습니다!"
            }

        }
        
        else{ // 틀리면 값을 초기화
            if(strike == 1){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("strike1").style.backgroundColor = "yellow";
            }
            else if(strike==2 ){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("strike1").style.backgroundColor = "yellow";
                document.getElementById("strike2").style.backgroundColor = "yellow";
            }

            if(ball == 1){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("ball1").style.backgroundColor = "green";
            }
            else if(ball==2 ){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("ball1").style.backgroundColor = "green";
                document.getElementById("ball2").style.backgroundColor = "green";

            }
            else if(ball==3 ){
                document.getElementById("정답").innerHTML = "다시 시도해보세요"
                document.getElementById("ball1").style.backgroundColor = "green";
                document.getElementById("ball2").style.backgroundColor = "green";
                document.getElementById("ball3").style.backgroundColor = "green";
            }
            
            resetInput();
            
        }
        //결과 출력 부분(복구 혹은 수정)
        // document.getElementById("Str").innerHTML = strike+" Strike";
        // document.getElementById("Bal").innerHTML = ball+" Ball";

        strike = 0;
        ball =0;
    } 

}
// 입력,정답,전광판,게임등 리셋하는 함수 부분
function resetInput(){
    input1 = 0;
    input2 = 0;
    input3 = 0;
}
function resetTarget(){
    target1 = 0;
    target2 = 0;
    target3 = 0;
}

function resetScoreBoard(){
    document.getElementById("ball1").style.backgroundColor = "gray";
    document.getElementById("ball2").style.backgroundColor = "gray";
    document.getElementById("ball3").style.backgroundColor = "gray";
    document.getElementById("strike1").style.backgroundColor = "gray";
    document.getElementById("strike2").style.backgroundColor = "gray";
}

function resetGame(){
    target1 = 0;
    target2 = 0;
    target3 = 0;
    input1 = 0;
    input2 = 0;
    input3 = 0;
    document.getElementById("ball1").style.backgroundColor = "gray";
    document.getElementById("ball2").style.backgroundColor = "gray";
    document.getElementById("ball3").style.backgroundColor = "gray";
    document.getElementById("strike1").style.backgroundColor = "gray";
    document.getElementById("strike2").style.backgroundColor = "gray";
    document.getElementById("정답").innerHTML = ""

    getTargetNumber();
    console.clear()
    console.log("Answer is ",target1, target2,target3)
}

function hardResetGame(){
    resetGame();
    out = 0;
    document.getElementById("out1").style.backgroundColor = "gray";
    document.getElementById("out2").style.backgroundColor = "gray";
    document.getElementById("최종 승리").innerHTML = ""
    document.getElementById("경기결과").innerHTML = ""
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