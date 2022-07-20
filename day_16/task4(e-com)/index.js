document.write(`<div class="outerDiv"><h1 id="h1_first">E Commerce</h1><div class="amountDiv">Total Price :<span id="totAmt"></span></div><div class="btnDiv"></div>`);
        document.write(`<div class="cardDiv"></div>`);
    
        document.write(`</div>`); //outerDiv close

    $(document).ready(function(){
        var arrayProduct=[
    {id:1,name:"Shoes"},
    {id:2,name:"Watch"},
    {id:3,name:"Laptop"},
    {id:4,name:"Mobile"},
    {id:5,name:"T-Shirt"}
    ];
    var arryCategory=[
    {id:1,arrCat:[ {id:1,name:"casual shoes",price:300,image:"images/shoes/shoes1.jpg"}, {id:2,name:"Sport shoes",price:600,image:"images/shoes/shoes2.jpeg"} ]},
    {id:2,arrCat:[ {id:1,name:"casual Watch",price:1200,image:"images/watch/watch1.jpg"}, {id:2,name:"Sport shoes",price:1400,image:"images/watch/watch2.jpeg"} ]},
    {id:3,arrCat:[ {id:1,name:"HP Laptop",price:30000,image:"images/lappy/lappy1.jpg"}, {id:2,name:"Dell Laptop",price:25000,image:"images/lappy/lappy2.jpg"} ]},
    {id:4,arrCat:[ {id:1,name:"Samsung Mobile",price:12000,image:"images/mobile/mobile1.jpg"}, {id:2,name:"Mi Mobile",price:6000,image:"images/mobile/mobile2.jpg"} ]},
    {id:5,arrCat:[ {id:1,name:"Red T-Shirt",price:200,image:"images/tshirt/t-shirt1.jpg"}, {id:2,name:"Mi Mobile",price:400,image:"images/tshirt/t-shirt2.jpg"} ]}
    ];
    //fOR BUTTON PRINT CODE********
    var btnAppend="";
    var imgAppend="";
    
    for (var i=0; i<arrayProduct.length;i++) {
            btnAppend+=`<button class="filter_btn" id="btn${arrayProduct[i].id}" value="btn${arrayProduct[i].id}">${arrayProduct[i].name}</button>`;
        }
        $('.btnDiv').html(btnAppend);
    //fOR Image Box PRINT CODE********
        let totAmount=0;
        let arrP=[];
        for (var j=0; j<arrayProduct.length;j++) {
            for(var k=0; k<arryCategory.length;k++)
            {
                k = Math.floor(Math.random() * arryCategory.length);

                if(!arrP.includes(k))
                {
                    arrP.push(k);
                    if(arrayProduct[j].id=arryCategory[k].id)
                    {
                        for(var l=0;l<arryCategory[k].arrCat.length;l++)
                        {
                            // alert(arryCategory[k].arrCat[l].name);
                            totAmount=totAmount+arryCategory[k].arrCat[l].price;
                            imgAppend+=`<div class="boxDiv"><div class="imgDiv"><img src="${arryCategory[k].arrCat[l].image}" height="300" width="100%"></div><div class="contentDiv"><div>${arryCategory[k].arrCat[l].name}</div><div>${arryCategory[k].arrCat[l].price}</div></div></div>`;
                        }
                    }
                }
            }
        
        }
        $('#totAmt').html(totAmount);
        $('.cardDiv').html(imgAppend);

    //fOR click Button Image********

    let product_id_arr=[];
    // $('#id').val()
    $(".filter_btn").click(function(){
        // alert();
        let product_id = $(this).val();
        var imgAppend="";
        let totAmount=0;

        product_id = product_id.substring(3);
        if(product_id_arr.includes(product_id)){
            product_id_arr = product_id_arr.filter(t=>{return t != product_id})
            $(this).css("background-color", "blue");
        }else{
            product_id_arr.push(product_id)
            $(this).css("background-color", "skyblue");
        }
        //   alert(product_id_arr)
        if(!product_id_arr.length=="")
        {
            for(let v=0;v<product_id_arr.length;v++){
                
                let printData = arryCategory.filter(y=>{
                    return y.id ==product_id_arr[v]
                });
                // alert(JSON.strigify());
                printData = printData[0].arrCat;
                for(var l=0;l<printData.length;l++)
                {
                            // alert(arryCategory[k].arrCat[l].name);
                            totAmount=totAmount+printData[l].price;
                            imgAppend+=`<div class="boxDiv"><div class="imgDiv"><img src="${printData[l].image}" height="300" width="100%"></div><div class="contentDiv"><div>${printData[l].name}</div><div>${printData[l].price}</div></div></div>`;
                }

            }
        }
        else
        {
            location.reload();
        }
        $('#totAmt').html(totAmount);
        $('.cardDiv').html(imgAppend);

    });
    
    });