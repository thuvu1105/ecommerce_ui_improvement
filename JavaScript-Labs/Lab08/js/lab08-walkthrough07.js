
/* add code here */

var daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];

daysOfWeek.push("Saturday");
daysOfWeek.unshift("Sunday");

// Hiển thị danh sách ngày trong tuần
document.write("<h3>Days of Week</h3>");
document.write("<table border='1'>");

for (var i = 0; i < daysOfWeek.length; i++) {
    document.write("<tr>");

    if (daysOfWeek[i].length > 8) {
        document.write("<td><strong>" + daysOfWeek[i] + "</strong></td>");
    }
    else {
        document.write("<td>" + daysOfWeek[i] + "</td>");
    }

    document.write("</tr>");
}

document.write("</table>");

// Tạo lịch 30 ngày
document.write("<h3>Calendar</h3>");
document.write("<table border='1'>");

document.write("<tr>");
document.write("<th>Sun</th>");
document.write("<th>Mon</th>");
document.write("<th>Tue</th>");
document.write("<th>Wed</th>");
document.write("<th>Thu</th>");
document.write("<th>Fri</th>");
document.write("<th>Sat</th>");
document.write("</tr>");

var day = 1;

for (var week = 0; week < 5; week++) {
    document.write("<tr>");

    for (var i = 0; i < 7; i++) {
        if (day <= 30) {
            document.write("<td>" + day + "</td>");
            day++;
        }
        else {
            document.write("<td></td>");
        }
    }

    document.write("</tr>");
}

document.write("</table>");

