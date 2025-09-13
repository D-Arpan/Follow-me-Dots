// let pointer = document.querySelector("#box");
// let pointer2 = document.querySelector("#box2");
// let pointer3 = document.querySelector("#box3");
// let pointer4 = document.querySelector("#box4");



// pointer.addEventListener("mouseover", function(){
//     pointer.style.backgroundColor = "red";
// });

// pointer.addEventListener("mouseout", function(){
//     pointer.style.backgroundColor = "yellow";
// });

// window.addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
//     pointer.style.top = dets.clientY + "px";
//     pointer.style.left = dets.clientX + "px";
// });





// pointer2.addEventListener("mouseover", function(){
//     pointer2.style.backgroundColor = "red";
// });

// pointer2.addEventListener("mouseout", function(){
//     pointer2.style.backgroundColor = "yellow";
// });

// window.addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
//     pointer2.style.top = dets.clientY + "px";
//     pointer2.style.left = dets.clientX + "px";
// });






// pointer3.addEventListener("mouseover", function(){
//     pointer3.style.backgroundColor = "red";
// });

// pointer3.addEventListener("mouseout", function(){
//     pointer3.style.backgroundColor = "yellow";
// });

// window.addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
//     pointer3.style.top = dets.clientY + "px";
//     pointer3.style.left = dets.clientX + "px";
// });





// pointer4.addEventListener("mouseover", function(){
//     pointer4.style.backgroundColor = "red";
// });

// pointer4.addEventListener("mouseout", function(){
//     pointer4.style.backgroundColor = "yellow";
// });

// window.addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
//     pointer4.style.top = dets.clientY + "px";
//     pointer4.style.left = dets.clientX + "px";
// });



let boxes = document.querySelectorAll("#box, #box2, #box3, #box4");

// Hover effect for each box
boxes.forEach(box => {
    box.addEventListener("mouseover", function () {
        box.style.backgroundColor = "red";
    });

    box.addEventListener("mouseout", function () {
        box.style.backgroundColor = "yellow";
    });
});

// Single mousemove event
window.addEventListener("mousemove", function (e) {
    boxes.forEach(box => {
        box.style.top = e.clientY + "px";
        box.style.left = e.clientX + "px";
    });
});
