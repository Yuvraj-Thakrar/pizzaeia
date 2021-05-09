menu_list=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Panner Tikka Pizza","Veg Supreme Pizza"];

function add_item(){
    var htmlData="";
    var item=document.getElementById("add_item").value;
    menu_list.push(item);
    console.log(menu_list);
    menu_list.sort();
console.log(menu_list);

htmlData="<section class='cards'>"
for ( i =0;i<menu_list.length;i++) {

htmlData=htmlData+'<div class="card">'+'<img src="menu.png"/>'+menu_list[i]+'</div>';
console.log(htmlData);

}
htmlData=htmlData+"</section>"

document.getElementById("pizza").innerHTML=htmlData;
}   
