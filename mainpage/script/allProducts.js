window.load=getAllProducts();

function profile(){
    window.location.href="./Profile.html"
    }
    function cart(){
      window.location.href="./cart.html"
        }


        let sideCount=0
        function sidebar(){
          if(sideCount%2===0){
            document.getElementById("sidemenu").style.left = "-1rem";    
            document.querySelector("#sidemenu-btn svg").style.transform = "rotateY(180deg)";
          }
          else{
            document.getElementById("sidemenu").style.left = "-10rem";
            document.querySelector("#sidemenu-btn svg").style.transform = "rotateY(0deg)";
          }

          sideCount++;
        }


        let ProductImage = "";
        let ProductName = "";
        let ProductRating = "";
        let ProductPrice = "";
        let ProductMrp = "";
        let ProductId = "";
        let ProductType = "";
        let ProductColor=""




       function createElement(ProductImage,ProductName,ProductRating,ProductPrice,ProductMrp,ProductId,ProductType){
        
        const productHtml = `
        <div class="ap-card">
    <div class="ap-content">
        <div class="ap-image">
            <img src="../mainpage/src/${ProductImage}" alt="Tshirt" srcset="">
        </div>


        <div class="ap-values">
      <h1>${ProductName}</h1>
      <div class="Stars" style="--rating: ${ProductRating};" aria-label="Rating of this product is 2.3 out of 5."></div>

      <div class="ap-price-list">
        <p>Rs ${ProductPrice}</p> <p>MRP <s> ${ProductMrp}</s></p>
      </div>

      <div class="btns">
        <div class="ap-buy" data-pid=${ProductId}><p>Buy Now</p></div>
        <div onclick="globalAddToCart(this)" class="ap-buy" data-pid=${ProductId} ><p>Add to Cart</p></div>
      </div>
        </div>
    </div>
</div>

        `

        document.getElementById(`${ProductType}`).innerHTML += productHtml;
       }
    





       async function getAllProducts(){
        let response = await fetch("/addToCart/allProduct",{
          method:"GET"
        })
       if(response.status===200){
        let data2 = await response.json();
        for(let i=0;i<data2.data.length;i++){
           ProductId = data2.data[i].productID;
           ProductName = data2.data[i].productName;
           ProductImage = data2.data[i].productImageName;
           ProductMrp = data2.data[i].productMrp;
           ProductRating = data2.data[i].productRating;
           ProductType = data2.data[i].productType;
           ProductColor=data2.data[i].productColour;
           ProductPrice=data2.data[i].productPrice;
          
           createElement(ProductImage,ProductName,ProductRating,ProductPrice,ProductMrp,ProductId,ProductType);

        }
    
       }
       

       } 


function cancelBuy(){
  document.getElementById("buy-form").style.display="none"
}       
 




      

        