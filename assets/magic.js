function maketimeblocks(hour, existingtodo="") {
$(".container").append($(`
<div class="row time-block">
<div class="hour col-1">${hour}:00</div>
<textarea name="" id="" cols="30" rows="3" class="description col-9" ${existingtodo}></textarea>
<div class="btn saveBtn col-2"></div>
</div>`))
}

maketimeblocks();

for(i = 9; i < 18; i++)