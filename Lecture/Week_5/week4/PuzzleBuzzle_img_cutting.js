// var fileReader = new FileReader();
// function inputFile(e){
//     var fileinput = document.getElementById("fileInput");
//     fileinput.onchange = console.log(e.target.files);
//     fileReader.readAsDataURL(e.target.files[0]);
//     // fileReader.onload = changeImg();
    
// }

// fileReader.onload = function changeImg(){
//     var photoFrame = document.createElement("div");
//     photoFrame.style = 'background : url({fileReader.result}); background-size : cover';
//     photoFrame.className = "photoFrame";
//     document.getElementById("startZone").appendChild(photoFrame)
// }

// var fileReader = new FileReader();

// function inputFile(e) {
//     var fileinput = document.getElementById("fileInput");
//     fileinput.onchange = function() {
//         var file = e.target.files[0];
//         if (file) {
//             fileReader.readAsDataURL(file);
//         }
//     };

//     fileReader.onload = function() {
//         var photoFrame = document.createElement("div");
//         photoFrame.style.background = `url(${fileReader.result})`;
//         photoFrame.style.backgroundSize = 'cover';
//         photoFrame.className = "photoFrame";
//         document.getElementById("startZone").appendChild(photoFrame);
//     };
// }


// document.getElementById("fileInput").addEventListener('change', inputFile);

// function inputFile(e) {
//     var file = e.target.files[0];
//     if (file) {
//         var fileReader = new FileReader();
        
//         fileReader.onload = function() {
//             var photoFrame = document.createElement("div");
//             photoFrame.style.background = `url(${fileReader.result})`;
//             photoFrame.style.backgroundSize = 'cover';
//             photoFrame.className = "photoFrame";
//             document.getElementById("fuckyou").appendChild(photoFrame);
//         };
        
//         fileReader.readAsDataURL(file);
//     }
// }
// fuck you mother fkr

// function importImg(event){
//     var userInputImg = document.getElementById("fileInput")
    
//     var uploadedFiles = () => {
//         var selectedFile = userInputImg.files; // is it ok if we use this info for globally?
//         console.log(selectedFile) // to check file is availabe
    
//         var fileReader = new FileReader();
//         fileReader.readAsDataURL(selectedFile.files[0]);
//         fileReader.onload = function () {
//             document.getElementById("넣고싶은 주소").src = fileReader.result;
//         }
//     }




//     userInputImg.addEventListener("change", uploadedFiles);
    
// }

// importImg();



// var userInputImg = document.getElementById("fileInput")

// var uploadedFiles = (e) => {
//     var selectedFile = userInputImg.files; // is it ok if we use this info for globally?

//     var fileReader = new FileReader();
//     fileReader.readAsDataURL(selectedFile[0]);

//     fileReader.onload = function () {
//         const canvas = document.getElementById("testCanvas");
//         const context = canvas.getContext("2d")

//         var image = new Image();
//         image.src = fileReader.result;

//         image.onload = function() {
//             for (var i = 0; i < gameLevel ; i++){
//                 for (var j = 0; j < gameLevel ; j++){
                    
//                     context.drawImage(image,((420/gameLevel) *j ),((420/gameLevel) *j ),0,(420 / gameLevel),(420 / gameLevel),0,0);
//                 }
//             }
//         }
//     }
// }

// userInputImg.addEventListener("change", uploadedFiles);
    

// function getClippedRegion(image, x, y, width, height){

//     var canvas = document.createElement('canvas')
//     var ctx = canvas.getContext('2d')

//     canvas.width = width;
//     canvas.height = height;

//     ctx.drawImage(image, x, y, 100, 100, 0, 0, 100, 100);

//     return canvas;
// }

// var canvas = document.getElementById('startZone');
// var ctx = canvas.getContext('2d');
// var image = document.getElementById('myImageId');
// //for (var i = 0 ; i < 9; i ++){
//     // var clip = getClippedRegion(image, canvas.width * Math.random(),canvas.height * Math.random(),100,100);

//     // ctx.drawImage(clip,canvas.width * Math.random(),canvas.height * Math.random());
    
// //}
// getClippedRegion(image,0,0,100,100,0,0,100,100)


