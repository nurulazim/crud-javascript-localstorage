// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("submit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    selectedIndex = -1;
                document.getElementById("firstname").value = "";
                document.getElementById("lastname").value = "";
                document.getElementById("rollnum").value = "";
                document.getElementById("subject").value = "Math";
                document.getElementById("modalbtn").innerHTML = "Register";

                modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

        selectedIndex = -1;
                document.getElementById("firstname").value = "";
                document.getElementById("lastname").value = "";
                document.getElementById("rollnum").value = "";
                document.getElementById("subject").value = "Math";
                document.getElementById("modalbtn").innerHTML = "Register";

    }
}


// var clarbtn = document.getElementById("clar");

// clarbtn.onclick = function() {
//     modal.style.display = "block";
// }



