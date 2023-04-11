
window.onload = function() {
    var soon = document.getElementById("soon");
    var mule = document.getElementById("mule");
    var gomdure = document.getElementById("gomdure");   

    var vital = false;
    document.getElementById("over-soon").addEventListener("mouseover", function() {
        soon.style.display = "block";
    });

    document.getElementById("over-mule").addEventListener("mouseover", function() {
        mule.style.display = "block"        
    });

    document.getElementById("over-park").addEventListener("mouseover", function() {
        gomdure.style.display = "block"        
    });

    document.getElementById("over-soon").addEventListener("mouseleave", function() {
        soon.style.display = "none"
    });

    document.getElementById("over-mule").addEventListener("mouseleave", function() {
        mule.style.display = "none"
    });

    document.getElementById("over-park").addEventListener("mouseleave", function() {
        gomdure.style.display = "none"
    });
}