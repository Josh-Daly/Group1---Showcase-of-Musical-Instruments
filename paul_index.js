document.getElementById("commentUpdate").style.display = "none";

function makeComment()
{
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var instrument = document.getElementById("instrument").value;
    document.getElementById("commentUpdate").innerHTML= "<p>" + name + " " + country + " " + instrument + "</p>";


    document.getElementById("commentUpdate").style.display = "block";
}