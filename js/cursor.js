     var bee = document.getElementById("cursor");
		document.addEventListener("mousemove", getMouse); 


		bee.style.position = "absolute"; //css	

		var beepos = {x:0, y:0};
        var bee_w = bee.offsetWidth;
        var bee_h = bee.offsetHeight;
console.log("bee_w " + bee_w);
		setInterval(followMouse, 50);
		
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		function getMouse(e){
			mouse.x = e.pageX;
			mouse.y = e.pageY;
        }

		function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - beepos.x;
			var distY = mouse.y - beepos.y;
			//Easing motion
       //Progressive reduction of distance 
			beepos.x += distX/5;
			beepos.y += distY/2;
			
			bee.style.left = beepos.x - bee_w/2 + "px";
			bee.style.top = beepos.y - bee_h/2 + "px";
      
			
		}