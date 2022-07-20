
        var str1        = "Anil";
        var str2        = "Yadav";
        var fullName    = str1.concat(" "+str2);
        var letters     = fullName.split('').length;
        var subtotal= 5*letters;
        var grandt=subtotal+7;
        var ship="$7";
        document.write("<div class='outer'><h1>Order Details</h1>");
        document.write(`Hello ${str1}, Please check your order:`)
        document.write(`<table class="tbl_css" border="1"><tr><td>Name :</td><td>${fullName}</td></tr><tr><td>Total letters:</td><td>${letters}</td></tr><tr><td>Subtotal</td><td>$${subtotal}</td></tr><tr><td>Shipping:</td><td>${ship}</td></tr><tr><td>Grand Total :</td><td>${grandt}</td></tr></table>`);
        document.write("<a href='#'>Pay Now</a></div>");
     