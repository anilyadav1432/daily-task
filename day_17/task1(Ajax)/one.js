var sno=1;
        var sno2=1;
        var table1="";
        var table2="";
        var table3="";
        var table4="";
        var addForm="<form  action='' id='formID'><table><tr><th>Title</th><td><input type='text' id='titleInp'></td></tr><tr><th>Duration</th><td><input type='number' id='durationInp'></td></tr><tr><th>Year</th><td><input type='number' id='yearInp'></td></tr><tr><th>Poster Url</th><td><input type='file' id='posterInp'></td></tr><tr><th>IMD Rating</th><td><input type='number' id='ratingInp'></td></tr><tr><td colspan='2'><button type='submit'>Add Movie</button></td></tr></table></form>";
        var delForm="<table><tr><td><input type='number' id='idInp' placeholder='Enter any Id'></td><th><button type='submit' id='idBtn'>Del Movie</button></th></tr></table>"
        var searchTbl="<table><tr><th>Search By Title</th><td><input type='text' id='titleSearch' oninput='searchFun()'></td></tr><tr><th>Search By Year</th><td><input type='text' id='yearSearch' oninput='searchFun()'></td></tr></table>";
         table1+="<tr><th>S.NO.</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>IMD Rating</th></tr>";
        
        $(document).ready(function(){
            $('#tblDiv').hide();
            $('#listAddMovie').hide();
            $('#listDelMovie').hide();
            $('#searchlistMovie').hide();
            $('#arrData').click(function(){
                table1="";
                $.ajax({
                    url:"https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
                    type:"get",
                    success:function(data){
                        data=JSON.parse(data);
                        // console.log(data);
                        data.map(function(items,i){
                            var data = i+1;
                        table1 +="<tr><td>"+data+"</td><td>"+items.title+"</td><td>"+items.duration+"</td><td>"+items.year+"</td><td><img src="+items.posterurl+" height='200' width='200'></td><td>"+items.imdbRating+"</td></tr>";
                        sno++;
                        });
                        
                        // console.log(table1);
                        $('#tbl1').html(table1);
                        $('#tblDiv').show();
                        $('#addForm').hide();
                        $('#delForm').hide();
                        $('#listDelMovie').hide();
                        $('#listAddMovie').show();
                        $('#searchInput').hide();
                        $('#searchlistMovie').hide();
                    }
                });
            });

            // For Add Form For Add Movie
            $('#addMovie').click(function(){
                $('#tblDiv').hide();
                $('#listDelMovie').hide();
                $('#listAddMovie').hide();
                $('#addForm').show();
                $('#delForm').hide();
                $('#addForm').html(addForm);
                $('#searchInput').hide();
                $('#searchlistMovie').hide();
                
                
            });

             //New Add Movie in Array
             $(document).on("submit","#formID",function(e){
                e.preventDefault();
                // alert("hyy");
              
                var titleInp=$('#titleInp').val();
                var durationInp=$('#durationInp').val();
                var yearInp=$('#yearInp').val();
                var posterInp=$('#posterInp').val().replace(/^.*\\/,""); //for replacing fakeurl
                var ratingInp=$('#ratingInp').val();
                var newob={'title':titleInp,'duration':durationInp,'year':yearInp,'posterurl':posterInp,'imdbRating':ratingInp};
                if(apiArr.push(newob))
                {
                    $('#titleInp').val("");
                    $('#durationInp').val("");
                    $('#yearInp').val("");
                    $('#posterInp').val("");
                    $('#ratingInp').val("");


                    //Add movie List
                    $('#addForm').hide();
                    table2 +="<tr><th>S.NO.</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>IMD Rating</th></tr>";
                    apiArr.map(function(additems){
                        table2 +="<tr><td>"+sno2+"</td><td>"+additems.title+"</td><td>"+additems.duration+"</td><td>"+additems.year+"</td><td><img src="+additems.posterurl+" height='200' width='200'></td><td>"+additems.imdbRating+"</td></tr>";
                        sno2++;
                        });
                        
                        // console.log(table1);
                        $('#tbl2').html(table2);
                        $('#listAddMovie').show();
                        $('#tblDiv').hide();
                        $('#listDelMovie').hide();
                        $('#searchInput').hide();
                        $('#searchlistMovie').hide();
                        $('#delForm').hide();
                        $('#addForm').show();
                        sno2=1;
                }
                // console.log(apiArr);
               
                
            });

            //insert id and show table by delete Button
            $('#delMovie').click(function(){
                $('#addForm').hide();
                $('#searchInput').hide();
                $('#searchlistMovie').hide();
                $('#tblDiv').hide();
                $('#listDelMovie').show();
                $('#listAddMovie').hide();
                $('#delForm').show();
                //id inserting code in array obj
                $.each(apiArr,function(i,obj){
                   obj["id"]=i+1;
                   i++
                });
                // del form append
                $('#delForm').html(delForm);

                //Movie list
                table3 +="<tr><th>S.NO.</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>IMD Rating</th></tr>";
                apiArr.map(function(tbllist){
                    table3 +="<tr><td>"+tbllist.id+"</td><td>"+tbllist.title+"</td><td>"+tbllist.duration+"</td><td>"+tbllist.year+"</td><td><img src="+tbllist.posterurl+" height='200' width='200'></td><td>"+tbllist.imdbRating+"</td></tr>";
                })
                $('#tbl3').html(table3);

                //del code by id
                $('#idBtn').click(function(){
                    var insetId=$('#idInp').val();
                    table3="";
                    var newList="";
                    apiArr=apiArr.filter(dd=>(dd.id!=insetId));
                    // console.log(apiArr);
                    table3 +="<tr><th>S.NO.</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>IMD Rating</th></tr>";
                    apiArr.map(function(newlist){
                        table3 +="<tr><td>"+newlist.id+"</td><td>"+newlist.title+"</td><td>"+newlist.duration+"</td><td>"+newlist.year+"</td><td><img src="+newlist.posterurl+" height='200' width='200'></td><td>"+newlist.imdbRating+"</td></tr>";
                    });
                    $('#tbl3').html(table3);
                });

            });
                
            // Search By title & Year
            $('#searchMovie').click(function(){
                $('#addForm').hide();
                $('#tblDiv').hide();
                $('#listDelMovie').hide();
                $('#listAddMovie').hide();
                $('#delForm').hide();
                $('#searchInput').show();
                $('#searchlistMovie').show();
                $('#searchInput').html(searchTbl);
                table4="";
                sn=1;
                table4 +="<tr><th>S.NO.</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>IMD Rating</th></tr>";
                apiArr.map(function(items){
                        table4 +="<tr><td>"+sn+"</td><td>"+items.title+"</td><td>"+items.duration+"</td><td>"+items.year+"</td><td><img src="+items.posterurl+" height='200' width='200'></td><td>"+items.imdbRating+"</td></tr>";
                        sn++;
                        });
                        $('#tbl5').html(table4);
                
            });

        
        });

        
        function searchFun(){
            
            $('#searchInput').show();
            $('#tblDiv').hide();
            var titleInput=$('#titleSearch').val().toLowerCase();
            // alert(titleInput);
            var yearInput=$('#yearSearch').val();
            // alert(yearInput);
            table4="";
            table4 +="<tr><th>S.NO.</th><th>Title</th><th>Duration</th><th>Year</th><th>Poster</th><th>IMD Rating</th></tr>";
            $(apiArr).each(function (k,searchtit){
                var titleLoop=searchtit.title.toLowerCase();
                var yearLoop= (searchtit.year);
                // console.log(titleLoop);
                if(yearLoop == "")
                {
                    if(titleLoop.match(titleInput) != null)
                    {
                        // alert(titleInput);
                        table4 +="<tr><td>"+(k+1)+"</td><td>"+searchtit["title"]+"</td><td>"+searchtit["duration"]+"</td><td>"+searchtit["year"]+"</td><td><img src="+searchtit["posterurl"]+" height='200' width='200'></td><td>"+searchtit["imdbRating"]+"</td></tr>";
                    }
                }
                else if(titleLoop == "")
                {
                    if(yearLoop.match(yearInput) != null)
                    {
                        table4 +="<tr><td>"+(k+1)+"</td><td>"+searchtit["title"]+"</td><td>"+searchtit["duration"]+"</td><td>"+searchtit["year"]+"</td><td><img src="+searchtit["posterurl"]+" height='200' width='200'></td><td>"+searchtit["imdbRating"]+"</td></tr>";
                    }
                }
                else
                {
                    if((titleLoop.match(titleInput) != null) && (yearLoop.match(yearInput) != null))
                    {
                        table4 +="<tr><td>"+(k+1)+"</td><td>"+searchtit["title"]+"</td><td>"+searchtit["duration"]+"</td><td>"+searchtit["year"]+"</td><td><img src="+searchtit["posterurl"]+" height='200' width='200'></td><td>"+searchtit["imdbRating"]+"</td></tr>";
                    }
                    
                } 
            });
            // console.log(table1)
            $('#tbl5').html(table4);

        }