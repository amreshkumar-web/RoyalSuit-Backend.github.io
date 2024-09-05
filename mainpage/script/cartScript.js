/* window.load=document.getElementById("bg-video").play(); */
window.load=getCartProduct();

let Pid=""
let Pname="";
let count="";
let Price="";
let Pimage="";
let Pcolour="";





        function createProduct(Pname,count,Price,Pimage,Pid,Pcolour) {
          
            // Define the HTML structure using a template literal
            const productHTML = `
                 <div class="added-product">

                            <div style="background-image: url('../mainpage/src/${Pimage}');" id="pro-image" class="pro-image"></div>
                            <div class="pro-info">
                                <h2 id="name">${Pname}</h2>
                                <div class="color">
                                    <span>Colour</span>
                                    <div id="colorP" style="background-color:${Pcolour};" class="colorP"></div>
                                </div>
                                <div class="quantity">
                                    <div class="less">-</div>
                                    <div class="value"><span
                                            id="quantity">${count}</span></div>
                                    <div class="increase">+</div>
                                </div>
                            </div>
                            <div class="pro-price"><span>₹ ${Price}</span></div>
                            <div onclick="removeCart(this)" data-pid="${Pid}_${count}" class="delete">X</div>

                        </div>
                    </div>
            `;

            // Insert the HTML into the container
          /*   document.getElementById("pro-image").style.background=`url(../src/${Pimage})` */
            document.getElementById('all-product').innerHTML += productHTML;
            
        }
/* createProduct();
createProduct(); */


async function getCartProduct(){
    const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }

  try {
    const response = await fetch("/addToCart/getCartP",{
        method: "GET",
        headers:{
            Authorization:token
        }
    });
    if(response.status===200){
        const data = await response.json();
      /*   console.log(data) */
         for(let i=0;i<data.length;i++){
           Pid=data[i].dataP.productID
            Pname = data[i].dataP.productName;
            count = data[i].count;
            Price = data[i].dataP.productPrice;
            Pimage = data[i].dataP.productImageName;
            Pcolour = data[i].dataP.productColour;
            createProduct(Pname,count,Price,Pimage,Pid,Pcolour);
           /*  console.log(Pname,count,Price,Pimage); */
         }
    }
   /*  else{
       alert("No data found")
    } */
  } catch (error) {
    alert(error);
  }
}


async function removeCart(element){
const token = localStorage.getItem("token");
if(!token){
  window.location.href = "/";
}

try {
  const response = await fetch(`/addToCart/cartDelete/${element.getAttribute("data-pid")}`,{
    method:"PUT",
    headers:{Authorization:token}
  })

  if(response.status===200){
    alert("Product removed from cart")
    window.location.href="../mainpage/cart.html"
  }
  else{
   alert("Something went wrong")
  }
} catch (error) {
  Console.log(error);
}
}