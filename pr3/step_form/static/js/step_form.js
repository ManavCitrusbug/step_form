$(document).ready(function () {
        $('#tables').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#nextbtn2').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
        $('#nextbtn3').hide();
        $('#div11').hide();
        $('#div12').hide();
        $('#div13').hide();
        $('#nextbtn4').hide();
    
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
               
                $('#div1').hide();
                $('#div2').hide();
                $('#div3').hide();
                $('#div4').hide();
                $('#nextbtn1').hide();
                $('#div5').show();
                $('#div6').show();
                $('#div7').show();
                $('#nextbtn2').show();
                return true;
            }
            else {
                return false;
            }
        });
        country();
        placelist();     
        slider();   
        
});
    
function dob() {
    var selecteddate=$('#input7').val();

    
    if(selecteddate == ''){
        $('#val6').html("<b>Please Selected Date of birth</b>");
        $('#val6').css("color", "red");
        $('#val7').html("<b>Enter the Date</b>");
        $('#val7').css("color", "red");
        return false;

    }
    else{
        var date = $('#input7').val().split("-");
        var year = date[0];
        var year1 = parseInt(year);
        var cur = new Date().getFullYear();
        $('#input6').val(cur - year1);
        $('#val6').html("<b>&nbsp;&nbsp;&#10004;</b>");
        $('#val6').css("color", "green");
        $('#val7').html("<b>&nbsp;&nbsp;&#10004;</b>");
        $('#val7').css("color", "green");
        return true;
    }
}
// fun
function checkval2(){
    var dob1=dob();
    if(  dob1 == true){
                $('#div1').hide();
                $('#div2').hide();
                $('#div3').hide();
                $('#div4').hide();
                $('#nextbtn1').hide();
                $('#div5').hide();
                $('#div6').hide();
                $('#div7').hide();
                $('#nextbtn2').hide();
                $('#div8').show();
                $('#div9').show();
                $('#div10').show();
                $('#nextbtn3').show();
                return true;

    }
    else{
        return false;
    }
};


function Address_err() {
    // var addresserr;
    var address = $('#input8').val();

    if (address == '') {
        $('#val8').html("<b>Please Enter the Address</b>");
        $('#val8').css("color", "red");
        // addresserr = false;
        return false;

    }
    else {
        $('#val8').html("<b>&nbsp;&nbsp;&#10004;</b>");
        $('#val8').css("color", "green");
        // addresse??rr = true;
        return true;

    }
}


function country() {

        $.ajax({
            url: '/countries/',
            type: 'GET',
            success: function (data) {
                var val;
                for (var i = 0; i < data.data.length; i++) {
                    val = data.data[i];
                    $('#countrydata').append(`<option>${val.name} </option>`);

                }
            }
        });
}
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

function countrydata_err() {


        var contry = $('#countrydatas').val();
        if (contry.length == 0) {
            $('#val9').html("<b>Please Enter the Country</b>");
            $('#val9').css("color", "red");

            return false;
        }
        else if(!isNaN(contry[0])){
            $('#val9').html("<b>Number not allow</b>");
            $('#val9').css("color", "red");

            return false;
        }
        else if (contry[0] == '+' || contry[0] == '*' || contry[0] == '-' || contry[0] == '/' || contry[0] == ',' || contry[0] == '.' || contry[0] == '<' || contry[0] == '>' || contry[0] == '?' || contry[0] == '!' || contry[0] == '@' || contry[0] == '#' || contry[0] == '$' || contry[0] == '%' || contry[0] == '^' || contry[0] == '&' || contry[0] == '(' || contry[0] == ')' || contry[0] == '=' || contry[0] == '|' || contry[0] == '~' || contry[0] == '`') {
            $('#val9').html("<b>Countryname Start with not symbol</b>");
            $('#val9').css("color", "red");
     
            return false;
        }
        else {
            $('#val9').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val9').css("color", "green");
            // countryerr = true;
            return true;
    
        }
}
function statedata_err() {

        // var stateerr;
        var state = $('#statedatas').val();
        if (state.length==0) {
            $('#val10').html("<b>Please Enter the state</b>");
            $('#val10').css("color", "red");
            // stateerr = false;
            return false;
        }
        else if(!isNaN(state[0])){
            $('#val10').html("<b>Number not allow</b>");
            $('#val10').css("color", "red");
            // countryerr = false;
            return false;
        }
        else if (state[0] == '+' || state[0] == '*' || state[0] == '-' || state[0] == '/' || state[0] == ',' || state[0] == '.' || state[0] == '<' || state[0] == '>' || state[0] == '?' || state[0] == '!' || state[0] == '@' || state[0] == '#' || state[0] == '$' || state[0] == '%' || state[0] == '^' || state[0] == '&' || state[0] == '(' || state[0] == ')' || state[0] == '=' || state[0] == '|' || state[0] == '~' || state[0] == '`') {
            $('#val10').html("<b>State name Start with not symbol</b>");
            $('#val10').css("color", "red");
     
            return false;
        }
        else {
            $('#val10').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('#val10').css("color", "green");
            // stateerr = true;
            return true;
    
        }
}
function checkval3(){
    var address=Address_err();
    var country=countrydata_err();
    var state=statedata_err();
    if(address==true && country==true && state==true){
                $('#div1').hide();
                $('#div2').hide();
                $('#div3').hide();
                $('#div4').hide();
                $('#nextbtn1').hide();
                $('#div5').hide();
                $('#div6').hide();
                $('#div7').hide();
                $('#nextbtn2').hide();
                $('#div8').hide();
                $('#div9').hide();
                $('#div10').hide();
                $('#nextbtn3').hide();
                $('#div11').show();
                $('#div12').show();
                $('#div13').show();
                $('#nextbtn4').show();
        return true;
    }
    else{
        return false;
    }
}
function placelist(){
    var content = [
                { id: 0, text: "Simla" },
                { id: 1, text: "Kanyakumari" },
                { id: 2, text: "Lehladak" },
                { id: 3, text: "Udaipur" },
            ];
    $(".prompt").select2({
                        data: content,
                        width: '100%',
                        multiple: true,
                        placeholder: "Enter Fav Place",
                    });
}
function slider() {
    var slider = document.getElementById("input13");
    var output = document.getElementById("demo1");
    var slider2 = document.getElementById("input14");
    var output2 = document.getElementById("demo2");
    output.innerHTML = slider.value;
    output2.innerHTML = slider2.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
    slider2.oninput = function () {
        output2.innerHTML = this.value;
    }


}
function range_val(){
    var range1=$('#demo1').text();
    var range2=$('#demo2').text();
    if(range1 != '' && range2 !=''){
        $('#val13').html('<b>&nbsp;&nbsp;&#10004;</b>');
        $('#val13').css('color','green');
        return true;
    }
    else{
        $('#val13').html('<b>Please Selected Min and Max range </b>');
        $('#val13').css('color','red');
        return false;

    }
    
}
function checkval3 (){
    var range=range_val();
    if(range=true){
        $('#div1').hide();
        $('#div2').hide();
        $('#div3').hide();
        $('#div4').hide();
        $('#nextbtn1').hide();
        $('#div5').hide();
        $('#div6').hide();
        $('#div7').hide();
        $('#nextbtn2').hide();
        $('#div8').hide();
        $('#div9').hide();
        $('#div10').hide();
        $('#nextbtn3').hide();
        $('#div11').show();
        $('#div12').show();
        $('#div13').show();
        $('#nextbtn4').show();
        return true;

    }
    else{
        return false;
    }
}
function male(){
    var male=$('#male').val();
}
function female(){
    var female=$('#female').val();
}
function other(){
    var other=$('#other').val();
}
function prvpage1(){

    $('#div1').show();
    $('#div2').show();
    $('#div3').show();
    $('#div4').show();
    $('#nextbtn1').show();
    $('#div5').hide();
    $('#div6').hide();
    $('#div7').hide();
    $('#nextbtn2').hide();
    $('#div8').hide();
    $('#div9').hide();
    $('#div10').hide();
    $('#nextbtn3').hide();
    $('#div11').hide();
    $('#div12').hide();
    $('#div13').hide();
    $('#nextbtn4').hide();

}
function prvpage2(){

    $('#div1').hide();
    $('#div2').hide();
    $('#div3').hide();
    $('#div4').hide();
    $('#nextbtn1').hide();
    $('#div5').show();
    $('#div6').show();
    $('#div7').show();
    $('#nextbtn2').show();
    $('#div8').hide();
    $('#div9').hide();
    $('#div10').hide();
    $('#nextbtn3').hide();
    $('#div11').hide();
    $('#div12').hide();
    $('#div13').hide();
    $('#nextbtn4').hide();

}
function prvpage3(){

    $('#div1').hide();
    $('#div2').hide();
    $('#div3').hide();
    $('#div4').hide();
    $('#nextbtn1').hide();
    $('#div5').hide();
    $('#div6').hide();
    $('#div7').hide();
    $('#nextbtn2').hide();
    $('#div8').show();
    $('#div9').show();
    $('#div10').show();
    $('#nextbtn3').show();
    $('#div11').hide();
    $('#div12').hide();
    $('#div13').hide();
    $('#nextbtn4').hide();

}
// function finaldata(){
//     $('#tables').show();
//     $('#div1').hide();
//     $('#div2').hide();
//     $('#div3').hide();
//     $('#div4').hide();
//     $('#nextbtn1').hide();
//     $('#div5').hide();
//     $('#div6').hide();
//     $('#div7').hide();
//     $('#nextbtn2').hide();
//     $('#div8').hide();
//     $('#div9').hide();
//     $('#div10').hide();
//     $('#nextbtn3').hide();
//     $('#div11').hide();
//     $('#div12').hide();
//     $('#div13').hide();
//     $('#nextbtn4').hide();
//     var name=$('#input1').val();
//     var email=$('#input2').val();
//     var password=$('#input2').val();
//     var gender=


// }