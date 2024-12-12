document.getElementById("commentUpdate").style.display = "none";
document.getElementById("suggested").style.display = "none";

function makeComment()
{
    var name = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var instrument = document.getElementById("instrument").value;
    var text = document.getElementById("commentText").value;

    document.getElementById("commText").value = text;
    document.getElementById("commText").style = "resize:none;background-color:#DCDCDC;"
    document.getElementById("commName").innerHTML = "<p> Name:" + " " + name + "</p>";
    document.getElementById("commCoun").innerHTML = "<p> Country:" + " " + country + "</p>";
    document.getElementById("commInst").innerHTML = "<p> Favorite Instument:" + " " + instrument + "</p>";
    document.getElementById("commentUpdate").style.display = "block";
}

function makeSuggestion()
{
    var suggest = document.getElementById("suggestText").value;
    document.getElementById("suggested").style.display = "block";
    document.getElementById("suggested").innerHTML = "<p> Thank you for your suggestion: <mark>" + suggest + "</mark> </p>";
    document.getElementById("suggestion").style.display = "none";
}