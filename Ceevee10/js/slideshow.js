var images = new Array; 
numberImages = 3;
images[0] = "images/nissi_beach_2.jpg"; 
images[1] = "images/konnos_bay.JPG"; 
images[2] = "images/figTreeBay.jpg"; 
var imageTitle = new Array;
imageTitle[0] = "Nissi Beach (Ayia Napa)"
imageTitle[1] = "Konnos Bay (Protaras)"
imageTitle[2] = "Fig Tree Bay (Protaras)"
var presentimage = 1; 

function alterimage(alter) { 
   presentimage += alter; 
   try {
      document.getElementById('image_ss').src = images[presentimage%numberImages];
      document.getElementById('image_title').innerHTML = imageTitle[presentimage%numberImages];
   } catch (err) {
      //document.write(err)
   }

} 
alterimage(0); 