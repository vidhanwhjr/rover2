var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bg_shuffle_array= ["pic_1.jpg", "pic_2.jpg", "pic_3.jpg", "pic_4.jpg"];

var random_num = Math.floor(Math.random()*4);

Rover_width = 80;
Rover_height = 90;

var background_img = bg_shuffle_array[random_num];
var rover_img = "rover.png";

rover_x = 0;
rover_y = 0;

function add(){
    background_img2 = new Image();
    background_img2.onload = upbg();
    background_img2.src = background_img;
    rover_img2 = new Image();
    rover_img2.onload = uprover();
    rover_img2.src = rover_img;
}

function upbg(){
    ctx.drawImage(background_img2, 0, 0 , canvas.width, canvas.height )
}

function uprover(){
    ctx.drawImage(rover_img2, rover_x, rover_y , Rover_width, Rover_height )
}

window.addEventListener("keydown", My_keydown);

function My_keydown(e){
    var keypress = e.keyCode;
    if(keypress=='37'){
      Left();
              console.log("left");
      }
      if(keypress=='38'){
        up();
        console.log("up");
      }
      if(keypress=='39'){
        right();
        console.log("right");
      }
      if(keypress=='40'){
        down();
        console.log("down");
      }
}

function Left(){
  if(rover_x>=0){
    rover_x = rover_x-10
    upbg();
    uprover();
  }
}
function right(){
  if(rover_x<=400){
    rover_x = rover_x+10
    upbg();
    uprover();
  }
}
function up(){
  if(rover_y>=0){
    rover_y = rover_y-10
    upbg();
    uprover();
  }
}
function down(){
  if(rover_y<=500){
    rover_y = rover_y+10
    upbg();
    uprover();
  }
}