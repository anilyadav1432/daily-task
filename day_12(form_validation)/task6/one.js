var c=1;
        function addFun()
        {
            if(c==1)
            {
                var n1=document.createElement("li");
                n1.appendChild(document.createTextNode("Air Freshener"));
                document.querySelector('ul').appendChild(n1);
                var myli=document.querySelectorAll('li');
               for(let i=0;i<myli.length;i++)
               {
                myli[i].classList.add("food");
               }
                c=c+1;
            }
        }

        function removeFun()
        {
           const li=document.querySelectorAll("li");
           nl1=li.length;
           for(let i = nl1-1; 0<=i;i--)
           {
              var l=li[i];
              l.remove();
            
              break;
           }
        }
        
        document.write("<div class='outerDiv'><h1>List</h1><h1>Buy groceries</h1><ul id='listId'><li class='myclass'>cold cereal</li><li class='myclass'>Ice cream</li><li class='myclass'>Honey</li><li class='myclass'>Olive oil</li></ul>");
        
        document.write("</select><div class='btnDiv'><button onclick='addFun()''>Add Item</button><button onclick='removeFun()'>Remove Item</button></div></div>");