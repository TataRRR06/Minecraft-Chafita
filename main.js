var canvas=new fabric.Canvas("myCanvas");

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";
var bloque_image_object="";

function player_update(){
fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        bloque_image_object=Img;
        bloque_image_object.scaleToWidth(block_image_width);
        bloque_image_object.scaleToHeight(block_image_height);
        bloque_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(bloque_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if(e.shiftKey==true && keyPressed=='80')
{ 
console.log("Se presiona p y shift al mismo tiempo");
block_image_width= block_image_width+10;
block_image_height= block_image_height+10;
document.getElementById("currentWidth").innerHTML=block_image_width;
document.getElementById("currentHeight").innerHTML=block_image_height;
}

if(e.shiftKey==true && keyPressed=='77')
{ 
console.log("Se presiona m y shift al mismo tiempo");
block_image_width= block_image_width-10;
block_image_height= block_image_height-10;
document.getElementById("currentWidth").innerHTML=block_image_width;
document.getElementById("currentHeight").innerHTML=block_image_height;
}
if (keyPressed == '38'){
    up();
    console.log("up");
}
if (keyPressed == '39'){
    rigth();
    console.log("rigth");
}
if (keyPressed == '40'){
    down();
    console.log("down");
}
if (keyPressed == '37'){
    left();
    console.log("left");
}
if (keyPressed == '80'){
    new_image('wall.jpg');
    console.log("p");
}
if (keyPressed == '84'){
    new_image('ground.png');
    console.log("t");
}
if (keyPressed == '70'){
    new_image('dark_green.png');
    console.log("f");
}
if (keyPressed == '78'){
    new_image('cloud.jpg');
    console.log("n");
}
if (keyPressed == '67'){
    new_image('light_green.png');
    console.log("c");
}
if (keyPressed == '72'){
    new_image('roof.jpg');
    console.log("h");
}
if (keyPressed == '79'){
    new_image('trunk.jpg');
    console.log("o");
}
if (keyPressed == '65'){
    new_image('unique.png');
    console.log("a");
}
if (keyPressed == '73'){
    new_image('yellow_wall.png');
    console.log("i");
}
}
function up(){
    if(player_y >=0){
        player_y= player_y - block_image_height;
        console.log("Altura del bloque"+block_image_height);
        console.log("Cuando se presiona la flecha hacia arriba ,X="+player_x +",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down (){
    if(player_y <=500){
        player_y= player_y + block_image_height;
        console.log("Altura del bloque"+ block_image_height);
        console.log("Cuando se presiona la flecha hacia abajo ,X="+player_x +",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left (){
    if(player_x >0){
        player_x= player_x - block_image_width;
        console.log("Ancho del bloque"+ block_image_width);
        console.log("Cuando se presiona la flecha hacia la derecha ,X="+player_x +",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function rigth (){
    if(player_x <=850){
        player_x= player_x + block_image_width;
        console.log("Ancho del bloque"+ block_image_width);
        console.log("Cuando se presiona la flecha hacia la izquierda ,X="+player_x +",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}