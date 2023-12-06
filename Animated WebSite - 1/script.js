var main = document.querySelector("#main");
var image = document.querySelector("#page>img");

main.addEventListener("mousemove", function(dets){
    image.style.top = 1 - dets.y * 0.05 + "px"
    image.style.left =1 - dets.x * 0.05 + "px"

})