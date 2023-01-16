var i=0;
function menu(){
    if(i==1)
    {
        document.getElementById("block_menu").style.width= "500px";
        document.getElementById("nth").style.width= "100%";
        i=0;
    }
    else{
        document.getElementById("block_menu").style.width= "0";
        document.getElementById("nth").style.width= "0";
        i=1;
    }
}


var id=1;
function buy(){
    var name = document.getElementById("name").value;
    var qty = document.getElementById("qty").value;
    var tbody = document.getElementById("tbody");
    var total = parseInt(qty) * 4000;
    var count = parseInt(document.getElementById("num").innerHTML);
    document.getElementById("num").innerHTML = count + 1;
    tbody.innerHTML += "<tr><td>"+id+"</td><td>"+name+"</td><td>"+qty+"</td><td>"+total+"</td></tr>"
    id++   
    name = document.getElementById("name").value="";
    qty = document.getElementById("qty").value="";
}

function nth(){
    document.getElementById("block_menu").style.width= "0";
    document.getElementById("nth").style.width= "0";
}


