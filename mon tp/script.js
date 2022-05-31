


function startDate() {
    var d = new Date();
    var days = ["Dimmanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    var months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    document.getElementById("date").innerHTML = days[d.getDay()] + " | " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}

