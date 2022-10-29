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

var currentHour = moment().hour()
var hour = 

function hourColorSetter(){
    if (hour == currentHour){
        setPresentColor
    }else if(hour < currentHour){
        setPastColor
    }else{
        setFutureColor
    }
}
    