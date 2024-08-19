// 변수 생성 함수
var target1, target2, target3;

function getRandomNumber(){
    return Math.floor(Math.random() * 9)+1
}

function getTargetNumber(){
    target1 = getRandomNumber()
    target2 = getRandomNumber()
    if (target1 == target2){
        target2 = getRandomNumber()
    }
    target3 = getRandomNumber()
    if (target1 == target3|| target2 == target3){
        target3 = getRandomNumber()
    }

    document.getElementById("target1").innerHTML = target1
    document.getElementById("target2").innerHTML = target2
    document.getElementById("target3").innerHTML = target3

    console.log("Answer is ",target1, target2,target3)
}

//입력 부분 함수
var input1 =0 ,input2=0, input3=0;

function inputNumber(n){
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



function judge(target1,target2,target3){

    console.log("판정이 시작되었고 input1에"+input1+ "이 저장되었습니다.")
    console.log("판정이 시작되었고 input2에"+input2+ "이 저장되었습니다.")
    console.log("판정이 시작되었고 input3에"+input3+ "이 저장되었습니다.")

    var strike = 0;
    var ball = 0;

    judgeNumber(input1,1)
    judgeNumber(input2,2)
    judgeNumber(input3,3)

    console.log(strike)
    console.log(ball)

    //정답 판정 부분
    if (strike == 3){
        document.getElementById("정답").innerHTML = "정답입니다."
    }
    else{ // 틀리면 값을 초기화
        document.getElementById("정답").innerHTML = "다시 시도해보세요"
        input1 = 0;
        input2 = 0;
        input3 = 0;
        
    }

    document.getElementById("strike").innerHTML = strike+" Strike";
    document.getElementById("ball").innerHTML = ball+" Ball";
}

function resetGame(){
    target1 = 0;
    target2 = 0;
    target3 = 0;
    input1 = 0;
    input2 = 0;
    input3 = 0;
    getTargetNumber();
    console.clear()
}

function judgeNumber(inputValue,k){
    if(inputValue == 0){
        console.log("숫자 3개를 입력해주세요 현재 입력된 숫자 개수"+ (k-1))
    }
    else if(inputValue == target1){
        strike += 1
    }
    else if (inputValue == target2 || inputValue == target3){
        ball += 1
    }
}