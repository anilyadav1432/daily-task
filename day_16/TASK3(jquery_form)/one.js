document.write(`<div class="outer"><h1>Form Validation</h1> <form name="myForm" action="" id="formID"> <table> <tr> <th>First Name :</th> <td><input type="text" name="fname" id="first_name"><span id="errFname"></span></td> </tr> <tr> <th>Last Name :</th> <td><input type="text" name="lname" id="last_name"><span id="errLname"></span></td> </tr> <tr> <th>Email Address :</th> <td><input type="text" name="email" id="email"><span id="errEmail"></span></td> </tr> <tr> <th>Password :</th> <td><input type="password" name="pass" id="password"><span id="errPass"></span></td> </tr> <tr> <th>Confirm Password :</th> <td><input type="password" name="cpass" id="c_password"><span id="errCpass"></span></td> </tr> <tr> <td colspan="2"><button type="submit">Save</button></td> </tr> </table> </form></div>`);
        $(document).ready(function(){
            
            $('#formID').on("submit",function(){
                var first_name = $('#first_name').val();
                var last_name = $('#last_name').val();
                var email = $('#email').val();
                var password = $('#password').val();
                var c_password = $('#c_password').val();

                //For First Name
                if (first_name.length < 1 || first_name.trim()=="") {
                    $('#errFname').html('First name is required');
                    return false;
                }
                else{
                    let regName = /^[a-zA-Z  ]+$/;
                    if(!regName.test(first_name)){
                        $('#errFname').html('Please enter valid First Name');
                        return false;
                    }
                    $('#errFname').html('');
                }

                //For Last Name
                if (last_name.length < 1 || last_name.trim()=="") {
                    $('#errLname').html('Last name is required');
                    return false;
                }
                else{
                    let regName = /^[a-zA-Z]+$/;
                    if(!regName.test(last_name)){
                        $('#errLname').html('Please enter valid Last Name');
                        return false;
                    }
                    $('#errLname').html('');
                }

                //For Email
                if (email.length < 1 || email.trim()=="") {
                    $('#errEmail').html('Email is required');
                    return false;
                } 
                else if(email!="") {
                    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(email.match(mailformat))
                     {
                        $('#errEmail').html('');    
                    }
                    else
                    {
                        $('#errEmail').html('Please enter valid Email');
                        return false;
                    }
                }
                //For Password
                if (password.length < 6) {
                    $('#errPass').html('Password is Required atleast 6 digit');
                    return false;
                }
                else
                {
                    $('#errPass').html('');
                }
                //For Confirm Password
                if (c_password.length < 6) {
                    $('#errCpass').html('Confirm Password is Required');
                    return false;
                }
                else
                {
                    if(password==c_password)
                    {
                        $('#errCpass').html('');
                    }
                    else
                    {
                        $('#errCpass').html('Password & Confirm Password is not Match');
                        return false;
                    }
                    
                }
            });
        });