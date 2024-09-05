

async function globalAddToCart(element){
    const token = localStorage.getItem("token");
    if(!token){
        return window.location.href="/";
    }
    let response = await fetch(`/addToCart/cartAdd/${element.getAttribute("data-pid")}`,{
        method: "PUT",
        headers:{
            Authorization:token
        }
    }) 

    if(response.status===200){
        let data = await response.json();
        console.log(data);
        msgBox();
    }
    else{
        alert("Something went wrong");
    }
}



toast = document.querySelector(".toast")
closeIcon = document.querySelector(".close"),
progress = document.querySelector(".progress");

let timer1, timer2;

function msgBox(){
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
      toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
};

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");
  
  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});