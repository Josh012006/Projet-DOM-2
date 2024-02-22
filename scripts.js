var box = document.getElementById("color-box");
var button = document.getElementById("change-color-btn");


function getRandomColor()
{
    var rand1 = String(Math.floor(Math.random() * 256));
    var rand2 = String(Math.floor(Math.random() * 256));
    var rand3 = String(Math.floor(Math.random() * 256));

    var tuple = `${rand1}, ${rand2}, ${rand3}`;

    return tuple;
}

button.addEventListener("click", function()
{
    box.setAttribute("style", `background-color:rgb(${getRandomColor()});`)
}
);