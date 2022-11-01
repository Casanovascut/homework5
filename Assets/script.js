 // contains current date to the hour
var currentDate = moment().format("MMMM Do YYYY, hA");
$("#currentDay").text(currentDate);
let allSaveBtns = $('.saveBtn')

// save button function 
$('.saveBtn').click(saveButton)
function saveButton(){
    let btnTxt = $(this).siblings('.col-md-10').val()
    let hourIndicator = $(this).parent().attr('id')

    localStorage.setItem(hourIndicator,btnTxt)
}


// assigns item color to var
function assignColor(time){
    var className = 'past'
    var currentHour = moment().hour()
    if(time==currentHour){
        className='present'
    }else if(time>currentHour){
        className = 'future'
    }
    $('#hour-'+time).addClass(className)
}
// creates loop that scrolls through time, adds color, and saves text
for(var i=9;i<=18;i++){
    assignColor(i)
    $("#"+i+"-text").val(localStorage.getItem("hour-"+i));

}




