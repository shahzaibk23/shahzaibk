function navigator(dest) {
    var portfolio = document.getElementById("portfolio");
    var about = document.getElementById("about");

    if(dest === "portfolio"){
        portfolio.style.display = "block";
        about.style.display = "none";
    } else if (dest === "about"){
        portfolio.style.display = "none";
        about.style.display = "block";
    }
}