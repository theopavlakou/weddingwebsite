var imageFood = new Array; 
numberImagesFood = 4;
imageFood[0] = "images/souvlaki.jpg"; 
imageFood[1] = "images/fish_meze.JPG"; 
imageFood[2] = "images/meze.jpg"; 
imageFood[3] = "images/koupes.jpg"; 
var imageTitleFood = new Array;
imageTitleFood[0] = "Souvlakia"
imageTitleFood[1] = "Fish Meze"
imageTitleFood[2] = "Meat Meze"
imageTitleFood[3] = "Koupes"
var presentImageFood = 0; 

function alterImageFood(alter) { 
   presentImageFood += alter; 
   try {
   		imageIndexFood = 0;
   		if(presentImageFood < 0) {
   			imageIndexFood = -1 * presentImageFood;
   		} else {
   			imageIndexFood = presentImageFood;
   		}
      	document.getElementById('image_ss_food').src = imageFood[imageIndexFood%numberImagesFood];
      	document.getElementById('image_title_food').innerHTML = imageTitleFood[imageIndexFood%numberImagesFood];
   } catch (err) {
      //document.write(err)
   }

} 
alterimage(0); 