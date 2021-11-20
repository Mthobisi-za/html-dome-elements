//referencing the button
var btn = document.querySelector(".button")
var input = document.querySelector("input");
var dynamic = document.querySelector(".dynamic");
/*
btn.addEventListener("click", () => {
    var name = input.value
    document.querySelector("input").value = " "
    var p = document.createElement("p");
    p.innerHTML = "Hello, " + name;
    dynamic.appendChild(p);

});
 */

function elements() {
    var name = input.value
    document.querySelector("input").value = " "
    var p = document.createElement("p");
    p.innerHTML = "Hello, " + name;
    dynamic.appendChild(p);
}