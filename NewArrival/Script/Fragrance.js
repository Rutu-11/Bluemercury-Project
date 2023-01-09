var pageCategory = [
  "Tools&Accessories",
  "Bath&Body",
  "Makeup",
  "Fragrance",
  "newArrival",
  "HairCare",
  "Skincare",
];
var All = JSON.parse(localStorage.getItem("mainProducts"));
var PageName = "Fragrance";

localStorage.setItem("mainProducts", JSON.stringify(All));

var PageProducts = All.filter((element) => {
  return element.pageCategory === "Fragrance";
});

displayProducts(PageProducts);

// Display function
function displayProducts(arr) {
  if (arr.length > 18) {
    arr = arr.slice(0, 18);
  }
  document.getElementById("container").innerHTML = "";
  arr.map((element, index) => {
    const container = document.getElementById("container");
    container.innerHTML += `
      <div class="product-container>
          <i class=""></i>     
          <p class="head">${element.merchbadge}<i class="fa-solid fa-2x fa-heart" id="heart${index}" onclick="wishlist(PageProducts[${index}], ${index})"></i></p>
          <p>${element.merchbadge1}</p>     
          <div class="quickview">
            <img src="${element.Image}" alt="${element.Title}" class="image" />
            <button id="quick${index}" class="quick" onclick="quickViewProduct(PageProducts[${index}], ${index})">QUICK VIEW</button>
          </div>
          <h3>${element.productcard__brand}</h3>
          <p>${element.Title}</p>
          <p>$${element.Price}</p>
      </div>
  
  `;
  });
}

// Quickview of products

function quickViewProduct(element, ind) {
  const box = document.querySelector(".ViewBox");
  box.classList.add("boxApply");
  box.innerHTML = `
    <div>
    <img src="${element.Image}">
      </div>
      <div>
          <h2>${element.productcard__brand}</h2>
          <p>${element.Title}</p>   
          <p>$${element.Price}</p>
          <div style="display:flex">${element.merchbadge} ${element.merchbadge1}</div>
          <p>${element.description}</p>
          <div style="display:flex; height: 35px">
                   <button onclick="decreaseQuantity(${ind})" class="quantityBtn">-</button>
                   <input type="tel" value="1" id="quantity${ind}" class="proQuantity"> 
                   <button onclick="increaseQuantity(${ind})" class="quantityBtn">+</button> 
                  <p class="heart"><i class="fa-solid fa-2x fa-heart" id="heart${ind}" onclick="wishlist(PageProducts[${ind}],${ind})"></i></p>
                  <p>WISHLIST</p>
          </div>
          <button id="cart${ind}" onclick="addToCart(PageProducts[${ind}], ${ind})"><i class="fa-solid fa-bag-shopping" ></i>ADD TO BAG</button>
       </div>
       <button onclick="cut()" id="x">X</button>
       <a href="${element.Title_URL}" class="details">VIEW FULL DETAILS</a>
    `;
}
// Increasing Quanttity
function increaseQuantity(ind) {
  let qty = Number(document.getElementById("quantity" + ind).value);
  qty++;
  document.getElementById("quantity" + ind).value = qty;
}

// Decreasing Quanttity
function decreaseQuantity(ind) {
  let qty = Number(document.getElementById("quantity" + ind).value);
  if (qty > 1) {
    qty--;
    document.getElementById("quantity" + ind).value = qty;
  }
}
// Function cut
function cut() {
  document.querySelector(".ViewBox").classList.remove("boxApply");
}
// Add To Cart
function addToCart(element, ind) {
  let cartItems = JSON.parse(localStorage.getItem("cart-items")) || [];
  let qtyOfItems = document.getElementById("quantity" + ind).value;
  element.qty = qtyOfItems;
  element.img = element.Image;
  element.name = element.productcard__brand;
  element.desc = element.Title;
  element.price = element.Price;
  // console.log(element);
  cartItems.push(element);
  document.getElementById("cart" + ind).innerText = "ADDED TO BAG";
}

//Addding to Whistlist
function wishlist(element, ind) {
  const newWhistlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (element.wishlist !== undefined) {
    const dia = document.querySelector(".d");
    dia.classList.add("applied");
    dia.innerHTML = `
      <div>
      <img src="${element.Image}">
      <p style="color:red">${element.Title} Already in Wishlist</p>
      <p>Price: $${element.Price}</p>
      <button onclick="ok()">Cancel</button>
      </div>
      `;
  } else {
    const dia = document.querySelector(".d");
    dia.classList.add("applied");

    dia.innerHTML = `
      <div class ="add">
      <img src="${element.Image}">
      <p style="color:green">${element.Title} Successfully added to Wishlist</p>
      <p>Price: $${element.Price}</p>
      <button onclick="ok()">Cancel</button>
      </div>
      `;
    element.wishlist = ind;
    newWhistlist.push(element);
  }
  document.getElementById("heart" + ind).style.color = "red";
  localStorage.setItem("wishlist", JSON.stringify(newWhistlist));
}
// Function OK
function ok() {
  let add = document.querySelector(".d");
  add.classList.remove("applied");
}

//Display Left Container
displayCategories(pageCategory, PageName);
function displayCategories(pageCategory, PageName) {
  document.getElementById("left-box").innerHTML = `
        <div id="category-box">
            <div>
              <h1>${PageName} CATEGORY</h1>
              <p>Select One to narrow results</p>
            </div>
              <p class="category-name"><a href="${pageCategory[0]}.html">${pageCategory[0]}</a></p>
              <p class="category-name"><a href="${pageCategory[1]}.html">${pageCategory[1]}</a></p>
              <p class="category-name"><a href="${pageCategory[2]}.html">${pageCategory[2]}</a></p>
              <p class="category-name"><a href="${pageCategory[3]}.html">${pageCategory[3]}</a></p>
              <p class="category-name"><a href="${pageCategory[4]}.html">${pageCategory[4]}</a></p>
              <p class="category-name"><a href="${pageCategory[5]}.html">${pageCategory[5]}</a></p>
              <p class="category-name"><a href="${pageCategory[6]}.html">${pageCategory[6]}</a></p>
  
        </div>
        <h1>FILTER ${PageName} BY</h1>
          <div class="slection">
            <select name="" id="type-filter" class="select">
            <option selected disable>Type</option>
              <option value="After Sun Care">After Sun Care</option>
              <option value="Body Wash">Body Wash</option>
              <option value="Brush Sets">Brush Sets</option>
              <option value="Conditioners">Conditioners</option>
              <option value="Curling Irons">Curling Irons</option>
              <option value="Diffusers">Diffusers</option>
              <option value="Exercise Bands">Exercise Bands</option>
              <option value="Eye Creams">Eye Creams</option>
              <option value="Eye Palette">Eye Palette</option>
              <option value="Face Mask">Face Mask</option>
              <option value="Face Wash">Face Wash</option>
              <option value="Hair Oil">Hair Oil</option>
              <option value="Hair Serums">Hair Serums</option>
              <option value="Lipstick">Lipstick</option>
              <option value="Shampoo">Shampoo</option>
            </select>
          </div>
          <div class="slection">
            <select name="" id="brand-filter" class="select">
            <option selected disable >Brand</option>
              <option value="Bumble And Bumble">Bumble And Bumble</option>
              <option value="M-61">M-61</option>
              <option value="Ourself">Ourself</option>
              <option value="Seen">Seen</option>
              <option value="SkinCeuticals">SkinCeuticals</option>
            </select>
          </div>
          <div class="slection">
            <select name="" id="concern-filter" class="select">
            <option selected disable >Concern</option>
              <option value="Acne And Blemishes">Acne And Blemishes</option>
              <option value="Black Heads And Visible Pores">Black Heads And Visible Pores</option>
              <option value="Dullness">Dullness</option>
              <option value="Fine Lines And Wrinkles">Fine Lines And Wrinkles</option>
              <option value="Loss Of Firmness">Loss Of Firmness</option>
              <option value="Rough/Bumpy Skin">Rough/Bumpy Skin</option>
              <option value="Sun Damage">Sun Damage</option>
            </select>
          </div>
          <div class="slection">
            <select name="" id="size-filter" class="select">
            <option selected disable>Size</option>
              <option value="Jumbo And Value Size">Jumbo And Value Size</option>
              <option value="Travel Size">Travel Size</option>
              <option value="Classic">Classic</option>
              <option value="Votive">Votive</option>
            </select>
          </div>
          <div class="slection">
            <select name="" id="ingredient-filter" class="select">
            <option selected disable >Ingredient Preference</option>
              <option value="Naturally Derived">Naturally Derived</option>
              <option value="Retinols">Retinols</option>
              <option value="Bakuchiol">Bakuchiol</option>
              <option value="Salicylic Acid">Salicylic Acid</option>
              <option value="Vitamin B5">Vitamin B5</option>
            </select>
          </div>
  
  `;
}
//thing to update -- whislist pop up and arr.slice insted of arr.splice
//First Filter
const filter = document.getElementById("filter");
filter.addEventListener("change", () => {
  let value = filter.value;
  let newProductArray = [];
  if (value === "Low to High" || value === "High to Low") {
    // sorting
    if (value === "Low to High") {
      PageProducts.sort((a, b) => {
        return a.Price - b.Price;
      });
    } else {
      PageProducts.sort((a, b) => {
        return b.Price - a.Price;
      });
    }
    displayProducts(PageProducts);
  } else {
    //Filtering
    if (value === "Featured") {
      PageProducts = All.filter((element) => {
        return element.merchbadge1 === "LIMITED EDITION";
      });
    } else if (value === "New Arrivals") {
      PageProducts = All.filter((element) => {
        return element.merchbadge === "NEW";
      });
    } else if (value === "Best Sellers") {
      PageProducts = All.filter((element) => {
        return element.merchbadge1 === "CONSCIOUS BEAUTY";
      });
    }
    displayProducts(PageProducts);
  }
});

//Left Side Filter

let typefilter = document.getElementById("type-filter");
typefilter.addEventListener("change", () => {
  let value = typefilter.value;
  PageProducts = All.filter((element) => {
    return element.type === value;
  });
  displayProducts(PageProducts);
});

let brandfilter = document.getElementById("brand-filter");
brandfilter.addEventListener("change", () => {
  let value = brandfilter.value;
  PageProducts = All.filter((element) => {
    return element.productcard__brand === value;
  });
  displayProducts(PageProducts);
});

let concernfilter = document.getElementById("concern-filter");
concernfilter.addEventListener("change", () => {
  let value = concernfilter.value;
  PageProducts = All.filter((element) => {
    return element.concern === value;
  });
  displayProducts(PageProducts);
});

let sizefilter = document.getElementById("size-filter");
sizefilter.addEventListener("change", () => {
  let value = sizefilter.value;
  PageProducts = All.filter((element) => {
    return element.size === value;
  });
  displayProducts(PageProducts);
});

let ingredientfilter = document.getElementById("ingredient-filter");
ingredientfilter.addEventListener("change", () => {
  let value = ingredientfilter.value;
  PageProducts = All.filter((element) => {
    return element.ingredient === value;
  });
  displayProducts(PageProducts);
});
