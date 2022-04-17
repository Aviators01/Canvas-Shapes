function main(){
	var canvas = document.getElementById('Shape3');
	
	if(!canvas){
		console.log('Unable to find <canvas> element');
		return false;
	}
	
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'rgba(0,0,0,1.0)';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.strokeStyle = 'white';
	ctx.lineWidth = 7;
	
	//Shaft
	ctx.beginPath();
	ctx.moveTo(150,200);
	ctx.lineTo(350,200);
	ctx.stroke();
	
	//Arrow part
	ctx.beginPath();
	ctx.moveTo(320,180);
	ctx.lineTo(350,200);
	
	ctx.moveTo(320,220);
	ctx.lineTo(350,200);
	
	ctx.moveTo(320,180);
	ctx.lineTo(320,220);
	ctx.stroke();
	
	ctx.strokeStyle = 'white';
	ctx.lineWidth = 6;
	
	//Upper feathers part
	ctx.beginPath();
	ctx.moveTo(120,180);
	ctx.lineTo(150,200);
	
	ctx.moveTo(135,180);
	ctx.lineTo(165,200);
	
	ctx.moveTo(150,180);
	ctx.lineTo(180,200);
	ctx.stroke();
	
	//Lowe feathers part
	ctx.beginPath();
	ctx.moveTo(120,220);
	ctx.lineTo(150,200);
	
	ctx.moveTo(135,220);
	ctx.lineTo(165,200);
	
	ctx.moveTo(150,220);
	ctx.lineTo(180,200);
	ctx.stroke();
}