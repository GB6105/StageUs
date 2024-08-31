// var inputFile = document.getElementById("fileInput");
// inputFile.addEventListener("change", cutImage, false);

// function cutImage(level) {
//     const fileList = this.files;
//     var imageFile = fileList[0];
    
//     if (!imageFile) {
//         return;
//     }
    
//     var canvas = document.getElementById("canvas");
//     var ctx = canvas.getContext("2d");

//     var row = level;
//     var col = level;
//     var img = new Image();

//     var reader = new FileReader();
//     reader.onload = function(event) {
//         img.src = event.target.result;
//     };
//     reader.readAsDataURL(imageFile);

//     img.onload = function() {
//         var iw = canvas.width = img.width;
//         var ih = canvas.height = img.height;
//         var pieceWidth = iw / col;
//         var pieceHeight = ih / row;

//         var pieces = [
//             {col:0, row:0},
//             {col:1, row:0},
//             {col:2, row:0},
//             {col:0, row:1},
//             {col:1, row:1},
//             {col:2, row:1},
//             {col:0, row:2},
//             {col:1, row:2},
//             {col:2, row:2},
//         ];

//         shuffle(pieces);

//         var i = 0;
//         for (var y = 0; y < row; y++) {
//             for (var x = 0; x < col; x++) {
//                 var p = pieces[i++];
//                 ctx.drawImage(img,
//                     x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight,
//                     p.col * pieceWidth, p.row * pieceHeight, pieceWidth, pieceHeight
//                 );
//             }
//         }
//     };

//     function shuffle(a) {
//         for (var j, x, i = a.length; i; j = Math.floor(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
//         return a;
//     }
// }

// Global variables to store image data and canvas contexts
var canvas, ctx, image;
var level = 2; // Default level, will be updated based on user selection

// Handle image upload
document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            image = new Image();
            image.onload = function() {
                createPuzzleImage(image);
            };
            image.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Create the puzzle image
function createPuzzleImage(img) {
    if (!canvas) {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
    }
    
    const numPieces = level ** 2;
    const pieceSize = img.width / level;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    const folderPath = 'images/level' + level;
    createFolder(folderPath); // Create folder if it doesn't exist (use server-side logic for actual folder creation)
    
    for (let i = 0; i < level; i++) {
        for (let j = 0; j < level; j++) {
            const sx = i * pieceSize;
            const sy = j * pieceSize;
            const piece = ctx.getImageData(sx, sy, pieceSize, pieceSize);
            const pieceCanvas = document.createElement('canvas');
            pieceCanvas.width = pieceSize;
            pieceCanvas.height = pieceSize;
            const pieceCtx = pieceCanvas.getContext('2d');
            pieceCtx.putImageData(piece, 0, 0);
            
            const pieceDataURL = pieceCanvas.toDataURL('image/jpeg');
            savePiece(pieceDataURL, folderPath, i * level + j + 1);
        }
    }
}

// Save each image piece to the specified folder (simulated here)
function savePiece(dataURL, folderPath, index) {
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `${folderPath}/sampleImg_${index}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Simulated function to create a folder (actual implementation depends on your server setup)
function createFolder(folderPath) {
    console.log(`Creating folder: ${folderPath}`);
    // Implementation for folder creation on the server
}

// Function to set the puzzle level
function setLevel(n) {
    level = n;
}
