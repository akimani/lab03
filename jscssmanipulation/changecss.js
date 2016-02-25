

function change()
{
    var bdrRed = document.getElementById("bred").value;
    var bdrGrn = document.getElementById("bgreen").value;
    var bdrBlue = document.getElementById("bblue").value;
    var bgRed = document.getElementById("bgred").value;
    var bgGreen = document.getElementById("bggreen").value;
    var bgBlue = document.getElementById("bgblue").value;

    var x = document.getElementById("main");


    x.style.borderColor = "rgb("+bdrRed+","+bdrGrn+","+bdrBlue+")";

    x.style.backgroundColor = "rgb("+bgRed+","+bgGreen+","+bgBlue+")";
}
