var imageBeach = new Array; 
numberImagesBeach = 4;
imageBeach[0] = "images/beaches/nissi_beach_2.jpg"; 
imageBeach[1] = "images/beaches/konnos_bay.JPG"; 
imageBeach[2] = "images/beaches/figTreeBay.jpg"; 
imageBeach[3] = "images/beaches/cape_greco.jpg"; 
var imageTitleBeach = new Array;
imageTitleBeach[0] = "Nissi Beach (Ayia Napa)"
imageTitleBeach[1] = "Konnos Bay (Protaras)"
imageTitleBeach[2] = "Fig Tree Bay (Protaras)"
imageTitleBeach[3] = "Cape Greco (Ayia Napa)"
var presentImageBeach = 0; 

function alterImageBeaches(alter) { 
   presentImageBeach += alter; 
   try {
   		imageIndexBeach = 0;
   	   	if(presentImageBeach < 0) {
   			imageIndexBeach = -1 * presentImageBeach;
   		} else {
   			imageIndexBeach = presentImageBeach;

   		}
      	document.getElementById('image_ss_beaches').src = imageBeach[imageIndexBeach%numberImagesBeach];
      	document.getElementById('image_title_beaches').innerHTML = imageTitleBeach[imageIndexBeach%numberImagesBeach];
   } catch (err) {
      //document.write(err)
   }

} 
alterimage(0); 