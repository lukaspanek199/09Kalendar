var datum = new Date();
var denvtydnu = datum.getDay();
if (denvtydnu == 0) {
    denvtydnu = 6;
}
else {
    denvtydnu -= 1;
}
datum.setDate(datum.getDate() - denvtydnu);
alert(datum.getDate());

document.write("<table>");
document.write("<tr>");
for (i = 0; i < 7; i++) {
    document.write("<td>");
    document.write(datum.getDate());
    datum.setDate(datum.getDate()+1);
    document.write("</td>");
}
document.write("</tr>");
document.write("</table>");