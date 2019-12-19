function updatecolors() {
    var list = document.getElementsByClassName("dq");
    // console.log(list[5])
    // console.log(list[5].innerHTML)
    // console.log("Hello World!")
    for (var i = 0; i < list.length; i++) {
        txt = list[i].firstChild.value;
        list[i].firstChild.style.fontWeight = '600';
        list[i].firstChild.style.textTransform = 'lowercase';
        list[i].firstChild.style.textTransform = 'Capitalize';
        if (txt.toLowerCase()[0] == "y") {
            list[i].firstChild.style.color = 'red';
        } else if (txt.toLowerCase()[0] == 'n') {
            list[i].firstChild.style.color = 'green';
        }

    }
    // console.log(list[0].firstChild.value)

}