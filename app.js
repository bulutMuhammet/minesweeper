var boxes = document.getElementsByClassName("box");

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClicked, false);
}

function boxClicked(){
    this.classList.remove('closed-li')
    this.classList.add('opened-li')
    this.getElementsByTagName('span')[0].classList.remove('closed')
}
