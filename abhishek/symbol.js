var COLOR_RED = 'RED';
var COLOR_ORANGE = 'ORANGE';
var COLOR_YELLOW = 'YELLOW';
var COLOR_GREEN = 'GREEN';
var COLOR_BLUE = 'BLUE';
var COLOR_VIOLET = 'VIOLET';

function get(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_ORANGE:
            return COLOR_BLUE; 
        case COLOR_YELLOW:
            return COLOR_VIOLET; 
        case COLOR_GREEN:
            return COLOR_RED; 
        case COLOR_BLUE:
            return COLOR_ORANGE; 
        case COLOR_VIOLET:
            return COLOR_YELLOW;
        default:
            return ('Unknown Color')
    }
}

console.log(get(COLOR_RED));
var NEW_BLUE = 'BLUE';
console.log(get(NEW_BLUE));