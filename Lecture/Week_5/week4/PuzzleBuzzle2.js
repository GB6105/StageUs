
// PuzzleBuzzle.js

var draggedImgSource = null;
var targetCellImg = null;
var lastDraggedCellId = null;
var gameLevel;
var checkPuzzleAndAnswer = []; 

function selectLevel(n) {
    gameLevel = n;
    checkPuzzleAndAnswer = [];

    for (var i = 0; i < n ** 2; i++) {
        checkPuzzleAndAnswer.push(false);
    }
    
    // 레벨 선택 후 이미지 업로드가 이미 된 경우 퍼즐을 다시 생성합니다.
    if (document.getElementById("fileInput").files.length > 0) {
        handleFile({ target: document.getElementById("fileInput") });
    }
}

function makePuzzleBox(pieces, level) {
    var parent = document.getElementById("startZone");

    while (parent.firstChild) {//원래 있던 퍼즐 지우기
        parent.removeChild(parent.firstChild);
    }

    var indexList = [];
    for (var j = 1; j < pieces.length + 1; j++) {
        indexList.push(j);
    }

    document.getElementById("answerAlert").innerHTML = ""; // 정답 알림 초기화

    pieces.forEach((piece, i) => {
        var puzzleBoard = document.createElement("div");

        // Container settings
        puzzleBoard.id = "Puzzle" + (i + 1);
        puzzleBoard.style = "width:" + (90 / level) + "%; height:" + (90 / level) + "%;";
        puzzleBoard.style.margin = "2px";   
        puzzleBoard.style.border = "1px solid white";
        puzzleBoard.style.backgroundColor = "white";

        // Image Source
        puzzleBoard.style.backgroundImage = "url(" + piece.imgSrc + ")";
        puzzleBoard.style.backgroundRepeat = "no-repeat";
        puzzleBoard.style.backgroundSize = "cover";

        // Drag & Drop Options
        puzzleBoard.draggable = "true";
        puzzleBoard.ondragstart = getImgSourceEvent;
        puzzleBoard.ondragover = dragOverEvent;
        puzzleBoard.ondrop = setImgSourceEvent;

        parent.appendChild(puzzleBoard);
    });

    makeAnswerBox(level);
}

function makeAnswerBox(n) {
    var level = n ** 2;
    var parent = document.getElementById("answerZone");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    for (var i = 1; i < level + 1; i++) {
        var puzzleBoard = document.createElement("div");

        // Container settings
        puzzleBoard.id = "Answer" + i;
        puzzleBoard.style = "width:" + (90 / n) + "%; height:" + (90 / n) + "%;";
        puzzleBoard.style.margin = "2px";   
        puzzleBoard.style.border = "1px solid white";
        puzzleBoard.style.backgroundColor = "white";
        puzzleBoard.innerHTML = i;
        
        puzzleBoard.style.backgroundRepeat = "no-repeat";
        puzzleBoard.style.backgroundSize = "cover";


        // Basic drag & drop settings
        puzzleBoard.draggable = "true";
        puzzleBoard.ondragstart = getImgSourceEvent;
        puzzleBoard.ondragover = dragOverEvent;
        puzzleBoard.ondrop = setImgSourceEvent;

        parent.appendChild(puzzleBoard);
    }
}

////////// 기능 함수들 //////////

function getImgSourceEvent(event) {
    var target = event.target;
    draggedImgSource = window.getComputedStyle(target).backgroundImage;
    lastDraggedCellId = target.id;
    console.log("퍼즐의 " + target.id + "번째 칸의 그림을 드래그 했습니다.");
}

function dragOverEvent(event) {
    event.preventDefault();
}

function setImgSourceEvent(event) {
    var target = event.target;
    targetCellImg = window.getComputedStyle(target).backgroundImage;
    target.style.backgroundImage = draggedImgSource;
    console.log(target.id + "번 정답칸의 그림이 " + draggedImgSource + "로 바뀌었습니다.");
    console.log("드롭한 칸에서 " + targetCellImg + "가 추출되었습니다.");

    var beforeCell = document.getElementById(lastDraggedCellId);
    beforeCell.style.backgroundImage = targetCellImg;
    console.log("원래 드래그했던 " + lastDraggedCellId + "번 퍼즐 칸에 " + targetCellImg + "이 저장됩니다.");

    var correctImageUrl = window.getComputedStyle(document.getElementById("Puzzle" + target.innerHTML)).backgroundImage;
    if (draggedImgSource === correctImageUrl) {
        console.log("그림과 정답칸의 인덱스가 서로 일치합니다.");
        checkPuzzleAndAnswer[target.innerHTML - 1] = true;
    } else {
        console.log("그림과 정답칸의 인덱스가 서로 일치하지 않습니다.");
        checkPuzzleAndAnswer[target.innerHTML - 1] = false;
    }

    console.log(checkPuzzleAndAnswer);
    var countRightPuzzleCell = 0;
    for (var i = 0; i < gameLevel ** 2; i++) {
        if (checkPuzzleAndAnswer[i] == true) {
            countRightPuzzleCell += 1;
        }
    }
    if (countRightPuzzleCell == gameLevel ** 2) {
        document.getElementById("answerAlert").innerHTML = "정답입니다.";
    }
}

function resetBeforeImg() {
    draggedImgSource = null;
    targetCellImg = null;
    lastDraggedCellId = null;
}
