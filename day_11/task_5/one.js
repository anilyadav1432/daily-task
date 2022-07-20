document.write(`<div class="mainDiv"><h2>Hello <span id="eventId">User</span></h2>
    Press Key :<input id="inputId" type="text" oninput="myFun()"></div>`);
        function myFun()
        {
            var txtValue = document.getElementById("inputId").value;
            if(txtValue=="")
            {
               document.getElementById("eventId").innerHTML="User";
            }
            else{
                // txtValue="";
                document.getElementById("eventId").innerHTML=txtValue;
            }
        }