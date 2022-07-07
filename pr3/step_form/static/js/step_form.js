
function nextpage1(){

     
}

function nextpage2(){
    $('#lb1').text('');
    $('#lb1').html('<b>Gender</b>');
    $('#indiv1').html('');
    $('#indiv1').html(`<input class="form-check-input "  value = "male" type="radio" name="flexRadioDefault" >&nbsp&nbsp<b>Male</b>&nbsp&nbsp&nbsp
    <input class="form-check-input" value="female" type="radio" name="flexRadioDefault">&nbsp&nbsp<b>Female</b>&nbsp&nbsp&nbsp
    <input class="form-check-input" value="others" type="radio" name="flexRadioDefault">&nbsp&nbsp<b>Others</b>`);
    $('#lb2').text('');
    $('#lb2').html('<b>Age</b>');
    $('#indiv2').css('margin-left','15px');
    $('#indiv2').html(`<input type="text"  class="form-control w-100" id='ageinput' disabled >`);
    $('#lb3').text('');
    $('#lb3').html('<b>Birthdate</b>');
    $('#indiv3').html('');
    $('#indiv3').css('margin-left','5px')
    $('#indiv3').html(`<input type="date"  class="form-control w-100" id='dobinput'  >`);
    $('#div4').remove();
    $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='nextpage1()'>Previous</button> <button type="button" class="btn btn-primary" onclick='nextpage3()'>Next</button>`);
}
function nextpage3(){
    $('#lb1').text('');
    $('#lb1').html('<b>Address</b>');
    $('#indiv1').html('');
    $('#indiv1').html(`<textarea id="w3review" name="w3review" rows="3" cols="25" style='border-radius:8px;'></textarea>`);
    $('#lb2').text('');
    $('#lb2').html('<b>Country</b>');
}