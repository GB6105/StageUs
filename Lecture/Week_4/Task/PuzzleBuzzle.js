// calling global variance
var draggedImgSource = null;
var targetCellImg = null;
var lastDraggedCellId = null;
var checkPuzzleAndAnswer = []; // array for checkAnswer
for (var i = 0; i< 9; i++){
    checkPuzzleAndAnswer.push(false)
}

function makePuzzleBox(level){
    
    var parent = document.getElementById("startZone");

    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }


    var indexList = [];
    for (var j = 1 ; j < (level ** 2)+1; j++){
        indexList.push(i)
    }

    for (var i = 1 ; i < (level ** 2) + 1; i++){
        var puzzleBoard = document.createElement("div")
        var randomIndex = getRandomIndexNumber(indexList)

        //containor setting
        puzzleBoard.id = "Puzzle" + randomIndex
        puzzleBoard.style = "width:" + (90/level)+"%; height:" + (90/level)+"%;"
        puzzleBoard.style.color = "white"
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.style.border = "1px solid white"
        puzzleBoard.style.backgroundColor = "white"

        //img Source 
        puzzleBoard.style.backgroundImage = "url(images/sampleImg_" + randomIndex + ".jpg)";
        puzzleBoard.style.backgroundRepeat = "no-repeat"
        puzzleBoard.style.backgroundSize = "cover"

        //drag & drop Options
        puzzleBoard.draggable = "true"
        puzzleBoard.ondragstart = getImgSourceEvent
        puzzleBoard.ondragover = dragOverEvent
        puzzleBoard.ondrop = setImgSourceEvent

        document.getElementById("startZone").appendChild(puzzleBoard) //insert new cell for start zone
    }
}
// makePuzzleBox(level);

function makeAnswerBox(level){

    var parent = document.getElementById("answerZone");

    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    for (var i = 1 ; i < (level ** 2)+1; i++){
        var puzzleBoard = document.createElement("div")

        //containor setting
        puzzleBoard.id = "Answer" + i //make difference between puzzle and answer zone index
        puzzleBoard.style = "width:" + (90/level)+"%; height:" + (90/level)+"%;"
        puzzleBoard.style.color = "rgba(0,0,0,0)" // setting cell index for invisible
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.style.border = "1px solid white"
        puzzleBoard.style.backgroundColor = "white"
        puzzleBoard.innerHTML = i


        //answer zone setting(no base images)/
        //basic settings only
        puzzleBoard.style.backgroundSize = "cover"
        puzzleBoard.style.backgroundRepeat = "no-repeat"

        //drag & drop Options
        puzzleBoard.draggable = "true"
        puzzleBoard.ondragstart = getImgSourceEvent
        puzzleBoard.ondragover = dragOverEvent
        puzzleBoard.ondrop = setImgSourceEvent

        document.getElementById("answerZone").appendChild(puzzleBoard) // insert new cell for answer zone

        
    }
}

// makeAnswerBox(level);



//////// function declare part////////

function getImgSourceEvent(event){//get img source from picked cell
    var target = event.target // get event property of drgging cell
    draggedImgSource = window.getComputedStyle(target).backgroundImage // get image info of drgging cell
    console.log(draggedImgSource + "그림을 집어들었습니다.")

    lastDraggedCellId = target.id // make recent dragging cell log
    console.log("퍼즐의 " + target.id + "번째 칸의 그림을 드래그 했습니다.")
    
}

function dragOverEvent(event){//prevent Default
    event.preventDefault()
}

function setImgSourceEvent(event){//change img source 
    var target = event.target    //get event property of target cell
    targetCellImg = window.getComputedStyle(target).backgroundImage //get recent image info from target cell

    target.style.backgroundImage = draggedImgSource // set new img to target cell
    console.log(target.id+"번 정답칸의 그림이" + draggedImgSource + "로 바뀌었습니다.")
    console.log(targetCellImg + "가 추출 되었습니다.")//checking beforImgsource

    var beforeCell = document.getElementById(lastDraggedCellId) // pickup last cell
    beforeCell.style.backgroundImage = targetCellImg // save recent image info to last cell

    //get information of event
    console.log("원래 드래그했던" + lastDraggedCellId + "번 퍼즐 칸에" + targetCellImg + "이 저장됩니다.")
    console.log("----------------------------------------")
    console.log(draggedImgSource)
    console.log("url(images/sampleImg_" + target.innerHTML + ".jpg)")
    console.log("----------------------------------------")
   
    if(draggedImgSource.includes("images/sampleImg_" + target.innerHTML + ".jpg")){ // compare image data index and Cell index(fixed)
        console.log("그림과 정답칸의 인덱스가 서로 일치합니다.")
        checkPuzzleAndAnswer[target.innerHTML-1] = true;

    }else{
        console.log("그림과 정답칸의 인덱스가 서로 일치하지 않습니다.")
        checkPuzzleAndAnswer[target.innerHTML-1] = false;
    }


    console.log(checkPuzzleAndAnswer)
    var countRightPuzzleCell = 0;
    for (var i = 0 ; i < 9 ; i++){
        if (checkPuzzleAndAnswer[i] == true){
            countRightPuzzleCell += 1
        }

    }
    if(countRightPuzzleCell == 9){ //반복 변수 배열 길이로 하면 안됨ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 
        document.getElementById("answerAlert").innerHTML = "정답입니다."
        
    }
    
}

function getRandomIndexNumber(indexList){ // get random index to make random puzzle
    var random = Math.floor(Math.random() * indexList.length)
    var randomIndex = indexList.splice(random,1)
    return randomIndex
} 

function resetBeforeImg(){
    draggedImgSource = null;
    targetCellImg = null;
    lastDraggedCellId = null;
}