document.getElementById("commentUpdate").style.display = "none";
document.getElementById("suggested").style.display = "none";

/* Function to give a value for a discount on button press in the pop up */
function randDiscount()
{
    var randVal = 1, discount;
    randVal = Math.ceil(Math.random() * 3);
    console.log("Test: Random val returned as" + " " + randVal);
    if (randVal == 1)
    {
        discount = 5;
    }
    else if (randVal == 2)
    {
        discount = 15;
    }
    else
    {
        discount = 25;
    }

    console.log("Test: Random discount returned as" + " " + discount);
    document.getElementById("disc").innerHTML = "<p> Code: AG123 for" + " " + discount + "% off!" + "</p>";
}

/* Button to close popup */
function closePopup()
{
    document.getElementById("popupDisc").innerHTML = " ";
}

/* Button to make comment based on values user has entered */

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

/* Similar to comment but executed differently */

function makeSuggestion()
{
    var suggest = document.getElementById("suggestText").value;
    document.getElementById("suggested").style.display = "block";
    document.getElementById("suggested").innerHTML = "<p> Thank you for your suggestion: <mark>" + suggest + "</mark> </p>";
    document.getElementById("suggestion").style.display = "none";
}