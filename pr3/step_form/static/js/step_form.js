$(document).ready(function () {
    var nameerr;
    var emailerr;
    var passworderr;
    var confirmpassworderr;
    $('#input1').keyup(function () {
        name_err();
    });
    function name_err() {
        var name = $('#input1').val();
        var letter = /^[A-Za-z]+$/;
        if (name == '') {
            $('#val1').html('<b>Enter the name</b>');
            $('#val1').css('color', 'red');
            nameerr = false;
            return false;

        }
        else if (!isNaN(name[0])) {
            $('#val1').html("<b>Name is  Start with not number</b>");
            $('#val1').css("color", "red");
            nameerr = false;
            return false;
        }
        else if (name[0] == '+' || name[0] == '*' || name[0] == '-' || name[0] == '/' || name[0] == ',' || name[0] == '.' || name[0] == '<' || name[0] == '>' || name[0] == '?' || name[0] == '!' || name[0] == '@' || name[0] == '#' || name[0] == '$' || name[0] == '%' || name[0] == '^' || name[0] == '&' || name[0] == '(' || name[0] == ')' || name[0] == '=' || name[0] == '|' || name[0] == '~' || name[0] == '`') {
            $('#val1').html("<b>Name Start is not symbol</b>");
            $('#val1').css("color", "red");
            nameerr = false;
            return false;
        }
        else if (!letter.test(name)) {
            $('#val1').html("<b>Number and special symbol are not allow</b>");
            $('#val1').css("color", "red");
            nameerr = false;
            return false;
        }
        else if (name.length < 5 || name.length > 50) {
            $('#val1').html("<b>Name Chacater is between 5 and 50</b>");
            $('#val1').css("color", "red");
            nameerr = false;
            return false;
        }
        else {
            $('#val1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val1').css("color", "green");
            nameerr = true;
            return true;
        }

    }
    $('#input2').keyup(function () {
        email_err();
    });
    function email_err() {
        var email = $('#input2').val();
        var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email == '') {
            $('#val2').html('<b>Enter the email  </b>');
            $('#val2').css("color", "red");
            emailerr = false;
            return false;

        }
        else if (!pattern.test(email)) {
            $('#val2').html('<b>wrong Email Input </b>');
            $('#val2').css("color", "red");
            emailerr = false;
            return false;
        }

        else {
            $('#val2').html("<b>&#10004;</b>");
            $('#val2').css("color", "green");
            emailerr = true;
            return true;
        }
    }
    $('#input3').keyup(function () {
        password_err();
    });
    function password_err() {
        var password = $('#input3').val();
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

        if (password == '') {
            $('#val3').html("<b>Please fill the password</b>");
            $('#val3').css("color", "red");
            passworderr = false;
            return false;


        }
        else if (password.length < 8 || password.length > 20) {
            $('#val3').html("<b>password Chacater is between 8 and 20</b>");
            $('#val3').css("color", "red");
            passworderr = false;
            return false;
        }
        else if (!pattern.test(password)) {
            $('#val3').html("<b>Alpha and Numeric Character Compulsory </b>");
            $('#val3').css("color", "red");
            passworderr = false;
            return false;
        }
        else {
            $('#val3').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val3').css("color", "green");
            passworderr = true;
            return true;
        }
    }
    $('#input4').keyup(function () {
        confirmpassword_err();
    });
    function confirmpassword_err() {
        var password = $('#input3').val();
        var confirmpassword = $('#input4').val();

        if (confirmpassword == '') {
            $('#val4').html("<b>Please fill the Confirmpassword</b>");
            $('#val4').css("color", "red");
            confirmpassworderr = false;
            return false;


        }
        if (password != confirmpassword) {
            $('#val4').html("<b>Password Not Match </b>");
            $('#val4').css("color", "red");
            confirmpassworderr = false;
            return false;
        }

        else {
            $('#val4').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val4').css("color", "green");
            confirmpassworderr = true;
            return true;
        }


    }
    $('#bt1').click(function () {
        var nm = name_err();
        var em = email_err();
        var pass = password_err();
        var conpass = confirmpassword_err();
        if (nm == true && em == true && pass == true && conpass == true) {
            $('#val1').html('');
            $('#val2').html('');
            $('#val3').html('');
            $('#val4').html('');
            $('#lb1').text('');
            $('#lb1').html('<b>Gender</b>');
            $('#indiv1').html('');
            $('#indiv1').html(`<input class="form-check-input "  value = "male" type="radio" name="flexRadioDefault" id='male' >&nbsp&nbsp<b>Male</b>&nbsp&nbsp&nbsp
                               <input class="form-check-input" value="female" type="radio" name="flexRadioDefault" id='female'>&nbsp&nbsp<b>Female</b>&nbsp&nbsp&nbsp
                               <input class="form-check-input" value="others" type="radio" name="flexRadioDefault" id='other'>&nbsp&nbsp<b>Others</b>`);
            $('#lb2').text('');
            $('#lb2').html('<b>Age</b>');
            $('#indiv2').css('margin-left', '15px');
            $('#indiv2').html(`<input type="text"  class="form-control w-100" id='ageinput' disabled >`);
            $('#lb3').text('');
            $('#lb3').html('<b>Birthdate</b>');
            $('#indiv3').html('');
            $('#indiv3').css('margin-left', '5px')
            $('#indiv3').html(`<input type="date"  class="form-control w-100" id='dobinput'  >`);
            $('#div4').hide();
            $('#nextbtn').html('');
            $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage1()'>Previous</button> <button type="button" class="btn btn-primary" onclick='pageval2()'>Next</button>`);
            return true;
        }
        else {
            return false;
        }
    });

});


function pageval2(){

    var dob=$('#dobinput').val();
    if(dob ==''){
        $('#val3').html("<b>Please Fill The inputed Fill</b>");
        $('#val3').css("color", "red");
        $('#val2').html("<b>Please Fill The inputed Fill</b>");
        $('#val2').css("color", "red");

        return false;
    }
    else{

            var date = $('#dobinput').val().split("-");
            var year = date[0];
            var year1=parseInt(year);
            var cur=new Date().getFullYear();
            $('#ageinput').val(cur-year1);
            $('#val2').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val2').css("color", "green");
            $('#val3').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val3').css("color", "green");
            nextpage3();
            return true;
    }

};

function nextpage3() {

    $.ajax({
        url: '/countries/',
        type: 'GET',
        success: function (data) {
            $('#val1').html('');
            $('#val2').html('');
            $('#val3').html('');
            $('#val4').html('');
            $('#lb1').text('');
            $('#lb1').html('<b>Address</b>');
            $('#indiv1').html('');
            $('#indiv1').html(`<textarea id="txtarea" name="w3review" rows="3" cols="25" style='border-radius:8px;'oninput='pageval3()' ></textarea>`);
            $('#txtarea').css('margin-left', '19px')
            $('#lb2').text('');
            $('#lb2').html('<b>Country</b>');

            $('#indiv2').html(`<input list="countrydata" name="countrydata" id='countrydatas' oninput='pageval3()' onchange='state()'>`);
            $('#countrydatas').append(`<datalist id="countrydata">`);
            var val;
            for (var i = 0; i < data.data.length; i++) {
                val = data.data[i];
                $('#countrydata').append(`<option>${val.name} </option>`);

            }
            $('#countrydatas').append(`</datalist>`);

            $('#countrydatas').css('height', '38px');
            $('#countrydatas').css('border-radius', '8px');
            $('#lb3').text('');
            $('#lb3').html('<b>State</b>');

            $('#indiv3').html(`<input list="statedata" name="statedata" id='statedatas' oninput='pageval3()' >`);
            $('#statedatas').append(`<datalist id="statedata">`);
            $('#statedatas').append(`</datalist>`);
            $('#statedatas').css('margin-left', '63px');
            $('#statedatas').css('height', '38px');
            $('#statedatas').css('border-radius', '8px');
            $('#div4').hide();
            $('#nextbtn').html('');
            $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage2()'>Previous</button> <button type="button" class="btn btn-primary" id='next3' >Next</button>`);


        }
    })
}
function pageval3(){
    var addresserr;
    var countryerr;
    var stateerr;

    $('#txtarea').keyup(function () {
        Address_err();
    });
    function Address_err(){
        var address=$('#txtarea').val();
       
        if(address == ''){
            $('#val1').html("<b>Please Enter the Address</b>");
            $('#val1').css("color", "red");
            addresserr=false;
            return false;

        }
        else {
            $('#val1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val1').css("color", "green");
            addresserr=true;
            return true;

        }
    }
    $('#countrydatas').keyup(function () {
        countrydata_err();
    });
    function countrydata_err(){
        var contry=$('#countrydatas').val();
        if(contry==''){
            $('#val2').html("<b>Please Enter the Country</b>");
            $('#val2').css("color", "red");
            countryerr=false;
            return false;
        }
        else{
            $('#val2').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val2').css("color", "green");
            countryerr=true;
            return true;

        }
    }
    $('#statedatas').keyup(function () {
        statedata_err();
    });
    function statedata_err(){
        var state=$('#statedatas').val();
        if(state==''){
            $('#val3').html("<b>Please Enter the state</b>");
            $('#val3').css("color", "red");
            stateerr=false;
            return false;
        }
        else{
            $('#val3').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val3').css("color", "green");
            stateerr=true;
            return true;

        }
    }
    $('#next3').click(function () {
        var add=Address_err();
        var con=countrydata_err();
        var state=statedata_err();
        if(add==true && con==true &&state==true){
            nextpage4();
            return true;

        }
        else{
            return false;
        }
    });
    
}
// function nextpage4() {
//     var content = [
//         { id: 0, text: "Simla" },
//         { id: 1, text: "Kanyakumari" },
//         { id: 2, text: "Lehladak" },
//         { id: 3, text: "Udaipur" },
//     ];
//     $("#lb1").text("");
//     $('#lb1').html("<b>Known Language</b>");
//     $('#indiv1').html("");
//     $('#indiv1').html(`<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">&nbsp;&nbsp;<b>Hindi</b>
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">&nbsp;&nbsp;<b>English</b>
//     <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">&nbsp;&nbsp;<b>Gujrati</b>`);
//     $('#lb2').text("");
//     $('#lb2').html("<b>Favorite Place to Visit</b>");
//     $('#indiv2').html("");
//     $('#indiv2').css("padding-left", "45px");
//     $('#indiv2').html(`<div class="row"><div class="col-md-auto"><input  class="prompt" type="text" placeholder="Enter Fav Place"></div></div>`);
//     $(".prompt").select2({
//         data: content,
//         width: '100%',
//         multiple: true,
//         placeholder: "Enter Fav Place",
//     });

//     $('#lb3').html("<b>Range of Price</b>");
//     $('#indiv3').html(`<input type="range" min="100" max="1000" value="0" class="slider" id="myrange" oninput='slider()'>`);
//     $('#indiv3').append(`<input type="range" min="1000" max="2000" value="0" class="slider" id="myrange2" oninput='slider()'>`);
//     $('#myrange').css("margin-top", "25px");
//     $('#myrange').css("margin-left", '48px');
//     $('#indiv3').append(`<p id="demo"><b>MinValue:</b> <span id="demo1"></span><font style='margin-left:50px'><b>MaxValue:</b></font> <span id="demo2"></span></p>`);

//     $('#demo').css("margin-left", '48px');
//     $('#div4').hide();
//     $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage3()'>Previous</button> <button type="button" class="btn btn-primary" onclick='showdata()'>FinalSubmit</button>`);

// }


function state() {
    var country = $('#countrydatas').val();
    $.ajax({
        url: '/states/',
        type: 'GET',
        success: function (data) {
            var statedata = [];
            var val;

            $('#statedata').html("");
            for (var i = 0; i < data.data.length; i++) {
                val = data.data[i];
                if (val.country_name == country) {
                    statedata.push(val.name);

                }
            }
            for (var j = 0; j < statedata.length; j++) {
                $('#statedata').append(`<option>${statedata[j]} </option>`);
            }


        }
    })
}

// function slider() {
//     var slider = document.getElementById("myrange");
//     var output = document.getElementById("demo1");
//     var slider2 = document.getElementById("myrange2");
//     var output2 = document.getElementById("demo2");
//     output.innerHTML = slider.value;
//     output2.innerHTML = slider2.value;

//     slider = function () {
//         output.innerHTML = this.value;
//     }
//     slider2 = function () {
//         output2.innerHTML = this.value;
//     }


// }
// function previouspage1() {
//     $('#lb1').text('');
//     $('#lb1').html('<b>Name</b>');
//     $('#indiv1').html('');
//     $('#indiv1').css('margin-left', '16px');
//     $('#indiv1').append(`<input type="text" class="form-control w-100" aria-describedby="passwordHelpInline">`);
//     $('#lb2').text('');
//     $('#lb2').html('<b>Email</b>');
//     $('#indiv2').html("");
//     $('#indiv2').append(`<input type="text" class="form-control w-100" aria-describedby="passwordHelpInline">`);
//     $('#lb3').text('');
//     $('#lb3').html('<b>Password</b>');
//     $('#indiv3').html('');
//     $('#indiv3').css('margin-left', '16px');
//     $('#indiv3').append(`<input type="text" class="form-control w-100" aria-describedby="passwordHelpInline">`);
//     $('#div4').show();
//     $('#lb4').text('');
//     $('#lb4').html('<b>ConfirmPassword</b>');
//     $('#indiv4').html('');
//     $('#indiv4').css('margin-left', '16px');

//     $('#indiv4').append(`<input type="password" class="form-control w-100" aria-describedby="passwordHelpInline">`);
//     $('#nextbtn').html('');
//     $('#nextbtn').html(`<button type="button" class="btn btn-primary" onclick='nextpage2()'>Next</button>`);
// }
// function previouspage2() {
//     $('#lb1').text('');
//     $('#lb1').html('<b>Gender</b>');
//     $('#indiv1').html('');

//     $('#indiv1').html(`<input class="form-check-input "  value = "male" type="radio" name="flexRadioDefault" >&nbsp&nbsp<b>Male</b>&nbsp&nbsp&nbsp
//     <input class="form-check-input" value="female" type="radio" name="flexRadioDefault">&nbsp&nbsp<b>Female</b>&nbsp&nbsp&nbsp
//     <input class="form-check-input" value="others" type="radio" name="flexRadioDefault">&nbsp&nbsp<b>Others</b>`);
//     $('#lb2').text('');
//     $('#lb2').html('<b>Age</b>');
//     $('#indiv2').css('margin-left', '15px');
//     $('#indiv2').html(`<input type="text"  class="form-control w-100" id='ageinput' disabled >`);
//     $('#lb3').text('');
//     $('#lb3').html('<b>Birthdate</b>');
//     $('#indiv3').html('');
//     $('#indiv3').css('margin-left', '5px')
//     $('#indiv3').html(`<input type="date"  class="form-control w-100" id='dobinput'  >`);
//     $('#div4').hide();
//     $('#nextbtn').html('');
//     $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage1()'>Previous</button> <button type="button" class="btn btn-primary" onclick='nextpage3()'>Next</button>`);

// }
// function previouspage3() {
//     $.ajax({
//         url: '/countries/',
//         type: 'GET',
//         success: function (data) {
//             $('#lb1').text('');
//             $('#lb1').html('<b>Address</b>');
//             $('#indiv1').html('');
//             $('#indiv1').html(`<textarea id="txtarea" name="w3review" rows="3" cols="25" style='border-radius:8px;'></textarea>`);
//             $('#txtarea').css('margin-left', '19px');
//             $('#lb2').text('');
//             $('#lb2').html('<b>Country</b>');

//             $('#indiv2').html(`<input list="countrydata" name="countrydata" id='countrydatas' onchange='state()'>`);
//             $('#countrydatas').append(`<datalist id="countrydata">`);
//             var val;
//             for (var i = 0; i < data.data.length; i++) {
//                 val = data.data[i];
//                 $('#countrydata').append(`<option>${val.name} </option>`);

//             }
//             $('#countrydatas').append(`</datalist>`);

//             $('#countrydatas').css('height', '38px');
//             $('#countrydatas').css('border-radius', '8px');
//             $('#countrydatas').css('margin-left', '50px');
//             $('#lb3').text('');
//             $('#lb3').html('<b>State</b>');

//             $('#indiv3').html(`<input list="statedata" name="statedata" id='statedatas' >`);
//             $('#statedatas').append(`<datalist id="statedata">`);
//             $('#statedatas').append(`</datalist>`);
//             $('#statedatas').css('margin-left', '63px');
//             $('#statedatas').css('height', '38px');
//             $('#statedatas').css('border-radius', '8px');
//             $('#div4').hide();

//             $('#nextbtn').html(`<button type="button" class="btn btn-success" onclick='previouspage2()'>Previous</button> <button type="button" class="btn btn-primary" onclick='nextpage4()'>Next</button>`);


//         }
//     })
// }
