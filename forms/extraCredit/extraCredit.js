let rows = parseInt(prompt("Enter the number of rows you want in this display."))
let columns = parseInt(prompt("Enter the number of columns you want in this display."))

for (i = 1; i <= rows; i++){
for (j = 1; j <= columns; j++){
    document.write("*")
}
    document.write("<br />")
}