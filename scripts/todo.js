var cnt=0;
function getList(){
  cnt=0;
    // creating an xhr object
    var xhttp=new XMLHttpRequest();
     
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var response=JSON.parse(this.responseText);
            displayList(response);                
        }
    }
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
}

displayList=(response)=>{

  const todolist = document.getElementById("todolist");
  todolist.innerHTML=`<div class="container" id="listhead"><br>
                           <div class="row">
                                <div class="col-4"> ID </div>
                                <div class="col-6"> Title </div>
                                <div class="col-2"> Completed </div>
                           </div>
                      </div>`;
  
  for(var i=0;i<response.length;i++){
    const container = document.createElement("div");
    const todolist = document.getElementById("todolist");
    todolist.appendChild(container);
    container.className="container";
    
    var mybr = document.createElement('br');
    container.appendChild(mybr);
 
    const row = document.createElement("div");
    container.appendChild(row);
    row.className="row";

    const col1=document.createElement("div");
    row.appendChild(col1);
    col1.className="col-4";
    col1.innerText=response[i].id;

    const col2=document.createElement("div");
    row.appendChild(col2);
    col2.className="col-6";
    col2.innerText=response[i].title;

    const col3=document.createElement("div");
    row.appendChild(col3);
    col3.className="col-2";
    
    if(response[i].completed){
        col3.innerHTML=`<div class="form-check">
                              <input type=checkbox class="form-check-input" checked disabled>
                        </div>`  
      }
    else{
        col3.innerHTML=`<div class="form-check">
                              <input type=checkbox class="form-check-input" onclick="checkTaskComplete(this)">
                        </div>`
        }     
  } 
}

function checkTaskComplete(status){
if(status.checked){
  cnt++;
}
else{
    cnt--;
}
var promise=new Promise(function(resolve,reject){
    if(cnt==5){
        resolve("Congrats. 5 Tasks have been Successfully Completed");
    }
    else{
        reject();
    }
  }); 

promise
.then(function(s){
  alert(s);
})
.catch(function(e){
  console.log(e);
})

}
   
 logout=()=>window.location.href="index.html";



