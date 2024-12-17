function myFunction()
{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search_url");
    li = ul.getElementsByTagName('li');
      
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

function openSearchBar()
{
    document.getElementById("search_btn").style.display="block";
}

function closeSearchBar()
{
    document.getElementById("close_btn").style.display="none";
}

function credits()
{
    window.alert("Guitar by Paul");
    window.alert("Drums By Seth");
    window.alert("Hardware By Daire");
}