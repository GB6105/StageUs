
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
    document.getElementById("상황출력").innerHTML = "3이 순서까지 맞았으므로 1 strike1 입니다." 
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