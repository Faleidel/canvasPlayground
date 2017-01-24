/*
draw = function(){ ctx.fillStyle = "rgb("+Math.floor(Math.sin((time*1.2)/9)*255)+","+Math.floor(Math.sin((time*0.8)/5)*255)+","+Math.floor(Math.sin((time*1.2)/19)*255)+")" ; for(var i = 0 ; i < 20 ; i++){ ctx.fillRect(Math.sin((time*i)/10)*300,(i*20)-200,10,10) } };

draw = function(){ ctx.fillStyle = "rgb("+Math.floor(Math.sin((time*1.2)/9)*255)+","+Math.floor(Math.sin((time*0.8)/5)*255)+","+Math.floor(Math.sin((time*1.2)/19)*255)+")" ; for(var i = 0 ; i < 20 ; i++){ ctx.fillRect(Math.sin((time*((i+1)/15))/10)*300,(i*20)-200,30,30) } };

draw = function(){ ctx.fillStyle = "rgb("+Math.floor(Math.sin((time*1.2)/9)*255)+","+Math.floor(Math.sin((time*0.8)/5)*255)+","+Math.floor(Math.sin((time*1.2)/19)*255)+")" ; ctx.rotate(Math.floor(time/10)) ; for(var i = 0 ; i < 20 ; i++){ ctx.fillRect(Math.sin((time*((i+1)/15))/10)*300,(i*20)-200,30,30) } };

draw = function(){
ctx.rotate((time/20)) ;
ctx.scale(1+stn(10,0.5),1+stn(10,0.5));
for(var i = 0 ; i < 30 ; i++){
    ctx.fillStyle = "rgb("+ 255 +","+stf(6+i,255)+","+stf(15+i,255)+")";
    ctx.fillRect(Math.sin((time*((i+1)/15))/10)*300,(i*30)-400+(Math.sin(time/10)*100),40,40);
}
};
*/
draw = function(){
   ctx.fillStyle = "red";
   ctx.fillRect(10,10,10,10);
};

fillColor = "black";
fillAlpha = 1;
time = 1;
function update(){
    time += 1;
    ctx.fillStyle = fillColor;
    ctx.fillRect(0,0,10000,10000);
    
    ctx.save();
    ctx.translate(innerWidth/2,innerHeight/2);
    
    draw();
    
    ctx.restore();
    
    requestAnimationFrame(update);
};

function st(speed,power){
    return Math.sin(time/speed)*power;
}
function stn(speed,power){
    return Math.abs(Math.sin(time/speed)*power);
}
function stf(speed,power){
    return Math.floor(Math.sin(time/speed)*power);
}

if ( !document.body )
    document.addEventListener("DOMContentLoaded",init);
else
    init();
function init() {
    document.body.innerHTML = "<canvas id='canvas'></canvas>";
    canvas.height = innerHeight;
    canvas.width = innerWidth;
    ctx = canvas.getContext('2d');
    update();
}

window.onresize = function(){
    canvas.height = innerHeight;
    canvas.width = innerWidth;
};
