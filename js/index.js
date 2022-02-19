ham.addEventListener('click', function hamburgger() {



    let ham = document.getElementById("ham");
    let menu = document.getElementById("menu");
    let hamcross = document.getElementById("hamcross");

    menu.style.display = "flex";
    hamcross.style.display = "block";
    ham.style.display = "none";
    console.log("menu show ");




});

hamcross.addEventListener('click', function cross() {

    menu.style.display = "none";
    hamcross.style.display = "none";
    ham.style.display = "block";
    console.log("hide ");
});