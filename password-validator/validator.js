

function passwordValidate()
{
    var p1, p2;
    p1 = document.getElementById("passwd1").value;
    p2 = document.getElementById("passwd2").value;
    if(p1.length < 8)
    {
        alert("The passwords are not at least 8 characters long");
    }
    else if(p2 != p1)
    {
        alert("The passwords entered dont match")
    }
}
