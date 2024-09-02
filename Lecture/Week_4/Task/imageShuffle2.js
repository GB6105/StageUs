
document.getElementById("fileInput").addEventListener("change", handleFile, false);

function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = function(e) {
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);

    img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const level = gameLevel || 3;  // 기본 레벨 3x3

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const pieceWidth = img.width / level;
        const pieceHeight = img.height / level;

        const pieces = [];
        for (let y = 0; y < level; y++) {
            for (let x = 0; x < level; x++) {
                pieces.push({
                    imgSrc: cropImage(canvas, x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight),
                    col: x,
                    row: y
                });
            }
        }

        shuffle(pieces);
        displayPuzzlePieces(pieces, level);
    };
}

function cropImage(canvas, x, y, width, height) {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = width;
    tempCanvas.height = height;
    tempCtx.drawImage(canvas, x, y, width, height, 0, 0, width, height);
    return tempCanvas.toDataURL();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// PuzzleBuzzle.js에서 이 함수를 구현해야 합니다.
function displayPuzzlePieces(pieces, level) {
    if (typeof makePuzzleBox === "function") {
        makePuzzleBox(pieces, level);
    } else {
        console.error("displayPuzzlePieces를 호출하기 전에 makePuzzleBox 함수를 정의해야 합니다.");
    }
}
