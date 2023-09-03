function namevalidate(){
    let n = document.getElementById("name").value;
    let n1 = /^[A-Za-z]+$/;

    if(n==""){
        document.getElementById("nameer").innerHTML="*Please enter your first name.";
        document.getElementById("nameer").style.color="red";
        document.getElementById("name").style.border="3px solid red";
    }
    else if(!n1.test(n)){
        document.getElementById("nameer").innerHTML="*Please enter a valid name.";
        document.getElementById("name").style.border="3px solid red";
    }
    else{
        document.getElementById("nameer").innerHTML=" Looks good!";
        document.getElementById("nameer").style.color="green";
        document.getElementById("name").style.border="3px solid green";
    }
}
function namevalidate2(){
    let n = document.getElementById("name2").value;
    let n1 = /^[A-Za-z]+$/;

    if(n==""){
        document.getElementById("nameer2").innerHTML="*Please enter last your name.";
        document.getElementById("nameer2").style.color="red";
        document.getElementById("name2").style.border="3px solid red";
        
    }
    else if(!n1.test(n)){
        document.getElementById("nameer2").innerHTML="*Please enter a valid name.";
        document.getElementById("nameer2").style.color="red";
        document.getElementById("name2").style.border="3px solid red";
    }
    else{
        document.getElementById("nameer2").innerHTML=" Looks good!";
        document.getElementById("nameer2").style.color="green";
        document.getElementById("name2").style.border="3px solid green";

    }
}
function gender()
         {
            let check = document.querySelector('input[name = "gender"]:checked');
            if(check == null)
            {
                document.getElementById("result").innerHTML = "*Please select your gender.";
                document.getElementById("result").style.color="red";
            }
            else{
                document.getElementById("result").innerHTML = " Looks good!";
                document.getElementById("result").style.color="green";

            }
            }
function dob(){
                let d = document.getElementById("date").value;
                if(d=="")
                {
                    document.getElementById("dater").innerHTML = "*Please select your Date of birth.";
                    document.getElementById("dater").style.color="red";
                    document.getElementById("date").style.border="3px solid red";
                }
                else{
                    document.getElementById("dater").innerHTML = " Looks good!";
                    document.getElementById("dater").style.color="green";
                    document.getElementById("date").style.border="3px solid green";
                }
                
    }
        function cdate(){
                // Get the current date
            let currentDate = new Date();
                // Format the date in "yyyy-mm-dd" format
            let  FormattedDate = currentDate.toISOString().slice(0,10);
                // Set the maximum date for the input field
            document.getElementById("date").setAttribute("max", FormattedDate);
        }

    // function cdate(){    
    //     let todayDate=new Date();
    //     let month=todayDate.getMonth() + 1;
    //     let year=todayDate.getUTCFullYear();
    //     let tdate=todayDate.getDate();
    //     if(month<10)
    //     {
    //         month = "0" + month;
    //     }
    //     else if(tdate<10)
    //     {
    //         tdate = "0" + tdate;
    //     }
    //     let maxdate= year + "-" + month + "-" + tdate;
    //     document.getElementById("date").setAttribute("max", maxdate);
    // }
    
    function emailvalidate(){
        let e = document.getElementById("email").value;
        let e1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(e=="")
        {
            document.getElementById("emailer").innerHTML = "*Please enter your email_Id.";
            document.getElementById("emailer").style.color="red";
            document.getElementById("email").style.border="3px solid red";
        }
        else if(!e1.test(e))
        {
            document.getElementById("emailer").innerHTML = "*Please enter a valid email_Id.";
            document.getElementById("emailer").style.color="red";
            document.getElementById("email").style.border="3px solid red";
        }
        else
        {
            document.getElementById("emailer").innerHTML = " Looks good!";
            document.getElementById("emailer").style.color="green";
            document.getElementById("email").style.border="3px solid green";
        }
}            
function phone()
    {
        let p = document.getElementById("phone").value;
        let p1 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(p=="")
        {
            document.getElementById("phoner").innerHTML = "*Please enter your phone number.";
            document.getElementById("phoner").style.color="red";
            document.getElementById("phone").style.border="3px solid red";
        }
        else if(!p1.test(p))
        {
            document.getElementById("phoner").innerHTML = "*Please enter a valid phone number.";
            document.getElementById("phoner").style.color="red";
            document.getElementById("phone").style.border="3px solid red";
        }
        else{
            document.getElementById("phoner").innerHTML = " Looks good!";
            document.getElementById("phoner").style.color="green";
            document.getElementById("phone").style.border="3px solid green";
        }
    }    
    function skill(){
        let select = document.querySelector('input[name = "course"]:checked');
        if(select==null){
            document.getElementById("courses").innerHTML = "*Please select your course.";
            document.getElementById("courses").style.color="red";
        }
        else
        {
            document.getElementById("courses").innerHTML = " Looks good!";
            document.getElementById("courses").style.color="green";
        }
    }
    function drop()
            {
                
                let a = document.getElementById("country").value;
                
                if(a=="select")
                {
                    document.getElementById("list").innerHTML = "*Please select your country.";
                    document.getElementById("list").style.color="red";
                    document.getElementById("country").style.border="3px solid red";
                }
                else
                {
                    document.getElementById("list").innerHTML = " Looks good!";
                    document.getElementById("list").style.color="green";
                    document.getElementById("country").style.border="3px solid green";
                }
            }
            function password()
        {
            let pa = document.getElementById("password").value;
            let pa1 = /^(?!.*\s)(?=.*)(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
            if(pa=="")
            {
                document.getElementById("pass").innerHTML = "*Please enter password.";
                document.getElementById("pass").style.color="red";
                document.getElementById("password").style.border="3px solid red";
            }
            else if(!pa1.test(pa))
            {
                document.getElementById("pass").innerHTML = "*Password should be atleast 8 charater with alphabets, special charaters & number.";
                document.getElementById("pass").style.color="red";
                document.getElementById("password").style.border="3px solid red";
            }
            else{
                document.getElementById("pass").innerHTML = " Looks good!";
                document.getElementById("pass").style.color="green";
                document.getElementById("password").style.border="3px solid green";
            }
        }
        function confrim()
        {
            let cp = document.getElementById("confrim password").value;
            let cp1 = document.getElementById("password").value;
            let pa1 = /^(?!.*\s)(?=.*)(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/;
            if(cp=="")
            {
                document.getElementById("confrim pass").innerHTML = "*Please conform password.";
                document.getElementById("confrim pass").style.color="red";
                document.getElementById("confrim password").style.border="3px solid red";
            }
            else if(cp1!==cp)
            {
                document.getElementById("confrim pass").innerHTML = "*Your conform password not matched with password.";
                document.getElementById("confrim pass").style.color="red";
                document.getElementById("confrim password").style.border="3px solid red";
            }
            else if(!pa1.test(cp))
            {
                document.getElementById("confrim pass").innerHTML = "*Password should be atleast 8 charater with alphabets, special charaters & number.";
                document.getElementById("confrim pass").style.color="red";
                document.getElementById("confrim password").style.border="3px solid red";
            }
            else{
                document.getElementById("confrim pass").innerHTML = " Looks good!";
                document.getElementById("confrim pass").style.color="green";
                document.getElementById("confrim password").style.border="3px solid green";
            }
        }
        function val() {
        
            namevalidate();
            namevalidate2();
            gender();
            dob();
            emailvalidate();
            phone();
            skill();
            drop();
            password();
            confrim();
        
        
            let formData = {
                firstName: document.getElementById("name").value,
                lastName: document.getElementById("name2").value,
                gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '',
                dob: document.getElementById("date").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                course: document.querySelector('input[name="course"]:checked') ? document.querySelector('input[name="course"]:checked').value : '',
                country: document.getElementById("country").value,
            };
            console.log("Form Data:", formData);
        }
        