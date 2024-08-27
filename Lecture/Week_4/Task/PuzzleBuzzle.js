// calling global variance
var draggedImgSource = null;
var targetCellImg = null;
var lastDraggedCellId = null;
var checkPuzzleAndAnswer = [];
for (var i = 0; i< 9; i++){
    checkPuzzleAndAnswer.push(false)
}

function makePuzzleBox(){
    
    var indexList = [1,2,3,4,5,6,7,8,9];

    for (var i = 1 ; i < 10; i++){
        var puzzleBoard = document.createElement("div")
        var randomIndex = getRandomIndexNumber(indexList)

        //containor setting
        puzzleBoard.id = "Puzzle" + randomIndex
        puzzleBoard.style = "width: 31% ; height: 31%;"
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
makePuzzleBox();

function makeAnswerBox(){
    for (var i = 1 ; i < 10; i++){
        var puzzleBoard = document.createElement("div")

        //containor setting
        puzzleBoard.id = "Answer" + i //make difference between puzzle and answer zone index
        puzzleBoard.style = "width: 31% ; height: 31%;"
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

makeAnswerBox();

// while (1){
//     var rightPuzzleCellNumber = 0
//     for (var i = 0 ; i<checkPuzzleAndAnswer.length ; i++){
//         if (checkPuzzleAndAnswer[i] == true){
//             rightPuzzleCellNumber += 1
//         }
//     }
//     if (rightPuzzleCellNumber == checkPuzzleAndAnswer.length){
//         document.getElementById("answerAlert").innerHTML = "정답입니다."
//         break
//     }

// }
// function checkingAnser(checkPuzzleAndAnswer){
//     var rightPuzzleCellNumber = 0
//     for (var i = 0 ; i<checkPuzzleAndAnswer.length ; i++){
//         if (checkPuzzleAndAnswer[i] == true){
//             rightPuzzleCellNumber += 1
//         }
//     }
//     if (rightPuzzleCellNumber == checkPuzzleAndAnswer.length){
//         document.getElementById("answerAlert").innerHTML = "정답입니다."
    
//     }

// }

// function checkingAnswer(){
//     for (var i = 0 ; i < 9; i++){
//         if (randomIndex == 정답칸 인덱스(진짜 인덱스)){

//         }
//     }

//     var answerAlert= document.createElement("div")
//     document.getElementById("answerAlert").appendChild(answerAlert)

// }


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
    for (var i = 0 ; i < checkPuzzleAndAnswer.length ; i++){
        if (checkPuzzleAndAnswer[i] == true){
            countRightPuzzleCell += 1
        }

    }
    if(countRightPuzzleCell == checkPuzzleAndAnswer.length){
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