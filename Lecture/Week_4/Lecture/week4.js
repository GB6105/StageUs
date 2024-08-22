// 탑다운
// 1. 레이아웃
// 2. 대상 숫자 가져와야 함
// 3. 대상 숫자의 곱해줘야 함
// 4. 그 결과를 화면에 출력

function calGugudanEvent(){
    var number = parseInt(document.getElementById("number").value)

    for(var index = 0; index < 10; index++){
        //for 문 동작 원리
        // cpu는 기억을 하지 못하기 때문에 변수를 생성하고 끊임없이 비교
        
        // 2. js에서 HTML tag를 만들기
        var resultP = document.createElement("p")
        resultP.innerHTML = number * (index + 1)
        document.getElementById("dest").appendChild(resultP)

        // 1. 기존에 배웠던 방법
        // var result = number * (index + 1)
        // document.getElementById("result"+(index + 1)).innerHTML = result
    
    } //string + integer -> string 역은 에러가 남

    
    // var result1 = number * 1
    // document.getElementById("result1").innerHTML = result1

    // var result2 = number * 2
    // document.getElementById("result2").innerHTML = result2

    // var result3 = number * 3
    // document.getElementById("result3").innerHTML = result3

    // var result4 = number * 4
    // document.getElementById("result4").innerHTML = result4

    // var result5 = number * 5
    // document.getElementById("result5").innerHTML = result5
}

// 2번째 문법 html에서 반복?
// 자바스크립트에서 태그를 만들어서 html에 넣어주는 것도 가능하다.

// var button = document.createElement("input")
// // 어떤 태그를 만들지 소괄호에 지정해주기
// button.type = "button"
// button.value = "로그인"
// //<input type = "button" valye = "로그인"> 과 동일한 문장

// list
// 여러개의 변수를 묶어서 관리하는 문법 (보통 반복문 때문에)

// var num1 =10
// var num1 =10
// var num1 =10

// // 변수 이름은 고유한 값이기 때문에 조작이 불가능 함

// var nums = [10, 20, 30]

// for (var index = 0 ; index < nums.length ; index++)
// {
//     console.log(nums[index])
// }

// 1. list는 보통 반복문 때문에 씀
// 반복문의 범위를 정해줄 때, 고정 값을 주면 안됨
// 기본 습관으로 들일 것

// 2. list와 관련된 문법들 많이 찾아 볼 것

// object

// var obj = {
//     "name":"stageus",
//     "location":"인천",
//     "age":4,
//     "member":["지원","태균","재섭"],
//     "leader":{
//         "name":"민석",
//         "age" : 30
//     }
// }

// //obj 접근 방법
// obj.name
// obj.age
// obj.member[2]
// obj.leader.name

// // object 형 list
const videolist =[
    {
        "title":"테스트 비디오입니다.",
        "channel":"스테이지어스",
        "date":"2024-01-02"
    },
    {
        "title":"테스트 비디오입니다.",
        "channel":"tmxpdlwldjtm",
        "date":"2024-01-02"
    }
]


// 추가적인 기법
// Event 심화 내용
// js는 이벤트 쓸려고 쓰는거임

// 이벤트의 종류
// onclikc : 클릭을 할 때 
//  onchange : 값이 바뀔 떄
// onmouseover : 마우스가 올라갈 때 
// onmouseLeave : 마우스가 내려갈 때
// onscroLL: 스크롤링 할 때

// 내 선택 하에 Tag에 여러 개의 이벤트를 줄 수 도 있음

// Event들의 내부 동작 구조 

// onmouseover vs onmouseenter
// onclick vs ontouch


// drag & drop

// ondragstart: 드래그 시작할 때
// ondragover: 드래그를 한 채로 마우스가 올라갈 때
// ondrop: 드랍 할 때

// var color = null

// function getColorEvent(e){
//     var target = e.target  //태그를 가져와줌
//     //var color = target.style.backgroundColor // 인라인 스타일을 가져온다는 뜻
//     //밖으로 뺀 css는 사용 불가능  
//     // 이친구는 inline-style 을 가져오는 문법
    
//     color = window.getComputedStyle(target).backgroundColor

//     console.log(color)
// }

// function dragOverEvent(e){
//     console.log("실행됨?")
//     e.preventDefault()
//     // 이거 들어가야해서 이함수가 여기서 필요함
//     // setColorEvent에 넘어가는 조건을 풀어주기 위함임

//     // 이벤트가 실행되는 중에는 브라우저의 기본 설정을 꺼달라
// }

// function setColorEvent(e){
//     console.log("드랍 됨?") // 출력안됨 실행 안됨
//     // document.getElementById("dest").style.backgroundColor = color
//     e.target.style.backgroundColor = color
// }
// // e는 이벤트에 대한 모든 정보를 담음 target은 태그를 가져오는 것


// //브라우저는 태그위에 다른태그가 올라갈 수 없다는 기본 설정이 있음
// // 드랍 자체가 무시된다.
// // ui 께지는 것을 막기 위해서임


