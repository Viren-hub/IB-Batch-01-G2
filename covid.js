var loader = `<div id="loading"  style="margin-left:500px;"></div>`
document.getElementById("data").innerHTML = loader;



function openFunction() {
    document.getElementById("menu").style.width = "300px";
    document.getElementById("mainbox").style.marginLeft = "300px";
    // document.getElementById("mainbox").innerHTML="Welcome";
}

function closeFunction() {
    document.getElementById("menu").style.width = "0px";
    document.getElementById("mainbox").style.marginLeft = "0px";
    document.getElementById("mainbox").innerHTML = "&#9776;Open";
}

function getdata() {
    // alert("hi")
    var name = document.getElementById('input').value;
    document.getElementById("data").innerHTML = loader;
    fetch(`https://api.covid19api.com/dayone/country/${name}`).then(

        res => {
            res.json().then(
                data => {
                    if (data.length > 0) {
                        data = data.reverse();
                        var temp = "";
                        data.forEach((itemData) => {
                            temp += "<tr>";
                            temp += "<td >" + itemData.ID + "</td>";
                            temp += "<td>" + itemData.Country + "</td>";
                            temp += "<td>" + itemData.CountryCode + "</td>";
                            temp += "<td>" + itemData.Lat + "</td>";
                            temp += "<td>" + itemData.Lon + "</td>";
                            temp += "<td>" + itemData.Confirmed + "</td>";
                            temp += "<td>" + itemData.Deaths + "</td>";
                            temp += "<td>" + itemData.Recovered + "</td>";
                            temp += "<td>" + itemData.Active + "</td>";
                            temp += "<td>" + new Date(itemData.Date).toLocaleDateString() + "</td></tr>";
                        });
                        document.getElementById('data').innerHTML = temp;
                    }
                }
            )
        }
    )
}
fetch("https://api.covid19api.com/dayone/country/india").then(

    res => {
        res.json().then(
            data => {
                if (data.length > 0) {
                    data = data.reverse();
                    var temp = "";
                    data.forEach((element) => {
                        temp += "<tr>";
                        temp += `<td class="idData">${element.ID}</td>`
                        temp += `<td class="idData">${element.Country}</td>`
                        temp += `<td class="idData">${element.CountryCode}</td>`
                        temp += `<td class="idData">${element.Lat}</td>`
                        temp += `<td class="idData">${element.Lon}</td>`
                        temp += `<td class="idData">${element.Confirmed}</td>`
                        temp += `<td class="idData">${element.Deaths}</td>`
                        temp += `<td class="idData">${element.Recovered}</td>`
                        temp += `<td class="idData">${element.Active}</td>`
                        temp += `<td class="idData">${new Date(values.Date).toLocaleDateString()}</td>`
                    });
                    document.getElementById('data').innerHTML = temp;
                }
            }
        )
    }
)


//============ Searching Bar ================= 

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myinput").value;
    filter = input.toUpperCase();
    table = document.getElementById("main");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[5];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



//show Logic
document.getElementById('data').innerHTML = temp;
$(document).ready(function() {
    $('.td').DataTable({
        "order": [
            [12, "desc"]
        ]
    });
});

//total count of Confirmed cases

// var a = document.getElementById('ct');
// var rows = a.rows.length;
// alert("Number of Rows are: " + rows);