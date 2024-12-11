document.getElementById("commentUpdate").style.display = "none";

function makeComment()
{
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var instrument = document.getElementById("instrument").value;
    var text = document.getElementById("commentText").value;

    document.getElementById("commText").value = text;
    document.getElementById("commName").innerHTML = "<p> Name:" + " " + name + "</p>";
    document.getElementById("commCoun").innerHTML = "<p> Country:" + " " + country + "</p>";
    document.getElementById("commInst").innerHTML = "<p> Favorite Instument:" + " " + instrument + "</p>";
    document.getElementById("commentUpdate").style.display = "block";
}