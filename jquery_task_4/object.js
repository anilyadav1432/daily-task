var products = {
    "Shirt": [
        {
            img: "images/abc.jpeg",
            Name: "Shirt",
            price: "450"
        },
        {

            img: "images/shirt2.jpeg",
            Name: "Shirt 2",
            price: "1000"
        },
        {

            img: "images/shirt3.jpeg",
            Name: "Shirt 3",
            price: "770"
        },
    ],
    "Jeans": [
        {

            img: "images/jeans.jpeg",
            Name: "jeans",
            price: "1300"
        },
        {

            img: "images/jeans2.jpeg",
            Name: "Jeans 2",
            price: "2100"
        },
        {

            img: "images/jeans3.jpeg",
            Name: "jeans 3",
            price: "1100"
        },
    ],
    "Jacket": [
        {

            img: "images/jacket.jpeg",
            Name: "Jacket 1",
            price: "2100"
        },
        {

            img: "images/jacket2.jpeg",
            Name: "Jacket 2",
            price: "4100"
        },
        {

            img: "images/jacket3.jpeg",
            Name: "Jacket 3",
            price: "3300"
        },
    ],
    "Shoes": [
        {

            img: "images/shoes.jpeg",
            Name: "Shoes1",
            price: "2100"
        },
        {

            img: "images/shoes2.jpeg",
            Name: "Shoes2",
            price: "3300"
        },
        {

            img: "images/shoes3.jpeg",
            Name: "Shoes 3",
            price: "5500"
        },
    ],
    "Watch": [
        {

            img: "images/watch1.jpeg",
            Name: "Mobile 1",
            price: "3330"
        },
        {

            img: "images/watch2.jpeg",
            Name: "Mobile 2",
            price: "5550"
        },
        {

            img: "images/watch3.jpeg",
            Name: "Mobile 3",
            price: "6500"
        },
    ]
}
var total_price = 0;
var arr_price = [];
var newLine = "";
var show_all = "";
// sum = 
$(document).ready(function () {
    var btn_append = "";
    show_all = "";
    for (i in products) {
        btn_append = `<button class="item" value="${i}">${i}</button>`
        $('#btn').append(btn_append);
        for (j = 0; j < products[i].length; j++) {
            show_all += `<div class="child"> 
            <h3>${products[i][j]['Name']}</h3>
            <img src="${products[i][j]['img']}">
            <h3> ${"Price:$" + products[i][j]['price']}</h3></div>`;
            total_price = +total_price + +products[i][j]['price'];
        }
        $('#show').html(show_all);
        $('#tshow').html(total_price)
    }
    var arr_get_data = [];
    var show_allnew = "";
    total_price = 0;
   
    $('.item').click(function (s) {
        var get_btn = $(this).val();
        if (!arr_get_data.includes(get_btn)) {
            arr_get_data.push(get_btn);
            $(this).css("background-color", "crimson");
            $.each(products, function (index, value) {
                if (index == get_btn) {
                   if(arr_get_data.length == 1){
                   show_allnew = "";
                   }
                   else{
                   show_allnew= $('#show').html();
                   }
                    $.each(value, function (index1, value1) {
                        arr_price.push(parseInt(value1.price));

                        show_allnew += `<div class="child ${get_btn}" > 
                        <h3>${value1.Name}</h3>
                        <img src="${value1.img}">
                        <h3> ${"Price:$" + value1.price}</h3></div>`;
                        total(value1.price);
                    })
                }
            }) 
            $('#show').html(show_allnew);
            $('#tshow').text(total_price)
            // console.log(arr_price)
        }
        else {
            arr_get_data.splice($.inArray(get_btn, arr_get_data), 1);
            total_price=0;
            for (let k in products) {
                
                if(arr_get_data.includes(k))
                {
                    for(let j=0;j<products[k].length;j++)
                    {
                        total(products[k][j].price);
                    }
                }
            }
            $('#tshow').text(total_price)

            $(this).css("background-color", "teal");
            $(`.${get_btn}`).hide();
            
            if (arr_get_data.length < 1) {
                location.reload();
            }
        }


    });
});
sum = 0;
function total(abc)
{
    total_price = parseInt(total_price)+parseInt(abc);
}
