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
    $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage1()'>Previous</button> <button type="button" class="btn btn-primary" onclick='nextpage3()'>Next</button>`);
}
function nextpage3(){
    
    $.ajax({
        url:'/countries/',
        type:'GET',
        success:function(data){
            $('#lb1').text('');
            $('#lb1').html('<b>Address</b>');
            $('#indiv1').html('');
            $('#indiv1').html(`<textarea id="txtarea" name="w3review" rows="3" cols="25" style='border-radius:8px;'></textarea>`);
            $('#txtarea').css('margin-left','19px')
            $('#lb2').text('');
            $('#lb2').html('<b>Country</b>');

            $('#indiv2').html(`<input list="countrydata" name="countrydata" id='countrydatas' onchange='state()'>`);
            $('#countrydatas').append(`<datalist id="countrydata">`);
            var val;
            for(var i=0;i<data.data.length;i++){
                val=data.data[i];
                $('#countrydata').append(`<option>${val.name} </option>`);

            }
            $('#countrydatas').append(`</datalist>`);

            $('#countrydatas').css('height','38px');
            $('#countrydatas').css('border-radius','8px');
            $('#lb3').text('');
            $('#lb3').html('<b>State</b>');
            
            $('#indiv3').html(`<input list="statedata" name="statedata" id='statedatas' >`);
            $('#statedatas').append(`<datalist id="statedata">`);
            $('#statedatas').append(`</datalist>`);
            $('#statedatas').css('margin-left','63px');
            $('#statedatas').css('height','38px');
            $('#statedatas').css('border-radius','8px');
            $('#div4').remove();

            $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage2()'>Previous</button> <button type="button" class="btn btn-primary" onclick='nextpage4()'>Next</button>`);


        }
    })
}
function nextpage4(){
    
}

function state(){
    var country=$('#countrydatas').val();
    $.ajax({
        url:'/states/',
        type:'GET',
        
        success:function(data){
            var statedata=[];
            var val;
            
            $('#statedata').html("");
            for(var i=0;i<data.data.length;i++){
                val=data.data[i];
                if(val.country_name == country){
                    statedata.push(val.name);

                }
            }
            for(var j=0;j<statedata.length;j++){
                $('#statedata').append(`<option>${statedata[j]} </option>`);
            }
            
            
        }
    })
}