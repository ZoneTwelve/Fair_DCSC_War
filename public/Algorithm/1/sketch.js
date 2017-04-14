var arr = [], change = [];
var type = 0;
var max, min, w, h, x;
for(var i=1;i<=100;i++)
	arr.push(i);

function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	textSize(20);
	random_array();
	w = width/arr.length;
	h = height/arr.length;
}

function draw(){
	background(51);
	text("按R即可重新排列",30,30)
	for(var i=0;i<arr.length;i++){
		if(change[i] === 1)
			fill(255,0,0);
		else
			fill(255);
		rect(w*i, height, w, -h*arr[i]);
		
	}
	// for(var i=0;i<3;i++)
	cocktail_sort()
}

function random_array(){
	arr.sort(function(){return Math.random() - 0.5});
	max = arr.length,min = 0;
	x = min;
}

function cocktail_sort(){
	change = [];
	if(x<max&type === 0){
		if(arr[x]>arr[x+1]){
			this.t = arr[x];
			arr[x] = arr[x+1];
			arr[x+1] = this.t;
			change[x] = 1;
			change[x+1] = 1;
		}
			x++
	}else if(x>min&type === 1){
		if(arr[x]<arr[x-1]){
			this.t = arr[x];
			arr[x] = arr[x-1];
			arr[x-1] = this.t
			change[x-1] = 1;
			change[x] = 1;
		}
			x--;
	}else if(x===max&&type === 0){
		type = 1;
		max--;
		return cocktail_sort()
	}else if(x===min&&type === 1){
		type = 0;
		min++;
		return cocktail_sort()
	}
}
setInterval(draw,1)

document.onkeydown = function(event){
	if(event.key === "r"||event.key === "R")
		random_array();
}