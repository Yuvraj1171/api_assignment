function changeBackground(id, obj) {
    document.getElementById(id).style.color = obj.value;
}

function changeSize(id, obj) {
    document.getElementById(id).style.fontSize = obj.value + "px";
}

function biu(id, prop) {
    if (prop == "bold") {
        var b = document.getElementById(id).style.fontWeight;

        if (b == "") {
            document.getElementById(id).style.fontWeight = 'bold';
        } else {
            document.getElementById(id).style.fontWeight = "";
        }
    } else if (prop == "italic") {
        var sty = document.getElementById(id).style.fontStyle;
        if (sty == "") {
            document.getElementById(id).style.fontStyle = 'italic';
        } else {
            document.getElementById(id).style.fontStyle = "";
        }
    } else {
        var dec = document.getElementById(id).style.textDecoration;
        if (dec == "") {
            document.getElementById(id).style.textDecoration = "underline";
        } else {
            document.getElementById(id).style.textDecoration = "";
        }

    }
}