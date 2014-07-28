var imageBeach = new Array; 
numberImagesBeach = 3;
imageBeach[0] = "images/nissi_beach_2.jpg"; 
imageBeach[1] = "images/konnos_bay.JPG"; 
imageBeach[2] = "images/figTreeBay.jpg"; 
var imageTitleBeach = new Array;
imageTitleBeach[0] = "Nissi Beach (Ayia Napa)"
imageTitleBeach[1] = "Konnos Bay (Protaras)"
imageTitleBeach[2] = "Fig Tree Bay (Protaras)"
var presentImageBeach = 0; 

function alterImageBeaches(alter) { 
   presentImageBeach += alter; 
   try {
      document.getElementById('image_ss_beaches').src = imageBeach[presentImageBeach%numberImagesBeach];
      document.getElementById('image_title_beaches').innerHTML = imageTitleBeach[presentImageBeach%numberImagesBeach];
   } catch (err) {
      //document.write(err)
   }

} 
alterimage(0); 