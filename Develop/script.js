// PAGE ELEMENT VARIABLES
var buttonEl = $(".saveBtn");
var form9El = $("#form-9")
var form10El = $("#form-10")
var form11El = $("#form-11")
var form12El = $("#form-12")
var form1El = $("#form-1")
var form2El = $("#form-2")
var form3El = $("#form-3")
var form4El = $("#form-4")
var form5El = $("#form-5")
var formInputEl = $("form-input")
var clearBtnEl = $("#clear-button")

console.log(form9El.attr('data-time'));

// DISPLAY THE DATE USING MOMENT
$("#currentDay").text(moment().format("MMM Do, YYYY h:mm a"));
// variable of the current time to check against for the background color
var currentTime =JSON.parse(moment().format('h'));
console.log(currentTime);
console.log(typeof currentTime);

// SCRIPT THAT CHANGES FORM COLOR BASED ON TIME

// LOCAL STORAGE FOR DATE ENTIRES TIED TO THE FORM BUTTONS 

loadSchedule()

buttonEl.on('click' , function(){
    localStorage.setItem('input-9' , form9El.val());
    localStorage.setItem('input-10' , form10El.val());
    localStorage.setItem('input-11' , form11El.val());
    localStorage.setItem('input-12' , form12El.val());
    localStorage.setItem('input-1' , form1El.val());
    localStorage.setItem('input-2' , form2El.val());
    localStorage.setItem('input-3' , form3El.val());
    localStorage.setItem('input-4' , form4El.val());
    localStorage.setItem('input-5' , form5El.val());
})
// There's probably a more concise way of writing this with forEach
function loadSchedule() {
input9 = localStorage.getItem('input-9');
form9El.val(input9);
input10 = localStorage.getItem('input-10');
form10El.val(input10);
input11 = localStorage.getItem('input-11');
form11El.val(input11);
input12 = localStorage.getItem('input-12');
form12El.val(input12);
input1 = localStorage.getItem('input-1');
form1El.val(input1);
input2 = localStorage.getItem('input-2');
form2El.val(input2);
input3 = localStorage.getItem('input-3');
form3El.val(input3);
input4 = localStorage.getItem('input-4');
form4El.val(input4);
input5 = localStorage.getItem('input-5' );
form5El.val(input5);
}

clearBtnEl.on('click' , function(){
    localStorage.clear();
    form9El.val("");
    form10El.val("");
    form11El.val("");
    form12El.val("");
    form1El.val("");
    form2El.val("");
    form3El.val("");
    form4El.val("");
    form5El.val("");
})