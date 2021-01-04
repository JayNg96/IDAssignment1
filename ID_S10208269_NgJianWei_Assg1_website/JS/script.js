var button = document.getElementById('');
var menu = document.getElementById('menu');
var i;

function myFunction() {
    document.getElementById("menu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.btn-menu-toggle')) {
        var dropdowns = document.getElementsByClassName("menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) 
	     {
                openDropdown.classList.remove('show');
             }
        
        }
    }
}  