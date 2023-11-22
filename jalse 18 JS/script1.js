var box = document.getElementById('box');
var leftPosition = 0;

function moveBox() {
  leftPosition += 5;
  box.style.left = leftPosition + 'px';
  
  if (leftPosition < 500) {
    setTimeout(moveBox, 50);
  }
}

moveBox();
