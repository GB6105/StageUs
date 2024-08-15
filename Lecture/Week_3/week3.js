function printMessage(){ // 함수 선언
    console.log("hello") // 출력을 담당
}
function volumeOfSphere() {
    console.log( 4 / 3 * 3 * 3* 3* 3.14)
}

printMessage() //함수 호출
volumeOfSphere()
printMessage()

매개 변수return 값 둘 다 없는 경우
function printMessage(){
    console.log("Hello")
}

printMessage()

function power(number){
    console.log(number * number)
}

power(3)
power(10)
power(-99)

//매개 변수, return 값이 둘다 있는 경우

function power2(number){
    return number * number
}

console.log(power2(3))

function add(number1, number2){
    return number1 + number2
}

console.log(add(1,3))

변수

변수는 뭔가를 담아두는 공간
변수를 만들면. RAM에 만들어짐
공간할당

var number = 10

console.log(number)
console.log(number + number)
console.log(number*2)

number = 20

console.log(number)
console.log(number + number)
console.log(number*2)

// 한번 쓸 변수는 만들지 말아라

// 자료형 (Date Type)
// 변수에 담겨있는 데이터가 어떤 종류냐
var value1 = 10     //integer
var value2 = "10"   //string
var value3 = 10.0   //double
console.log(toString(value1) + toString(value1))    //20
console.log(parseInt(value2) + parseInt(value2))  //1010 // parseInt 정수형으로 바꿔주는 함수

전역 변수
var number =10  //전역 변수 !!메모리가 낭비되므로 잦은 사용 주의
                // 메모리적 측면에서 접근

function printNumber(){
    var number2 = 20 //지역변수
    console.log(number)
    console.log(number2)
}//지역변수 소멸 시점

printNumber()

console.log(number)
console.log(number2)


function printEvent(){
    console.log("출력")
}

function addEvent(){
    var number1 = document.getElementById("number1").value
                    //도큐먼트의 함수의 속성
                    //자바스크립트에서 HTML태그를 가져오는 get함수
    var number2 = document.getElementById("number2").value

    var result = parseInt(number1) + parseInt(number2)

    var destination = document.getElementById("dest")

    destination.innerHTML=result

    document.getElementById("dest").innerHTML= number1 + number2
}

목표: 더하기 기능 만들기 탑다운 방식
1. 레이아웃 만들기

2. 입력한 숫자 가져와 저장하기

3. 더하기

4. 화면에 출력하기

빼기 곱하기 나누기

function addEvent(){
    var number1 = parseInt(document.getElementById("number1").value)
    var number2 = parseInt(document.getElementById("number2").value)

    document.getElementById("dest").innerHTML= number1 + number2
}
function subEvent(){
    var number1 = parseInt(document.getElementById("number1").value)
    var number2 = parseInt(document.getElementById("number2").value)

    document.getElementById("dest").innerHTML= number1 - number2
}
function powEvent(){
    var number1 = parseInt(document.getElementById("number1").value)
    var number2 = parseInt(document.getElementById("number2").value)

    document.getElementById("dest").innerHTML= number1 * number2
}

function divEvent(){
    var number1 = parseInt(document.getElementById("number1").value)
    var number2 = parseInt(document.getElementById("number2").value)

    document.getElementById("dest").innerHTML= number1 / number2
}


var number1 = parseInt(document.getElementById("number1").value)
var number2 = parseInt(document.getElementById("number2").value)
//전역변수는 프로그램이 시작될때 저장됨
//따라서 빈 값이 저장됨
//변수가 저장되는 시점이 중요함

//함수, 변수, event
//js에서 html가져오는 방법

function compareEvent(){
    var number1 = parseInt(document.getElementById("number1").value)
    var number2 = parseInt(document.getElementById("number2").value)

    //조건문
    if (number1 > number2) {
        document.getElementById("dest").innerHTML= "왼쪽이 커요"
    }
    else if (number1 < number2) {
        document.getElementById("dest").innerHTML= "오른쪽이 커요"
    }
    else if (number1 == number2) {
        document.getElementById("dest").innerHTML= "같다에요"
    }
    else {
        document.getElementById("dest").innerHTML= "숫자가 아니에요"
    }

}


// 이번 주 과제 - 게임만들기

// 숫자 야구

// 컴퓨터가 겹치지않는 3자리 숫자를 생각

// 이 숫자를 맞추는게 목표

// 플레이어가 임의 숫자를 입력
// 유사한 정도를 힌트로 반환
// 아무것도 안 맞으면 0s 0b
// 숫자만 맞고 위치가 다르면 1ball
// 숫자도 맞고 위치도 맞으면 1strike

// 3strkie가 나오면 클리어


// 추가 조건:
// 숫자 입력 방식을 1부터 9까지의 버튼으로 만들어서 입력

// 말이되는 프로그램인가
//예외처리 주의 숫자가 3개가 다 들어가야함
