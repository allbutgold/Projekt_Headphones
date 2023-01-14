const darkMode = document.querySelector("#darkMode"); 

darkMode.addEventListener("click", function() { // on click of button darkMode toggle CSS class .darkMode
    document.body.classList.toggle("darkMode");
})