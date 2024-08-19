var target1, target2, target3;

function getRandomNumber(){
    return Math.floor(Math.random() * 10)
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

var input1 =0 ,input2=0,input3=0;

function inputNumber1(){
    if(input1 == 0){
        input1 = 1
        console.log(input1, "input1에 1이 저장됩니다")   
    }
    else if (input1 != 0 && input1 != 1){
        input2 = 1
        console.log(input2, "input2에 1이 저장됩니다")
    }
    else if (input2 !=0){
        input3 = 1
        console.log(input3, "input3에 1이 저장됩니다")
    }
    else if (input1 ==1 || input2 == 1|| input3 == 1){
        console.log("다른 수를 입력해주세요")
    }
}
function inputNumber2(){
    if(input1 == 0){
        input1 = 2
        console.log(input1, "input1에 2이 저장됩니다")   
    }
    else if (input1 != 0 && input1 != 2){
        input2 = 2
        console.log(input2, "input2에 2이 저장됩니다")
    }
    else if (input2 !=0){
        input3 = 2
        console.log(input3, "input3에 2이 저장됩니다")
    }
    else if (input1 ==2 || input2 == 2|| input3 == 2){
        console.log("다른 수를 입력해주세요")
    }
}
function inputNumber3(){
    if(input1 == 0){
        input1 = 3
        console.log(input1, "input1에 3이 저장됩니다")   
    }
    else if (input1 != 0 && input1 != 3){
        input2 = 3
        console.log(input2, "input2에 3이 저장됩니다")
    }
    else if (input2 !=0){
        input3 = 3
        console.log(input3, "input3에 3이 저장됩니다")
    }
    else if (input1 == 3 || input2 == 3|| input3 == 3){
        console.log("다른 수를 입력해주세요")
    }
}
console.log(input1)
function judge(target1,target2,target3){
    console.log("판정이 시작되었고 input1에"+input1+ "이 저장되었습니다.")
    console.log("판정이 시작되었고 input2에"+input2+ "이 저장되었습니다.")
    console.log("판정이 시작되었고 input3에"+input3+ "이 저장되었습니다.")
    // var input1 = parseInt(document.getElementById("number1").value);
    // var input2 = parseInt(document.getElementById("number2").value);
    // var input3 = parseInt(document.getElementById("number3").value);
    
    var strike = 0;
    var ball = 0;

    //1번 숫자 판정
    if(input1 == target1){
        strike += 1
    }
    else if (input1 == target2 || input1 == target3){
        ball += 1
    }
    
    //2번 숫자 판정
    if (input2 == target2){
        strike += 1
    }
    else if (input2 == target1 || input2 == target3){
        ball += 1
    }
    
    //3번 숫자 판정
    if (input3 == target3){
        strike += 1
    }
    else if(input3 == target1 || input3 == target2){
        ball += 1
    }

    console.log(strike)
    console.log(ball)

    //정답 판정 부분
    if (strike == 3){
        document.getElementById("정답").innerHTML = "정답입니다."
    }
    else{
        document.getElementById("정답").innerHTML = "다시 시도해보세요"
    }


    document.getElementById("strike").innerHTML = strike+" Strike";
    document.getElementById("ball").innerHTML = ball+" Ball";

    return strike;
    
}