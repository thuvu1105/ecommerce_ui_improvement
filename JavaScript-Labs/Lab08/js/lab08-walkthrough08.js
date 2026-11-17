// define functions in this file

function outputBox(num) {
    output = "";

    for (var i = 0; i < num; i++) {
        output += "<div>Box</div>";
    }

    return output;
}

document.write(outputBox(5));
