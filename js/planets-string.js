(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    // USE OR | to get them split up//
planetsArray = planetsString.split("|");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

let planetsfunc = planetsArray.join("<br>");
console.log(planetsfunc);

planetsfunc() + document.body.innerHTML = document.body.innerHTML

    let planetsagain = "<ul><li>" + planetsArray.join("</li></li>") + "</li></ul>";

planetsUL + document.body.innerHTML = ("doesn't work");
})();