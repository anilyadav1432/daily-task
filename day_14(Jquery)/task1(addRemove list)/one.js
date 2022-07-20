document.write('<div class="outer"><h1>Add & Remove List</h1><div class="listDiv"><ul id="ulID"><li>Anil</li><li>Sunil</li><li>Ankur</li><li>Amit</li><li>Arun</li></ul></div><div id="footerDiv"><div><input id="inputVal" type="text"></div><div><button id="btnID">Add List</button></div></div></div>');

$(document).ready(function(){
    
    $("#btnID").click(function(){
        var str=$("#inputVal").val();
        if(str.trim()=="")
        {
            alert("Error:Please Enter Value");
        }
        else
        {
        $("#ulID").append(`<li>${str}</li>`);
        $("#inputVal").val("");  //after adding input value blank
        }
      
    });  
    //delete li
        $('#ulID').on("click","li",function(){
            $(this).remove();
        });
    
});