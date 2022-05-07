var checkoutArr=JSON.parse(localStorage.getItem("CartItems"));
console.log(checkoutArr);

checkoutArr.map(function(data) {
    var tr = document.createElement("tr");
    // table data row created

    // product description
    var td1 = document.createElement("td");

    // name of the product
    var name = document.createElement("h4");
    name.style.color = "#292d35"
    td1.textContent = data.name;


    var qty = document.createElement("h5");
    qty.style.color = "rgb(91, 91, 91)";
    qty.textContent = "Quantity : 500gm";

    td1.append(name, qty);

    // price of the product
    var td2 = document.createElement("td");
    td2.textContent = "₹" + data.price + ".00";
    td2.setAttribute("class", "price")

    tr.append(td1, td2);

    //append
    document.querySelector("tbody").append(tr);
    });

    var subtotal = checkoutArr.reduce(function(acc, cv) {
      return acc + Number(cv.price);
    },0);

    localStorage.setItem("total", total);

    document.querySelector("#subtotal").textContent = `₹${subtotal}.00`;

    document.querySelector("#discount").textContent = `₹${Math.floor(subtotal/3.3)}.00`;

    if(subtotal > 1) {
        document.querySelector("#shipping").textContent = ` Flat rate : ₹${50}.00`;
    }

    document.querySelector("#total").textContent = `₹${(subtotal - Math.floor(subtotal/3.3)) + 50}.00`;


    document.querySelector("#sbmt").addEventListener("click", formSubmit);

    function formSubmit(event) {
        window.location.href="placeorder.html";
    }

    // document.getElementById("return").addEventListener("click", emptyCart);

    function emptyCart() {
        window.location.href = "../index.html";
        localStorage.removeItem("CartItems");
    }