var bullShitEl = document.getElementById('#bullShit')
 // contains current date to the hour
var currentDate = moment().format("MMMM Do YYYY, hA");

$("#currentDay").text(currentDate);
let allSaveBtns = $('.saveBtn')


$('.saveBtn').click(saveButton)

$("#hour9 .description").val(localStorage.getItem("hour9"));


function saveButton(event){
        let btnTxt = $(event.target).siblings('textarea')
        localStorage.setItem(btnTxt.attr('id'),btnTxt.val())
        let savedStuff = (localStorage.getItem(btnTxt.attr('id')))
        bullShitEl.innerText = "asshole"
    }
    
    