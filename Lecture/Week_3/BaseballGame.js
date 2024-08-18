// 함수 생성 본
// function getRandomVar(){
//     var target1= Math.floor(Math.random() * 10);
//     var target2= Math.floor(Math.random() * 10);
//     var target3= Math.floor(Math.random() * 10);
//     if (target1 == target2 || target1 == target3 || target2 == target3){
//         getRandomVar()
//     }
//     console.log(target1)
//     console.log(target2)
//     console.log(target3)
// }
// getRandomVar()

// var t1=0, t2=0, t3=0
// var arr = [];

// function getRandomVar(){
//     var target1= Math.floor(Math.random() * 10);
//     var target2= Math.floor(Math.random() * 10);
    
//     var target3= Math.floor(Math.random() * 10);
//     if (target1 == target2 || target1 == target3 || target2 == target3){
//         getRandomVar()
//     }
//     // console.log(target1)
//     // console.log(target2)
//     // console.log(target3)

//     document.getElementById("target1").innerHTML = target1;
//     document.getElementById("target2").innerHTML = target2;
//     document.getElementById("target3").innerHTML = target3;

// }

var target1, target2, target3;

function getRandomNumber(){
    return Math.floor(Math.random() * 10)
}

function getTargetNumber(){
    target1= getRandomNumber()
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


function judge(target1,target2,target3){

    var input1 = parseInt(document.getElementById("number1").value);
    var input2 = parseInt(document.getElementById("number2").value);
    var input3 = parseInt(document.getElementById("number3").value);
    
    var strike = 0;
    var ball = 0;

    //1번 숫자 판정
    if(input1 == target1){
        strike += 1
    }
    else if (input1 == target2 || input2 == target3){
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

function atari(){
    if (strike == 3){
        document.getElementById("정답").innerHTML = "정답입니다."
    }

}

atari()


// function printMessage(){
//     console.log("hello")
// }
// printMessage()

