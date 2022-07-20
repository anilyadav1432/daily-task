
function Person(name, age, friend, colors) {
    this.name = name;
    this.age = age;
    this.isBestFriend = friend;
    this.favouriteColors = colors;
    this.yellowFavourite = function(){
        if(this.favouriteColors.includes("yellow"))
        {
            return "Yellow is my favourite colour";
        }
        else if(!this.favouriteColors.includes("yellow"))
        {
            return "Yellow is not my favourite colour";
        }
};
  }
  
  // Create a Person object
  const detail1 = new Person("John", 16, "true",["yellow","blue"]);
  const detail2 = new Person("Ankur", 18, "true",["green","blue","red"]);
  const detail3 = new Person("Anil", 28, "true",["white","pink"]);
  const detail4 = new Person("Anurag", 31, "false",["yellow","blue","grey"]);
  const detail5 = new Person("Anurag", 29, "false",["yellow","blue","grey","blue"]);
  const detail6 = new Person("Sinu", 32, "true",["grey","purple"]);
   
  arrayDetails=[detail1,detail2,detail3,detail4,detail5,detail6];
        var snn=1;
        document.write(`<div class="mainDiv"><table border="1"><tr><td>S.No.</td><td>Name</td><td>Age</td><td>BestFriend</td>`);
        var maxVal=arrayDetails[0].favouriteColors.length;
        for(var i=1; i < arrayDetails.length; i++)
        {
            var j = arrayDetails[i].favouriteColors.length;
            if(j > maxVal)
            {
                maxVal = j;
            }
        }

        for(var colorNo=1; colorNo<=maxVal;colorNo++)
        {
        document.write(`<td>FavouritesColour${colorNo}</td>`);
        }
        
        document.write(`<td>YellowFabourate</td></tr>`);
        for(var b=0;b<arrayDetails.length;b++)
        {
            document.write(`<tr><td>${snn}</td><td>${arrayDetails[b].name}</td><td>${arrayDetails[b].age}</td><td>${arrayDetails[b].isBestFriend}</td>`);
                for(var colorNo=0; colorNo<maxVal;colorNo++)
                {
                    if(arrayDetails[b].favouriteColors[colorNo]!=null)
                    {
                        document.write(`<td>${arrayDetails[b].favouriteColors[colorNo]}</td>`);
                    }
                    else
                    {
                        document.write(`<td> </td>`);
                    }
                }
            document.write(`<td>${arrayDetails[b].yellowFavourite()}</td></tr>`);
            snn++;
        }
        document.write(`</table></div>`);