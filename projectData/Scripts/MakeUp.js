
//********FUNCTION TO FETCH JSON DATA ****** */
async function getTechProducts() {

    let response = await fetch("../jsondata/Shop All Makeup _ bluemercury.json");
    SkinCare = await response.json();
    //console.log(SkinCare[0]);
    SkinCare.forEach(function(ele){
      ele.qty = 1;
      // console.log(ele);
    })
    //console.log(SkinCare);
    displaySkinCare(SkinCare);
  

  //********************** DISPLAY PRODUCT FUNCTION*********************** */
 
  function displaySkinCare(data){
      data.map(function(ele){
                   
          let div = document.createElement('div');
          div.setAttribute('id',"card");

          let wishList = document.createElement('div');
          wishList.setAttribute('id',"wishlist");

          let button = document.createElement('div');
          button.innerHTML=`<i class="fa-solid fa-2x fa-heart onclick='style.backgroundColor="#12284c"' ></i>`;
          button.style.cursor='pointer';
          button.addEventListener('click',function(){
              // document.getElementsByClassName('fa-solid fa-2x fa-heart').style.backgroundColor="#12284c"
              addToWishList(ele);
          });

          let box = document.createElement('div');
          let edition = document.createElement('p');
          edition.innerText = ele.edition;

          let category = document.createElement('p');
          category.innerText = ele.category;

          let div1 = document.createElement('div');
          div1.setAttribute('id',"card");

          let quickView = document.createElement('button');
          quickView.innerText ='QUICK VIEW';
          quickView.setAttribute('id','quick-view');

          // quickView.style.display='none';
          let img = document.createElement('img');
          img.setAttribute('src',ele.Image_URL);
          img.style.cursor='pointer';
          img.addEventListener('mouseover',function(){
              document.getElementById('quick-view').style.curser='pointer';
              document.getElementById('quick-view').style.display = 'block';
              document.getElementById('quick-view').addEventListener('click',function(){
                  document.getElementById('quick-view').style.display = 'none';
                  displayAddToCartPage(ele);
              })
          })
              //console.log(ele)
              // let div2 = document.createElement('div');
              // let icon = document.createElement('p');
              // icon.innerHTML = `<span id="span"  onclick="document.querySelector('#add-to-cart-modal').style.display='none';"> <i class="fa fa-close" style="font-size:24px"></i></span>`;
          
          let brand = document.createElement('p');
          brand.innerText = ele.brand;

          let name = document.createElement('p');
          name.innerText= ele.name;
          name.style.cursor='pointer';
          name.addEventListener('click',function(){
              displayAddToCartPage(ele);
              // addToWishList(ele);
          });

         
          // let category = document.createElement('h2');
          // category.innerText= ele.category;

          // let edition = document.createElement('h2');
          // edition.innerText= ele.edition;

          let price = document.createElement('p');
          price.innerText= '$ '+ele.price;

          // let desc = document.createElement('h2');
          // desc.innerText= ele.desc;

         // div1.append(img);
         box.append(edition,category);
         wishList.append(button,box);
          div.append(wishList,quickView,img,brand,name,price);

          document.querySelector('#container').append(div);
          //console.log(div);
      })
  }
  function QuickView(ele){
     
  }

 
  //console.log(document.getElementById("card"));
  
  //**************SORTING FUNCTION ************************* */

  let sorting = document.querySelector('#Select');
  sorting.addEventListener('change', sortByprice);
  //console.log(sorting);

  //*****************  CREATING DUPLICATE ARRAY TO MAINTAIN SEQUENCE OF ORIGINAL ARRAY  ************** */
  let arrSort = [];
  for(let i=0; i<SkinCare.length; i++){
      arrSort[i]= SkinCare[i];
      // console.log(SkinCare[0][0]);
  }
  // console.log(SkinCare);
  function sortByprice(){
     document.querySelector('#container').innerHTML = null;
     let selected = document.querySelector('#Select').value;
    
      if(selected == 'low-to-high'){
          arrSort.sort(function(a,b){
              return a.price - b.price;
          });
          displaySkinCare(arrSort);
      }
      else if(selected == 'high-to-low'){
          arrSort.sort(function(a,b){
              return b.price - a.price;
          });
          displaySkinCare(arrSort);
      }
      else {
          displaySkinCare(SkinCare);
      }  
          
  }

  /*************************addtoWishList******************* */
  let wishListArray = JSON.parse(localStorage.getItem("wish-list")) || [];
  function addToWishList(ele){
      //console.log(wishListArray.includes(ele));
      if(wishListArray.includes(ele)){
          alert('not added');        
      }
      else{
          alert('added');
          wishListArray.push(ele);
          localStorage.setItem("wish-list",JSON.stringify(wishListArray));
      }
      //console.log(wishListArray);
  }
  
// ********************************FUNCTION QUICKVIWE ********************
function quickView(){
  
}

function displayAddToCartPage(ele){
  // function closeModal(){
  //     document.querySelector('#add-to-cart-modal').style.display='none';
  
  // }
  //document.querySelector('#outer').innerHTML = null;
  document.getElementById('quick-view').style.display = 'none';
 let div =  document.createElement('div');
  div.setAttribute('id', 'product-desc')
 
  let div1 = document.createElement('div'); 
  let img = document.createElement('img');
  img.setAttribute('src',ele.Image_URL);

  let div2 = document.createElement('div');
  div2.setAttribute('id','checkoutBox');
  let icon = document.createElement('p');
  icon.innerHTML = `<span id="span"  onclick="document.querySelector('#add-to-cart-modal').style.display='none';"> <i class="fa fa-close" style="font-size:24px"></i></span>`;
  icon.style.cursor='pointer';
  // // span.innerHTML = ele.name;
 
          
  let brand = document.createElement('h4');
  brand.innerText = ele.brand;

  let name = document.createElement('p');
  name.innerText= ele.name;

  let box = document.createElement('div');
  box.style.display="flex";
  
  let edition = document.createElement('h5');
   edition.innerText = ele.edition;
   edition.style.marginRight="30px";

  let category = document.createElement('h5');
  category.innerText = ele.category;

  
  let priceBox = document.createElement('div');
  let price = document.createElement('p');
  price.innerText= '$ '+ele.price;

  let cartlistBox = document.createElement('div');
  cartlistBox.setAttribute('id','cartListBox');

  let quantityBox = document.createElement('div');
  quantityBox.setAttribute('id','quantityBox');

  let qty = document.createElement('button');
  qty.innerText = ele.qty;
  qty.setAttribute('id','qty');

  let dec = document.createElement('button');
  dec.innerText = ' - ';
  dec.style.cursor='pointer';
  dec.addEventListener('click', function(){
      let qty = document.getElementById('qty').innerText;
     if(Number(qty)>1){
      qty = Number(qty)-1;
     }
     ele.qty=qty;
       console.log(ele);
      document.getElementById('qty').innerText = qty;
  })

  let inc = document.createElement('button');
  inc.innerText = ' + ';
  inc.style.cursor='pointer';
  inc.addEventListener('click', function(){
      let qty = document.getElementById('qty').innerText;
      qty = Number(qty)+1;
     ele.qty=qty;
      // console.log(typeof(qty));
      document.getElementById('qty').innerText = qty;
  })


  

  let wishlistBox = document.createElement('div');
  wishlistBox.setAttribute('id','wishlistBox');

  let button = document.createElement('div');
  button.innerHTML=`<i class="fa-solid fa-2x fa-heart"></i>`;
  button.style.cursor='pointer';
  button.addEventListener('click',function(){
              addToWishList(ele);
  });

  let p = document.createElement('p');
  p.innerText = 'WISHLIST';


  let viewDetail = document.createElement('button');
  viewDetail.innerText = 'VIEW FULL DETAIL';
  // let span = document.createElement('span');

  // let anchor = document.createElement('a');
  // anchor.innerText = 'Learn More';
  // anchor.setAttribute('href',ele.link);

  // let more = document.createElement('span');
  // more.innerText=`4 interest-free payments of $81.25 with Klarna.`;
  
  // span.append(more,anchor);


  let description = document.createElement('p');
  description.innerText= ele.description;

  let AddToCartBtn = document.createElement('button');
  AddToCartBtn.setAttribute('id','addToCartBtn');
  AddToCartBtn.innerHTML = `<i class="fa-sharp fa-solid fa-cart-plus"></i> <span> ADD TO CART</span>`

  div1.append(img);
  box.append(edition,category);
  //priceBox.append(price,span);
  cartlistBox.append(quantityBox,wishlistBox)
  div2.append(icon,brand,price,name,box,description,cartlistBox,AddToCartBtn);

  quantityBox.append(dec,qty,inc);
  wishlistBox.append(button,p);

 
  div.append(div1,div2);
  document.querySelector('#add-to-cart-modal').append(div);
  document.getElementById('add-to-cart-modal').style.display='block';
}


}
//console.log(global[0].length);
getTechProducts();