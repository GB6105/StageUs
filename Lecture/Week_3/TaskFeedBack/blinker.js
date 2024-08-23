
// 전광판 깜빡이기
function blinckBall1(){
    var glowBall = setTimeout(glowBallSign1,0)
    var glowOutBall = setTimeout(glowOutBallSign1, 100)
}

function glowBallSign1(){
    document.getElementById("ball1").style.backgroundColor = 'green'
}
function glowOutBallSign1(){
    document.getElementById("ball1").style.backgroundColor = 'gray'
}


function blinckBall2(){
    var glowBall = setTimeout(glowBallSign2,100)
    var glowOutBall = setTimeout(glowOutBallSign2, 200)
}

function glowBallSign2(){
    document.getElementById("ball2").style.backgroundColor = 'green'
}
function glowOutBallSign2(){
    document.getElementById("ball2").style.backgroundColor = 'gray'
}


function blinckBall3(){
    var glowBall = setTimeout(glowBallSign3,200)
    var glowOutBall = setTimeout(glowOutBallSign3, 300)
}

function glowBallSign3(){
    document.getElementById("ball3").style.backgroundColor = 'green'
}
function glowOutBallSign3(){
    document.getElementById("ball3").style.backgroundColor = 'gray'
}

//스트라이크 빤짝이기
function blinckStrike1(){
    var glowBall = setTimeout(glowStrikeSign1,100)
    var glowOutBall = setTimeout(glowOutStrikeSign1, 200)
}

function glowStrikeSign1(){
    document.getElementById("strike1").style.backgroundColor = 'yellow'
}
function glowOutStrikeSign1(){
    document.getElementById("strike1").style.backgroundColor = 'gray'
}


function blinckStrike2(){
    var glowBall = setTimeout(glowStrikeSign2,200)
    var glowOutBall = setTimeout(glowOutStrikeSign2, 300)
}

function glowStrikeSign2(){
    document.getElementById("strike2").style.backgroundColor = 'yellow'
}
function glowOutStrikeSign2(){
    document.getElementById("strike2").style.backgroundColor = 'gray'
}

//out빤짝이기
function blinckOut1(){
    var glowBall = setTimeout(glowOutSign1,200)
    var glowOutBall = setTimeout(glowOutOutSign1, 300)
}

function glowOutSign1(){
    document.getElementById("out1").style.backgroundColor = 'red'
}
function glowOutOutSign1(){
    document.getElementById("out1").style.backgroundColor = 'gray'
}

function blinckOut2(){
    var glowBall = setTimeout(glowOutSign2,300)
    var glowOutBall = setTimeout(glowOutOutSign2, 400)
}

function glowOutSign2(){
    document.getElementById("out2").style.backgroundColor = 'red'
}
function glowOutOutSign2(){
    document.getElementById("out2").style.backgroundColor = 'gray'
}

