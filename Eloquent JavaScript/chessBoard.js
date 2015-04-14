/* 
Chess Board
a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. At each position of the grid there is either 
a space or a “#” character. The characters form a chess board.
Exercise from http://eloquentjavascript.net
*/


// v1

var size = 8;

for (var rows = 1; rows <= size; rows++) {
    var chessBoardRow = "";
    for (var columns = 1; columns <= size + 1; columns++) {
        if (columns === size + 1) {
            chessBoardRow += "\n";
        }
        else if ((columns + rows) % 2 === 0) {
            chessBoardRow += " BLACK ";
        }
        else {
            chessBoardRow += " WHITE ";
        }
    };
    console.log(chessBoardRow);
};

// v2

var size = 8;

for (var rows = 1; rows <= size; rows++) {
    var chessBoardRow = "";
    for (var columns = 1; columns <= size + 1; columns++) {
        chessBoardRow = printChessBoardLine(columns, size, chessBoardRow);
    };
    console.log(chessBoardRow);
};

function printChessBoardLine(columns, size, rowToPrint) {
    if (columns === size + 1) {
        rowToPrint += "\n";
    }
    else if ((columns + rows) % 2 === 0) {
        rowToPrint += " BLACK ";
    }
    else {
        rowToPrint += " WHITE ";
    }
}