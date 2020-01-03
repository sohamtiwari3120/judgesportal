// function updatecolors() {
//     var list = document.getElementsByClassName("dq");
//     // console.log(list[5])
//     // console.log(list[5].innerHTML)
//     // console.log("Hello World!")
//     for (var i = 0; i < list.length; i++) {
//         txt = list[i].firstChild.value;
//         list[i].firstChild.style.fontWeight = '600';
//         list[i].firstChild.style.textTransform = 'lowercase';
//         list[i].firstChild.style.textTransform = 'Capitalize';
//         if (txt.toLowerCase()[0] == "y") {
//             list[i].firstChild.style.color = 'red';
//         } else if (txt.toLowerCase()[0] == 'n') {
//             list[i].firstChild.style.color = 'green';
//         }

//     }
//     // console.log(list[0].firstChild.value)

// }
var old_val

function storeOldVal(ele) {
    old_val = ele.value
    console.log("Old value:" + old_val)
}

function verifyRoundChange(ele) {
    var new_val = ele.value
    var choice
    if (old_val != new_val)
        choice = confirm("Do you want to change the team round?")
    console.log(choice)
    if (choice)
        ele.value = new_val
    else
        ele.value = old_val
    old_val = new_val

}

function toggleDisqualified(ele) {
    //var isChecked = document.getElementById("toggle").checked
    console.log(ele)
    var isChecked = ele.checked

    console.log(isChecked)

    if (!isChecked) {
        var res = confirm("Do you want to bring this team back? ")
        console.log(res)
        if (!res) {
            //document.getElementById('toggle').click()
            ele.checked = true
        }

    } else {
        var res = confirm("Are you sure you want to disqualify this team? ")
        console.log(res)

        if (!res) {
            //document.getElementById('toggle').click()
            ele.checked = false
        }
    }
}