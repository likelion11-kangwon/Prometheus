
window.onload = function() {
    var vital = false;
    document.getElementById("over").addEventListener("mouseover", function() {
        if (vital==true) return;
        vital = true;
        var gomdure = document.getElementById("gomdure");
        gomdure.style.opacity = 0;
        gomdure.style.display = "block";
        var opacity = 0;
        var roof = setInterval(function() {
            opacity += 0.1;
            gomdure.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(roof);
                vital = false;
            }
        }, 100);
        
    });
    document.getElementById("over").addEventListener("mouseleave", function() {
        document.getElementById("gomdure").style.display = "none"
    })
}