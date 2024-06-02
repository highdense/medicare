const user = document.getElementById('user');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error = document.getElementById('error');

function validate(form){
    if (password.length < 8 || !number.test(password) || !upper.test(password)) {
        if (passw.length < 6) {
            alert("Password harus minimal lebih dari 8 huruf ")
            return false;
        }
    
        var counter = 0;
        var i;
        for(i = 0; i < passw.length; i++){
           password.charAt(i)
           if(upper.test(password.charAt(i))){
               counter++;
               break;
           }
       }
    
        if( counter < 1 ){
            alert("Password harus mempunyai huruf besar")
            return false;
    
        }
    
        if (!number.test(password)) {
            alert("Please make sure Password Includes a Digit")
            return false;
        }
        var gender=form.gender_male.value;
        var gender=form.gender_female.value;
    
        if(gender-details.checked==false && gender.checked==false ){
                alert("You must select male or female");
                return false;
           }   
}
}