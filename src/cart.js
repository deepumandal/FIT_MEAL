let cartArr=JSON.parse(localStorage.getItem("CartItems"));
console.log(cartArr)

 let promo=document.getElementById("mytext");
   function submit(){
       if(promo.value==="FITMEALS30"||"zubair30"){
           let discount= (total/100)*70
   
           document.querySelector("#total").innerText=` ₹ ${Math.floor(discount)}`
       }
       
       else{
           alert("Invalid Promo")
       }
   }
 cartArr.map(function(elem){
  let rows=document.createElement("tr")
  let data1=document.createElement("td");
  let buttn=document.createElement("button");
  buttn.innerText="X"
  buttn.style.color="red";
  buttn.style.outline="none"
  buttn.id="remove"
  buttn.addEventListener("click", function(){
      removeitem(elem.index)
     
  })
  data1.style.color="red"
  data1.append(buttn)
  let data2=document.createElement("td");
  let img=document.createElement("img");
  img.src=elem.imgurl
  img.id="img"
  data2.append(img)
  data3=document.createElement("td");
  data3.innerText=`${elem.product_name} 
  Quantity:
  500 g`;

  
  data4=document.createElement("td");
  data4.style.color="green"
  data4.innerText=`₹${elem.price }.00`
  
  data5=document.createElement("td");
  let inp=document.createElement("input");
  inp.id="input";
  inp.type="number";
 
  data5.append(inp);
  data6=document.createElement("td");
  data6.style.color="green"
  data6.innerText=`₹${elem.price }.00`
  rows.append(data1,data2,data3,data4,data5,data6)
  document.querySelector("tbody").append(rows);
 
 });



 function removeitem(elem,index){
  
  cartArr.splice(index,1)
  localStorage.setItem("CartItems",JSON.stringify (cartArr))
  window.location.reload();

 }

 cartArr.forEach(function(elem){

  let rows2=document.createElement("tr")
  let td1=document.createElement("td");

  td1.innerText="Subtotal";
  td1.id="subtotal";
  let td2=document.createElement("td");
  td2.innerText=`₹${elem.price }`
  rows2.append(td1,td2);
  let row3=document.createElement("tr");
  row3.id="p"
  let td3=document.createElement("td");
  td3.innerText="Shipping";

  let td4=document.createElement("td");
  td4.id="td4"
  let p= document.createElement("p");
  
  p.innerText=`Flat rate: ₹50.00 
  Shipping to
  Telangana`
  td4.append(p)
  row3.append(td3,td4);
  let row=document.createElement("tr");
  row.innerText="."
   let tda=document.createElement("td");
   tda.id="tdc"
   let h6=document.createElement("p");
   h6.innerText="CHANGE ADDRESS"
   
   tda.append(h6)
   row.append(tda)

  let row4=document.createElement("tr");
  let td5=document.createElement("td");
  
  td5.innerText="Total";
  
  let td6=document.createElement("td");
  td6.id="total"
  td6.innerText=`₹${elem.price+50 }.00`
  row4.append(td5,td6);

  document.getElementById("tbl").innerHTML=null;
  
  document.getElementById("tbl").append(rows2,row3,row,row4);



});
var total=cartArr.reduce(function(ac,cv){
    console.log(typeof(cv.price))
    console.log(cv.price)
      return ac + Number(cv.price);
      
  },0)
 
//   console.log(cv.price)
  var subtotal = cartArr.reduce(function(acc, cv) {
      return acc + Number(cv.price);
    },0);
    localStorage.setItem("total", total);


    document.querySelector("#total")
    .textContent = `₹${total+50}.00`;
