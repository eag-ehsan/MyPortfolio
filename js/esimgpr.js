
const img = new Image();
img.crossOrigin = "anonymous";
img.src = "images/rose.jpg";
var canvas = document.getElementById("ehsanimgpr");
var context = canvas.getContext("2d");
img.addEventListener("load", () => {
    context.drawImage(img, 0, 0);
  img.style.display = "none";
});

var hoveredColor = document.getElementById("dv1");
var selectedColor = document.getElementById("dv2");

function pick(event) {
    var bounding = canvas.getBoundingClientRect();
    var x = event.clientX - bounding.left;
    var y = event.clientY - bounding.top;
    var pixel = context.getImageData(x, y, 1, 1);
    var data = pixel.data;

    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
    hoveredColor.style.b = rgba;
    selectedColor.textContent = rgba;

    return rgba;
}

canvas.addEventListener("mousemove", (event) => pick(event));
canvas.addEventListener("click", (event) => pick(event));