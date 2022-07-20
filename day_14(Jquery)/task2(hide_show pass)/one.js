    document.write(`<div class="outer"><h1>Hide And Show</h1><div><input type="password" id="inputId"><input type="checkbox" id="btnId" value="Show/Hide"></div></div>`);
        $(document).ready(function(){
            var i=1;
            $('#btnId').click(function(){
                if(i==1)
                {
                $('#inputId').attr("type","text");
                i=i+1;
                }
                else
                {
                    $('#inputId').attr("type","password");
                    i=1;
                }
                
            });
        });