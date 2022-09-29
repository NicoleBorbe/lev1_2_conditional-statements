var zahl = document.getElementById("zahl")
let ergebnis = document.getElementById("ergebnis");

function weather() {
    if (zahl.value >= 8 && zahl.value <= 10) {
        ergebnis.innerHTML = "Das Wetter ist super.";
        console.log("Super");
    } else if (zahl.value >=6 && zahl.value <= 7) {
        ergebnis.innerHTML = "Das Wetter ist gut.";
        console.log("Gut");
    } else if (zahl.value >= 3 && zahl.value <= 5) {
        ergebnis.innerHTML = "Das Wetter ist okay.";
        console.log("Okay");
    } else if (zahl.value >= 0 && zahl.value <= 2) {
        ergebnis.innerHTML = "Das Wetter ist schlecht.";
        console.log("Schlecht");
    }
}
console.log("Test");