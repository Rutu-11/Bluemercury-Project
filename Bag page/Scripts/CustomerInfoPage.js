document
      .querySelector("form")
      .addEventListener("submit", storecustomerinfo);
    var customerdata = JSON.parse(localStorage.getItem("customer-data")) || [];
    var totalprice = JSON.parse(localStorage.getItem("total-price"));
    document.querySelector("#subtot").textContent = "$" + totalprice;
    document.querySelector("#totprice").textContent = "USD $" + totalprice;

    function storecustomerinfo() {
      event.preventDefault();
      obj = {
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        address1: document.getElementById("address1").value,
        address2: document.getElementById("address2").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        pincode: document.getElementById("pincode").value,
      };
      customerdata.push(obj);
      localStorage.setItem("customer-data", JSON.stringify(customerdata));
      window.location.href = "./shippingmethod.html";
    }
    var data = JSON.parse(localStorage.getItem("cart-items")) || [];
    displaycart(data);
    function displaycart(arr) {
      document.querySelector("tbody").textContent = "";
      arr.map(function (elem, ind) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var div = document.createElement("div");
        div.setAttribute("id", "td1");
        var img = document.createElement("img");
        img.setAttribute("src", elem.img);
        img.setAttribute("id", "cartimg");
        var div2 = document.createElement("div");
        div2.setAttribute("id", "carttext");
        var name = document.createElement("p");
        name.textContent = elem.name;
        var desc = document.createElement("p");
        desc.textContent = elem.desc;
        div2.append(name, desc);
        div.append(img, div2);
        td1.append(div);
        var td2 = document.createElement("td");
        var prodprice = Number(elem.price) * Number(elem.qty);
        td2.innerText = "$" + prodprice;
        tr.append(td1, td2);
        document.querySelector("tbody").append(tr);
      });
    }
    document.querySelector("#promobutton").addEventListener("click", promofunc);
    function promofunc() {
      event.preventDefault();
      var promo = document.querySelector("#promocode");
      if (promo.value != "") {
        promo.value = "";
      }
      if (promo.value == "blue20") {
        alert("20% off on your bag");
        totalprice = (totalprice - totalprice * 0.2).toFixed(0);
        document.querySelector("#subtot").textContent = "$" + totalprice;
        document.querySelector("#totprice").textContent = "USD $" + totalprice;
      } else {
        alert("Invalid Promo Code");
      }
    }