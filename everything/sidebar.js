function sidebarFunction() {
    var element = document.getElementById("sidebar");
    element.classList.toggle("active");
}

function svgFunction(){
    var element = document.getElementById("btn");
    element.firstElementChild.classList.toggle('active');
}