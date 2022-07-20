var products = {
    Electronics: {
        Television : [
            {
            id : "PR001",
            name : "MAX-001",
            brand : "Samsung"
            },
            {
            id : "PR002",
            name : "BIG-301",
            brand : "Bravia"
            },
            {
            id : "PR003",
            name : "APL-02",
            brand : "Apple"
            }
        ],
        Mobile : [
            {
            id : "PR004",
            name : "GT-1980",
            brand : "Samsung"
            },
            {
            id : "PR005",
            name : "IG-5467",
            brand : "Motorola"
            },
            {
            id : "PR006",
            name : "IP-8930",
            brand : "Apple"
            }
        ]
    },
    Jewelry : {
        Earrings : [
            {
            id : "PR007",
            name : "ER-001",
            brand : "Chopard"
            },
            {
            id : "PR008", 
            name : "ER-002",
            brand : "Mikimoto"
            },
            {
            id : "PR009",
            name : "ER-003",
            brand : "Bvlgari"
            }
        ],
        Necklaces : [
            {
            id : "PR010",
            name : "NK-001",
            brand : "Piaget"
            },
            {
            id : "PR011",
            name : "NK-002",
            brand : "Graff"
            },
            {
            id : "PR012",
            name : "NK-003",
            brand : "Tiffany"
            }
        ]
    }
}


// Table Code For All Products

document.write('<h1>Table For All Products</h1><table border="1" class="table1"><tr><td>Category</td><td>Subcategory</td><td>ID</td><td>Name</td><td>Brand</td></tr>');
// Code of Object element by (For in) Loop
for(var i in products)
{
    for(var j in products[i])
    {
        for(var k in products[i][j])
        {
            document.write(`<tr><td>${[i]}</td><td>${j}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td></tr>`);    
        }    
    }        
}
document.write(`</table>`);


// Table Code For All Mobile Products
document.write('<h1>Table For All Mobile Products</h1><table border="1" class="table2"><tr><td>Category</td><td>Subcategory</td><td>ID</td><td>Name</td><td>Brand</td></tr>');
// Code of Object element by (For in) Loop
for(var i in products)
{
    for(var j in products[i])
    {
        for(var k in products[i][j])
        {
             
            if(j == "Mobile" || j == "mobile")
            {
                document.write(`<tr><td>${[i]}</td><td>${j}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td></tr>`); 
            }  
        }    
    }        
}
document.write(`</table>`);


// Table Code For All Sumsung Products
document.write('<h1>Table For All Sumsung Products</h1><table border="1" class="table3">');
// Code of Object element by (For in) Loop
for(var i in products)
{
    for(var j in products[i])
    {
        for(var k in products[i][j])
        {      
            if(products[i][j][k].brand == "Samsung" || products[i][j][k].brand == "samsung")
            {
                document.write(`<tr><th>Product ID</th><td>${products[i][j][k].id}</td></tr><tr><th>Product Name</th><td>${products[i][j][k].name}</td></tr><tr><th>Subcategory</th><td>${j}</td></tr><tr><th>Category</th><td>${[i]}</td></tr>`); 
            }  
        }    
    }        
}
document.write(`</table>`);


// Table Code For Given Id  deleted
document.write('<h1>Table For Given Id  deleted</h1><table border="1" class="table4"><tr><td>Category</td><td>Subcategory</td><td>ID</td><td>Name</td><td>Brand</td></tr>');
// Code of Object element by (For in) Loop
for(var i in products)
{
    for(var j in products[i])
    {
        for(var k in products[i][j])
        {      
            if(products[i][j][k].id == "PR003")
            {
                delete products[i][j][k];
               
            }
            else
            {
                document.write(`<tr><td>${[i]}</td><td>${j}</td><td>${products[i][j][k].id}</td><td>${products[i][j][k].name}</td><td>${products[i][j][k].brand}</td></tr>`); 
            }  
        }    
    }        
}
document.write(`</table>`);


// Table Code For update Products with id

document.write('<h1>Table For update Products with id</h1><table border="1" class="table5"><tr><td>Category</td><td>Subcategory</td><td>ID</td><td>Name</td><td>Brand</td></tr>');
// Code of Object element by (For in) Loop
for(var i in products)
{
    for(var j in products[i])
    {
        for(var k in products[i][j])
        {
                document.write(`<tr><td>${[i]}</td><td>${j}</td><td>${products[i][j][k].id}</td>`); 
                if(products[i][j][k].id != "PR002")
                {
                    document.write(`<td>${products[i][j][k].name}</td>`);
                }
                else
                {
                    document.write(`<td>BIG-555</td>`);
                }
                document.write(`<td>${products[i][j][k].brand}</td></tr>`);      
        }    
    }        
}
document.write(`</table>`);
