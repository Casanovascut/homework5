 // contains current date to the hour
var currentDate = moment().format("MMMM Do YYYY, hA");
$("#currentDay").text(currentDate);
let allSaveBtns = $('.saveBtn')


$('.saveBtn').click(saveButton)
function saveButton(){
    let btnTxt = $(this).siblings('.col-md-10').val()
    let hourIndicator = $(this).parent().attr('id')

    localStorage.setItem(hourIndicator,btnTxt)
}

$("#hour-9 .col-md-10").val(localStorage.getItem("hour-9"));
$("#hour-10 .col-md-10").val(localStorage.getItem("hour-10"));
$("#hour-11 .col-md-10").val(localStorage.getItem("hour-11"));
$("#hour-12 .col-md-10").val(localStorage.getItem("hour-12"));
$("#hour-1 .col-md-10").val(localStorage.getItem("hour-1"));
$("#hour-2 .col-md-10").val(localStorage.getItem("hour-2"));
$("#hour-3 .col-md-10").val(localStorage.getItem("hour-3"));
$("#hour-4 .col-md-10").val(localStorage.getItem("hour-4"));
$("#hour-5 .col-md-10").val(localStorage.getItem("hour-5"));
$("#hour-6 .col-md-10").val(localStorage.getItem("hour-6"));


var hour9 = document.getElementById('9txt').innerText
var hour10 = document.getElementById('10txt').innerText
var hour11 = document.getElementById('11txt').innerText
var hour12 = document.getElementById('12txt').innerText
var hour1 = document.getElementById('1txt').innerText
var hour2 = document.getElementById('2txt').innerText
var hour3 = document.getElementById('3txt').innerText
var hour4 = document.getElementById('4txt').innerText
var hour5 = document.getElementById('5txt').innerText
var hour6 = document.getElementById('6txt').innerText
var hour9el = document.getElementById('hour-9')
var hour10el = document.getElementById('hour-10')
var hour11el = document.getElementById('hour-11')
var hour12el = document.getElementById('hour-12')
var hour1el = document.getElementById('hour-1')
var hour2el = document.getElementById('hour-2')
var hour3el = document.getElementById('hour-3')
var hour4el = document.getElementById('hour-4')
var hour5el = document.getElementById('hour-5')
var hour6el = document.getElementById('hour-6')
var currentHour = moment().hour()
var hours = [hour9, hour10, hour11,hour12,hour1,hour2,hour3,hour4,hour5,hour6]

console.log(hour3 < currentHour+'AM')

function hourColorSetter9(hour9){
        if (hour9 == currentHour+'AM'){
            hour9el.classList.add('present')
        }else if(hour9 < currentHour+'AM'){
            hour9el.classList.add('past')
        }else{
            hour9el.classList.add('future')
    }
}
function hourColorSetter10(i){
    if (i == currentHour+'AM'){
        hour10el.classList.add('present')
    }else if(i < currentHour+'AM'){
        hour10el.classList.add('past')
    }else{
        hour10el.classList.add('future')
}
}
hour10el.classList.add('future')

hourColorSetter9(hour9)


