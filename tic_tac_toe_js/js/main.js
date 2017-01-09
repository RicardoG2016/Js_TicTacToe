var button = [];
for (var i = 1; i < 10; i++) button[i] = document.getElementById('canvas'+i);

var ctx = [];
for (var i = 1; i < 10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = [];
for (var i = 1; i < 10; i++) bDisabled[i] = false;

var isResult = false;
var content = [];

// x = the clicked canvas button.
function loop(x)
{
  if(bDisabled[x] == false)
  {
    bDisabled[x] = true;
    button[x].style.opacity = 0.7;
// content[x] is used to decide winner with winner function.
    content[x] = 'x';
// rotateY created animation when button is clicked
    button[x].style.Transform = "rotateY(180deg)"; 
    button[x].style.webkitTransform = "rotateY(180deg)"; 
    button[x].style.msTransform = "rotateY(180deg)"; 
    button[x].style.mozTransform = "rotateY(180deg)"; 
    button[x].style.oTransform = "rotateY(180deg)"; 
  }

  setTimeout(function()
  {
    ctx[x].lineWidth = 3;
    ctx[x].beginPath();
    ctx[x].moveTo(10,10);
    ctx[x].lineTo(90,90);
    ctx[x].moveTo(90,10);
    ctx[x].lineTo(10,90);
    ctx[x].stroke();
    ctx[x].closePath();

    // computerTurn();
  }, 300);

  // checkWinner();
}






