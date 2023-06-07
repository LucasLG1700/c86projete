var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
blockImageObject = " ";
function newImage()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        blockImageObject = Img;
        blockImageObject.scaleToWidth(700);
        blockImageObject.scaleToHeight(510);
        blockImageObject.set({
            top:0,
            left:0
        });
        canvas.add(blockImageObject);
    });
	
}

function playSound(){
	x.play();
}
