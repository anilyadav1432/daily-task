const products = [
    { id: 1, category: "Phone", Type: "Mobile", Brand: "Oppo", Price: 15000, img: "mobile1.jpg" },
    { id: 2, category: "Shoes", Type: "shoes", Brand: "Rebook", Price: 2200, img: "shoes1.jpg" },
    { id: 3, category: "Watch", Type: "watch", Brand: "Fastrak", Price: 1800, img: "watch2.jpeg" },
    { id: 4, category: "Shoes", Type: "shoes", Brand: "Action", Price: 3000, img: "shoes2.jpeg" },
    { id: 5, category: "Cloths", Type: "T-Shirt", Brand: "polo", Price: 1000, img: "t-shirt1.jpg" },
    { id: 6, category: "Watch", Type: "watch", Brand: "Sport", Price: 12000, img: "watch1.jpg" },
    { id: 7, category: "Cloths", Type: "T-Shirt", Brand: "Levis", Price: 1000, img: "t-shirt2.jpg" },
    { id: 8, category: "laptop", Type: "light Weight", Brand: "DELL", Price: 1000, img: "lappy1.jpg" },
    { id: 9, category: "Phone", Type: "Mobile", Brand: "realMe", Price: 17000, img: "mobile2.jpg" },
    { id: 10, category: "laptop", Type: "SSD", Brand: "HP", Price: 45000, img: "lappy2.jpg" },
]
var filterCards = "";
var myCards = "";
var arr = [];
var total = 0;
var def = 0;
$(document).ready(function () {
    $.each(products, function (i, item) {
        myCards += `<div class="column" Id="Cards">
            <img src=${item.img} alt="img">
            <p>Price: <span>${item.Price}<span></p>
            <div class="bottomPart">
            <p>${item.Type}</p>
           <p> ${item.Brand}</p>
            </div>
     </div>`
        $("#rows").html(myCards);
        def = def + item.Price
        $("#totalPrice").html(def);
    });
});
filterCards = ''
$("button").click(function () {
    var btnVal = $(this).val();
    $(this).addClass('changeColor');
    if (!arr.includes(btnVal)) {
        arr.push(btnVal);
        if (arr.length == 1) {
            filterCards = '';
        } else {
            filterCards = $('#rows').html();
        }
        $.each(products, function (i, item) {
            // console.log(i)
            if (item.category == btnVal) {
                filterCards += `<div class="column` + item.category + `" Id="Cards">
                <img src=${item.img} alt="img">
                <p>Price: <span>${item.Price}<span></p>
                <div class="bottomPart">
                    <p>${item.Type}</p>
                    <p> ${item.Brand}</p>
                </div>
         </div>`
                total = total + item.Price
                $("#totalPrice").html(total)
                $("#rows").html(filterCards);
            }
        });
    }
    else {
        $.each(products, function (i, item) {
            if (item.category == btnVal) {
                total = total - item.Price;
                $("#totalPrice").html(total);
            }
        })
        arr.splice($.inArray(btnVal, arr), 1);
        $(this).removeClass('changeColor');
        console.log('.column' + btnVal)
        $('.column' + btnVal).remove();
        if (arr == "") {
            $("#rows").html(myCards);
            $("#totalPrice").html(def);
        }
    }
});

