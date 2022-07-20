var arrayProduct=[
    {id:1,name:"Towel",price:1000,quantity:1,image:"image/towalimg.jpg"},
    {id:2,name:"Pant",price:1200,quantity:1,image:"image/pant.jpeg"},
    {id:3,name:"T-Shirt & Short",price:900,quantity:1,image:"image/1.jpg"},
    {id:4,name:"blue Shirt",price:600,quantity:1,image:"image/2.png"},
    {id:5,name:"Sport t-shirt",price:1300,quantity:1,image:"image/3.jpeg"},
    {id:6,name:"Black T-shirt",price:700,quantity:1,image:"image/4.jpg"},
    {id:7,name:"Short T-shirt",price:1400,quantity:1,image:"image/5.jpg"},
    {id:8,name:"Red Top",price:500,quantity:1,image:"image/6.jpeg"}
]
document.write(`<div class="outerDiv">`);
    for (var i=0; i<arrayProduct.length;i++) {
        document.write(`<div class="cardDiv1"><div class="imgDiv"><img src="${arrayProduct[i].image}"></div><div class="priceDiv"><div>${arrayProduct[i].price}</div><div>${arrayProduct[i].name}</div></div><div class="cardBtn"><button onclick="addCart(${arrayProduct[i].id})">Add to Cart</button></div></div>`);
    }



 // Display list in Table

document.write(`<div class="ListDiv"><div id="displayId"></div><div class="totalprice"><div><button onclick="purchaseRemove()">Purchase</button></div><div><h2>Total Price : <span id="totalRs"></span></h2></div></div></div>`);
var ci=1;
var arr=[];
var arr2=[]; //for onchange Amount
var temp=0;

 function addCart(cardId)
    {
        document.getElementsByClassName("ListDiv")[0].setAttribute("id","hideShowId");  //display footer
        // debugger
        var idNum=cardId;
        
        for (var i=0; i<arrayProduct.length;i++) {
            if(!arr.includes(arrayProduct[i].id))
            {
                if(idNum==arrayProduct[i].id)
                {
                    // alert(idNum);
                    arr.push(arrayProduct[i].id);
                    arr2.push(arrayProduct[i]);  //for onchange Amount
                    // console.log(arr);
                    var list1="<table>";
                    if(ci==1)
                    {
                        list1 +=`<tr> <th>Sr.n.</th> <th>Product Name</th> <th>Price</th> <th>Quantity</th><th>Image</th> <th>Cart Remove</th> </tr>`;
                    }
                    
                        list1 +=`<tr id="${arrayProduct[i].id}"><td>${ci}</td><td>${arrayProduct[i].name}</td><td><span id="cartp${arrayProduct[i].price}">${arrayProduct[i].price}</span></td><td><input type="number" id="qty${arrayProduct[i].id}" value="${arrayProduct[i].quantity}" min="1"  onchange="myFunction1(${arrayProduct[i].id}); changeArrQty(${arrayProduct[i].id})" oninput="validity.valid||(value=0);"></td><td><img src="${arrayProduct[i].image}" height="100" width="100" ></td><td><button onclick="removeFun('${arrayProduct[i].id}')">Remove</button></td></tr></table>`;
                        document.getElementById('displayId').innerHTML+=list1;
                        myFunction1(arrayProduct[i].id)
                    
                }
            }
            else{
                // debugger
                if(idNum == arrayProduct[i].id)
                {
                    var incNum = arrayProduct[i].quantity;
                    // alert(incNum);
                    incNum=parseInt(incNum)+1;
                    document.getElementById(`qty${arrayProduct[i].id}`).setAttribute("value",incNum);
                    // document.getElementById(`qty${arrayProduct[i].id}`).value = incNum;
                    arrayProduct[i].quantity=incNum;

                    myFunction1(arrayProduct[i].id)
                    
                }
                // console.log(arrayProduct);
                
            }

            
        }
        ci=ci+1;
        
    }

    
    function changeArrQty(id)
    {

        let qty=document.getElementById("qty"+id+"").value;
        if(qty==0){
            removeFun(id);
        }
        arrayProduct = arrayProduct.map(x=>{
            if(x.id==id){
                x.quantity=qty;
                // return x
            }
            
            return x;
        })

        // alert(JSON.stringify(arrayProduct))

    }

    // Onchange total amount
    function myFunction1(id)
    {
        let tot1=0;
        for(var i=0; i<arr2.length;i++)
        {
            let qty=document.getElementById("qty"+arr2[i].id+"").value;
                tot1+=parseInt(arr2[i].price)*parseInt(qty);
                
        }
        
            document.getElementById("totalRs").innerHTML=tot1;     
    }

    // remove row code
    
    function removeFun(removeRowId)
    {
        document.getElementById(removeRowId).remove();
        // alert(myobj);  
        arr2=arr2.filter(x=>{return x.id !=removeRowId});
        let tot1=0;
        for(var i=0; i<arr2.length;i++)
        {
            let qty=document.getElementById("qty"+arr2[i].id+"").value;
            tot1+=parseInt(arr2[i].price)*parseInt(qty);
        }

        //This loop Reload main arrayProduct quantity on removing row
        for(var i=0; i<arrayProduct.length;i++)
        {
            if(removeRowId==arrayProduct[i].id)
            {
                arrayProduct[i].quantity=1;
                // console.log(arrayProduct[i].price);
            }
        }

        document.getElementById("totalRs").innerHTML=tot1;
        arr=arr.filter(x=>{return x !=removeRowId});
        if(arr=="")
        {
            location.reload();
        }

        // arr.splice(arr2);  //splice delete this arr2 - jisse arr ki id starting ho
        
    }

    //Puchase Remove List
    function purchaseRemove()
    {
        alert("Thank You For Sopping 😄");
        location.reload();
    } 
