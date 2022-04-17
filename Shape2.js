function main(){
	var canvas = document.getElementById('Shape2');
	
	if(!canvas){
		console.log('Cannot find <canvas> element');
		return false;
	}
	
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'rgba(0,0,0,1.0)';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	//Draws the white lines
	ctx.strokeStyle = 'rgba(255,255,255,1.0)';
	ctx.lineWidth = 15;
	
	ctx.beginPath();
	ctx.moveTo(0,20);
	ctx.lineTo(400,20);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(0,380);
	ctx.lineTo(400,380);
	ctx.stroke();
	
	//Draws dashed yellow lines
	ctx.strokeStyle = 'rgba(255,255,0,1.0)';
	ctx.lineWidth = 20;
	
	ctx.beginPath();
	ctx.moveTo(20,200);
	ctx.lineTo(100,200);
	
	ctx.moveTo(160,200);
	ctx.lineTo(240,200);
	
	ctx.moveTo(300,200);
	ctx.lineTo(380,200);
	
	ctx.stroke();
}