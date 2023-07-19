const carroucel = document.querySelector(".carroucel");

let isDragStart = false, prevPageX, preveScrollLeft;

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