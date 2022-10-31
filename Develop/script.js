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
for(var i=9;i<=18;i++){
    assignColor(i)
    $("#"+i+"-text").val(localStorage.getItem("hour-"+i));

}




