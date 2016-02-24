//window.onclick = goNext | goPrev;

var images = new Array("image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg",
 "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg");

 var counter = 0;

function goPrev()
{
    counter --;
    if(counter == -1)
        counter = 9;
    document.getElementById("currImg").src = images[counter];
}

function goNext()
{
    counter ++;
    if(counter == 10)
        counter = 0;
    document.getElementById("currImg").src = images[counter];
}
