
const container = document.createElement("div");
const demo = document.getElementById("demo");
demo.appendChild(container);
container.className="container";
container.style.backgroundColor="rgb(111, 224, 66)";
container.style.borderRadius="8px";
container.style.opacity="0.7";

const row = document.createElement("div");
container.appendChild(row);
row.className="row";

const col1=document.createElement("div");
row.appendChild(col1);
col1.className="col-4";

const col2=document.createElement("div");
row.appendChild(col2);
col1.className="col-7";

const col3=document.createElement("div");
row.appendChild(col3);
col1.className="col";

const checkdiv=document.createElement("div");
col3.appendChild(checkdiv);
checkdiv.className="form-check";

const input=document.createElement("input");
checkdiv.appendChild(input);
input.type="checkbox";
input.className="form-check-input";






