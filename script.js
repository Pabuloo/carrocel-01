const carroucel = document.querySelector(".carroucel");
firsImg = carroucel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, preveScrollLeft;
let firsImgWidth = firsImg.clientWidth + 14; // getting first img width & adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce width value from the carrocel scroll left else add to it
        carroucel.scrollLeft += icon.id == "left" ? -firsImgWidth : firsImgWidth;
    });
});



const dragStart = (e) => {
    // update global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    preveScrollLeft = carroucel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carroucel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carroucel.scrollLeft = preveScrollLeft - positionDiff;
} 

const dragStop = () => {
    isDragStart = false;
}

carroucel.addEventListener("mousemove", dragStart);
carroucel.addEventListener("mousemove", dragging);
carroucel.addEventListener("mousemove", dragStop);