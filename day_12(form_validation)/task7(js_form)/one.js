    document.write(`<div class="outerDiv"> <h1>Form Validation</h1> <form name="myForm" action="#" onsubmit="return ValidateForm()" method="post"> <table> <th><label for="name">Name :</label></th> <td><input type="text" id="name" name="name" class="inputBox"><br/><span id="nameError"></span></td> <tr> <th><label for="ageTxt">Age :</label></th> <td><input type="text" id="ageTxt" name="age" class="inputBox"><br/><span id="ageError"></span></td> </tr> <tr> <th><label for="email">Email :</label></th> <td><input type="text" id="email" name="email" class="inputBox"><br/><span id="emailError"></span></td> </tr> <div class="inputField"> <th><label for="phone">Phone Number :</label></th> <td><input type="text" id="phone" name="number" class="inputBox"><br/><span id="numberError"></span></td> </div> <tr> <th><label for="city">City :</label></th> <td><select id="city" name="city" class="inputBox"> <option value="">Please select City</option> <option value="mau">Mau</option> <option value="ballia">Ballia</option> <option value="lucknow">Lucknow</option> <option value="varanasi">Varanasi</option> </select> <br/><span style="color:red;" id="cityError"></span> </td> </tr> <tr> <th><label for="hobby">Hobbies :</label></th> <td class="checkId"> <input type="checkbox" name="hobby" value="playing">playing <input type="checkbox" name="hobby" value="dancing">Dancing <input type="checkbox" name="hobby" value="singing">Singing <br/><span id="hobbyError"></span> </td> </tr> <tr> <td colspan="2"><button type="submit">Submit</button></td> </tr> </table> </form> </div>`);
        function ValidateForm()
        {
            var name = document.forms["myForm"]["name"].value;
            var age = document.forms["myForm"]["age"].value;
            var email = document.forms["myForm"]["email"].value;
            var number = document.forms["myForm"]["number"].value;
            var city = document.forms["myForm"]["city"].value;
            var hobby = document.forms["myForm"]["hobby"];
            // document.write(hobby[1]);

            // for Name Checking
            if(name=="" || name.trim()=="")
            {
                document.getElementById('nameError').innerHTML="Error: Please Enter Your name";
                return false;
            }
            else
            {
                var regName = /^[a-zA-Z  ]+$/;
                if(!regName.test(name)){
                    document.getElementById('nameError').innerHTML="Error: Please Enter Valid name";
                    return false;
                }
                document.getElementById('nameError').innerHTML="";
            }

            // for Age Checking
            if(age=="" || isNaN(age))
            {
                document.getElementById('ageError').innerHTML="Error: Enter Your Age";
                return false;
            }
            else if(age<18)
            {
                document.getElementById('ageError').innerHTML="Error: more than 18 Age Require";
                return false;
            }
            else
            {
                document.getElementById('ageError').innerHTML="";
            }

            // for email Checking
            if(email=="")
            {
                document.getElementById('emailError').innerHTML="Error: Please enter Your email";
                return false;
            }
            else if(email!="")
            {
                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(email.match(mailformat))
                {
                    document.getElementById('emailError').innerHTML="";
                }
                else
                {
                    document.getElementById('emailError').innerHTML="Error: Please enter Valid email";
                    return false;
                }
            }


            //mobile Number Validation
            if(number=="" || isNaN(number))
            {
                document.getElementById('numberError').innerHTML="Error: Mobile Number is require";
                return false;   
            }
            else
                {
                    if(number.length==10)
                    {
                        document.getElementById('numberError').innerHTML="";
                    }
                    else
                    {
                        document.getElementById('numberError').innerHTML="Error: Please Enter Valid Mobile Number";
                        return false;
                    }
                }


                //City validation
                if(city=="")
                {
                    document.getElementById('cityError').innerHTML="Error: Please Select Your city";
                    return false;   
                    
                }
                else
                {
                    document.getElementById('cityError').innerHTML="";  
                }
                //Hobbies validation
                for(var i=0; i<hobby.length; i++)
                {
                    if(hobby[i].checked)
                    {
                        document.getElementById('hobbyError').innerHTML="";
                        return true;   
                    }
                    
                }
                    document.getElementById('hobbyError').innerHTML="Error: Please Check Your Any Hobby";  
                    return false;
        }