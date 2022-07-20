
       
        var details = {
            hotelName     : "Peris Plaza",
            roomRate      : 250.00,
            percentageVal : 10,
            calValue : function()
            {
                var val1=(this.roomRate*this.percentageVal)/100;
                return this.roomRate-val1;
            }
        };

       
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";

        var a   =   new Date();
        a.setDate(a.getDate() + 7);
        var r = weekdays[a.getDay()];
        var Day =   a.getDate();
        var todayYear =   a.getFullYear();

       

        // Code for Getting Month name
        var monthName = new Array(11);
        monthName[0]    =   "January";
        monthName[1]    =   "February";
        monthName[2]    =   "March";
        monthName[3]    =   "April";
        monthName[4]    =   "May";
        monthName[5]    =   "June";
        monthName[6]    =   "July";
        monthName[7]    =   "August";
        monthName[8]    =   "September";
        monthName[9]    =   "October";
        monthName[10]   =   "November";
        monthName[11]   =   "December";

        var monthToday  =   monthName[a.getMonth()];

        document.write(`<div class="outerDiv"><h1>${details.hotelName}</h1><br/>`);
        document.write(`<h4>Room rate = Rs.${details.roomRate.toFixed(2)}</h4><br/>`);
        document.write(`<h4>Discounted Rate = Rs.${details.calValue()}</h4><br/>`);
        document.write(`Offer expires next ${r} <br/> ( ${Day} ${monthToday} ${todayYear}) </div>`);
        
