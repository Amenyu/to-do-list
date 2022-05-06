
function ajax(){
    // creating an xhr object
    var xhttp=new XMLHttpRequest();
     
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response=JSON.parse(this.responseText);
            console.log(response.title);
            var output="";
            for(var i=0;i<response.length;i++){
                // output+="<li>"+response[i].title+"</li>";
                output+= "<tr><td>"+response[i].id+"</td><td>"+response[i].title+"</td><td>"+response[i].completed+"</td></tr>";
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
    
    ajax();




   
