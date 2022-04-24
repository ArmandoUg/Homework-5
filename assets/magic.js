var savebtn = $(".saveBtn");
var existingtodo = $("#todos").text();
function maketimeblocks(hour, existingtodo="") {
    var currenttime = new Date().getHours();
    var timetense = "future";
    if(currenttime > hour) timetense= "past";
    if(currenttime === hour) timetense = "present";
    var existingtodo= localStorage.getItem(hour);
    if (!existingtodo) existingtodo="";
$(".container").append($(`
<div class="row time-block">
<div class="hour col-1">${hour}:00</div>
<textarea name="" id="${hour}" cols="30" rows="3" class="description col-9 ${timetense}">${existingtodo || ""}</textarea>
<div class="btn saveBtn col-2">
<img src="/assets/save-solid.svg" width=10% </div>
</div>`))
}


for(i = 9; i < 18; i++) {
    maketimeblocks(i);
}
function save(event) {
    // localStorage.setItem("existingtodos", JSON.stringify(existingtodo));
   var tododescription = event.target.parentNode.children[1].value
   var todotime = event.target.parentNode.children[1].id

   localStorage.setItem(todotime,tododescription);
    }

savebtn.on("click", function () {
save();
});
console.log(savebtn.on)