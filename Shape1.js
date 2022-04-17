function main(){
	//Retrieve <canvas> element
	var canvas = document.getElementById('Shape1');
	if (!canvas){
		console.log('Failed to get the <canvas> element');
		return false;
	}
	
	//Get the rendering context for 2DCG?
	var ctx = canvas.getContext('2d');
	
	ctx.fillStyle = 'rgba(0,0,0,1.0)';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.fillStyle = 'rgba(255,0,0,1.0)';
	ctx.fillRect(197,197,10,10);
}