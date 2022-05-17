function fetch() 
{
    $.get("https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json",
        function (data) 
        {
            document.getElementById('count1').innerHTML = data['statewise'][0]['confirmed'];
            document.getElementById('count2').innerHTML = data['statewise'][0]['active'];
            document.getElementById('count3').innerHTML = data['statewise'][0]['recovered'];
            document.getElementById('count4').innerHTML = data['statewise'][0]['deaths'];
            var tbval = document.getElementById('tbval');

            for (var i = 1, j = 1; i < (data['statewise'].length); i++, j++)
            {
                var x = tbval.insertRow();
                x.insertCell(0);
                tbval.rows[i].cells[0].innerHTML = data['statewise'][j]['lastupdatedtime'];
                tbval.rows[i].cells[0].style.background = '#444444';
                tbval.rows[i].cells[0].style.color = '#fff';

                x.insertCell(1);
                tbval.rows[i].cells[1].innerHTML = data['statewise'][j]['state'];
                tbval.rows[i].cells[1].style.background = '#3c6478';
                tbval.rows[i].cells[1].style.color = '#fff';

                x.insertCell(2);
                tbval.rows[i].cells[2].innerHTML = data['statewise'][j]['confirmed'];
                tbval.rows[i].cells[2].style.background = '#fabd02';

                x.insertCell(3);
                tbval.rows[i].cells[3].innerHTML = data['statewise'][j]['active'];
                tbval.rows[i].cells[3].style.background = '#fa8128';

                x.insertCell(4);
                tbval.rows[i].cells[4].innerHTML = data['statewise'][j]['recovered'];
                tbval.rows[i].cells[4].style.background = '#3cb043';

                x.insertCell(5);
                tbval.rows[i].cells[5].innerHTML = data['statewise'][j]['deaths'];
                tbval.rows[i].cells[5].style.background = '#d30000';
                tbval.rows[i].cells[5].style.color = '#fff';

            }
        }
    );
}

//Function to validate Mobile Number
function NumberValidate() {
    var number = document.getElementById("mobile").value;
    var mobileTenDigit = /^\d{10}$/;
    if (number != '') {
        if (number.match(mobileTenDigit)) {
            return true;
        }
        else {
            alert("Enter valid Mobile Number");
            return false;
        }
    }
}

//Function to validate Aadhar Number
function AadharValidate() {
    var aadhar = document.getElementById("tbNum").value;
    var adharcardTwelveDigit = /^\d{12}$/;
    if (aadhar != '') {
        if (aadhar.match(adharcardTwelveDigit)) {
            return true;
        }
        else {
            alert("Enter valid Aadhar Number");
            return false;
        }
    }
}

// ADD HYPEN IN AADHAR INPUT
// function addHyphen(element) {
//     let ele = document.getElementById(element.id);
//     ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.
//     let finalVal = ele.match(/.{1,4}/g).join('-');
//     document.getElementById(element.id).value = finalVal;
// }

// FUNCTION TO RESTRICT PAST DATE
$(function () 
    {
        var dtToday = new Date();
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if (month < 10)
        {
            month = '0' + month.toString();
        }
        if (day < 10)
        {
            day = '0' + day.toString();
        }
        var maxDate = dtToday.toISOString().substr(0, 10);
        // alert(maxDate);
        var minDate = year + '-' + month + '-' + day;
        $('#date').attr('min', minDate);
    }
);

// $('.count div h1').counterUp({
//   delay:10,
//   time:3000,
//   offset: 200
// })
