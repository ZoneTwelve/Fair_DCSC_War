var sketch1 = function(p) {
	p.x = 100;
	p.y = 100;
	p.load = 1;
	p.setup = function() {
		p.createCanvas(window.innerWidth, window.innerHeight*.9);
		p.background(51);
		p.noStroke();
		p.fill(255,0,200);
		p.textSize(25)
		p.text("Shift重置畫面,左鍵上色,按住空白鍵可當橡皮擦",10,30);
	}
	p.draw = function(){
		p.fill(255, 0, 200, 50);
		if(p.lock === 0)
			p.ellipse(p.x, p.y, 24, 24);
		// p.x = p.x + p.random(-10, 10);
		// p.y = p.y + p.random(-10, 10);
	}
	document.onmousemove = function(event){
		p.x = event.clientX
		p.y = event.clientY
	}
	document.onmousedown = function(){
		p.lock = 0;
	}
	document.onmouseup = function(){
		p.lock = 1;
	}
	document.onkeydown = function(event){
		console.log(event.key);
		if(event.key === ' '){
			p.fill(51);
			p.ellipse(p.x, p.y, 24, 24);
		}else if(event.key === 'Shift'){
			p.background(51);
			p.fill(255,0,200);
			p.text("Shift重置畫面,左鍵上色,按住空白鍵可當橡皮擦",10,30);
			p.text("Shift重置畫面,左鍵上色,按住空白鍵可當橡皮擦",10,30);
		}
	}
	setInterval(p.draw,0);
}


var myp5_1 = new p5(sketch1);

function resetBackground() {
	myp5_1.x = myp5_1.width/2;
	myp5_1.y = myp5_1.height/2;
	myp5_1.background(51);
}

// setInterval(resetBackground, 3000);

