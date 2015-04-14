/* 
Print a half pyramid with 7 rows.
Exercise from http://eloquentjavascript.net
*/

var rows = 1;
while (rows < 8) {
    rowToPrint = '';
    for (var hash = 1; hash <= rows; hash++) {
        rowToPrint += '#'
    };
    rows++;
    console.log(rowToPrint);
};