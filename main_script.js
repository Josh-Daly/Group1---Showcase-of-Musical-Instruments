function searchFunction()
{
    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("search");
    ul = document.getElementById("search_url");
    li = document.getElementById("li");
    filter = input.value.toUpperCase();
    
    for(i = 0; i < li.length; i++)
        {
            a = li[i].getElementById("a")[0];
            txtValue = a.textContent || a.innerText;

            if(txtValue.toUpperCase().indexOf(filter)-1)
                {
                    li[i].style.display = "";
                }
            else
                {
                    li[i].style.display = "none";
                }
        }
}