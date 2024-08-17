// 함수 생성 본
// function getRandomVar(){
//     var random1= Math.floor(Math.random() * 10);
//     var random2= Math.floor(Math.random() * 10);
//     var random3= Math.floor(Math.random() * 10);
//     if (random1 == random2 || random1 == random3 || random2 == random3){
//         getRandomVar()
//     }
//     console.log(random1)
//     console.log(random2)
//     console.log(random3)
// }
// getRandomVar()

var t1=0, t2=0, t3=0
var arr = [];

function getRandomVar(){
    var random1= Math.floor(Math.random() * 10);
    var random2= Math.floor(Math.random() * 10);
    
    var random3= Math.floor(Math.random() * 10);
    if (random1 == random2 || random1 == random3 || random2 == random3){
        getRandomVar()
    }
    // console.log(random1)
    // console.log(random2)
    // console.log(random3)

    document.getElementById("target1").innerHTML = random1;
    document.getElementById("target2").innerHTML = random2;
    document.getElementById("target3").innerHTML = random3;

}



var input1 = parseInt(document.getElementById("number1").value);
var input2 = parseInt(document.getElementById("number2").value);
var input3 = parseInt(document.getElementById("number3").value);
console.log(input1)
console.log(input2)
console.log(input3)


function judge(random1,random2,random3){
    var strike = 0;
    var ball = 0;

    if(input1 == random1){
        strike += 1
    }
    else if (input1 == random2 || input2 == random3){
        ball += 1
    }
    

    if (input2 == random2){
        strike += 1
    }
    else if (input2 == random1 || input2 == random3){
        ball += 1
    }
    
    if (input3 == random3){
        strike += 1
    }
    else if(input3 == random1 || input3 == random2){
        ball += 1
    }

    console.log(strike)
    console.log(ball)

    document.getElementById("strike").innerHTML = strike;
    document.getElementById("ball").innerHTML = ball;

}


getRandomVar()




function printMessage(){
    console.log("hello")
}
printMessage()
