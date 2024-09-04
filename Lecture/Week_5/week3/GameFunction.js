// 전역 변수 설정

var answer = []
var input = []
var lastnput = [0,0,0]
var strike1 = 0, strike2 = 0;
var ball1 = 0, ball2 = 0;
var out = 0;


function getRandomNumber(){
    for (var i = 0 ; i <answer.length ; i++){
        var random = Math.floor(Math.random() * 9 ) + 1
        answer.push(random)

        for (var j = 0; j < answer.length; i++){
            if (answer[i] == answer[j]){
                i--;
                break;
            }
        }

    }
}




// 숫자 입력 파트 반복문으로 수정

for (var i = 0 ; i < input.length; i++){// 배열 길이만큼 실행하고
    if (input[0] == 0){
        input[0] = n
        break
    }
    else if(input[i] == 0){
        for (var j = 0 ; j < input.length; j++){
            if(n == input[j]){
                console.log("이미 입력된 숫자입니다.")
                break;
            }
        }
        input[i] = n
        console.log(input[i], "input" + i + "에" + n + "이 저장됩니다.")
        break
    }

}