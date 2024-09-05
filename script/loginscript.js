var move = document.getElementById("move");
var register = document.getElementById("register");
var sign = document.getElementById("sign");
var logincontent = document.getElementById("logincontent");
var registercontent = document.getElementById("registercontent");
let bol = false;

function divmove(elementL, elementR) {
  logincontent.style.transition = "left 0.5s ease";
  logincontent.style.left = elementL + "%";
  registercontent.style.transition = "0.5s ease";
  registercontent.style.left = elementR + "%";
}
register.addEventListener("click", function () {
  move.style.left = "49%";
  bol = true;
  divmove(-99, 50);
  document.getElementById("backowl").style.background =
    "url(../index src/singinowl2.png) center  no-repeat";
  document.getElementById("backowl").style.backgroundSize = "cover";
});
sign.addEventListener("click", function () {
  move.style.left = "1%";
  bol = false;
  divmove(50, 200);
  document.getElementById("backowl").style.background =
    "url(../index src/singupowl.png) center  no-repeat";
  document.getElementById("backowl").style.backgroundSize = "cover";
});
function left(after) {
  move.style.transition = "left 0.2s ease";
  move.style.left = after + "%";
}
function leftout(before) {
  move.style.transition = "left 0.2s ease";
  move.style.left = before + "%";
}

register.addEventListener("mouseenter", function () {
  left(49);
});
register.addEventListener("mouseleave", function () {
  if (bol == false) {
    leftout(1);
  }
});
sign.addEventListener("mouseenter", function () {
  left(1);
});
sign.addEventListener("mouseleave", function () {
  if (bol == true) {
    leftout(49);
  }
});

/* owl move ment */
document
  .getElementById("loginpassword")
  .addEventListener("mouseenter", function () {
    document.getElementById("owl1").style.display = "none";
    document.getElementById("owl2").style.display = "block";
    look();
  });
document
  .getElementById("loginpassword")
  .addEventListener("mouseout", function () {
    document.getElementById("owl1").style.display = "block";
    document.getElementById("owl2").style.display = "none";
  });

function look() {
  document.getElementById("bol1").style.tranition = "top 4s ease-in-out";
  document.getElementById("bol2").style.tranition = "top 4s ease-in-out";
  document.getElementById("bol2").style.top = "120px";
  document.getElementById("bol1").style.top = "122px";
  document.getElementById("bol1").style.animation = "non";
  document.getElementById("bol2").style.animation = "non";
}
function lookout() {
  document.getElementById("bol2").style.top = "115px";
  document.getElementById("bol1").style.top = "114px";
  /*     document.getElementById("bol1").style.animation="eye 8s ease-out infinite";
    document.getElementById("bol2").style.animation="eye2 8s ease-out infinite"; */
}
/* document.getElementById("mlogin").addEventListener('mouseenter',function(){

   look();
}) */

var currentXPosition = 0;
var currentYPosition = 0;
const mouseMove = (event) => {
  currentXPosition = event.clientX / (window.innerWidth / 3);
  currentYPosition = event.clientY / (window.innerHeight / 9);
  if (true) {
    document.getElementById("bol1").style.left = currentXPosition + 27.8 + "%";
    document.getElementById("bol2").style.left = currentXPosition + 56.8 + "%";
  }
  if (currentYPosition < 180) {
    document.getElementById("bol1").style.top = currentYPosition + 40 + "px";
    document.getElementById("bol2").style.top = currentYPosition + 40 + "px";
  }

  /*  console.log(currentXPosition,currentYPosition) */
};
window.addEventListener("mousemove", mouseMove);

function checkPasswordMatch() {
  var password = document.getElementById("cpassword").value;
  var confirmPassword = document.getElementById("confirmpassword").value;
  if (password.length < 6) {
    document.getElementById("inpbtn").disabled = true;
  } else {
    if (password !== confirmPassword) {
      document.getElementById("inpbtn").disabled = true;
    } else {
      document.getElementById("inpbtn").disabled = false;
    }
  }
}

document
  .getElementById("cpassword")
  .addEventListener("blur", checkPasswordMatch);
document
  .getElementById("confirmpassword")
  .addEventListener("blur", checkPasswordMatch);

/* fetch('http://localhost:1617/register')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
        // Use the data as needed
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
 */

/*  function finalregister() {
        
        var userId = document.getElementById("userId").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("cpassword").value;
        var confirmPassword = document.getElementById("confirmpassword").value;

if (password !== confirmPassword) {
    alert("Password and confirm password do not match!");
    return;
}
       
        localStorage.setItem("email", email);
    localStorage.setItem("password", password);



        console.log("User ID:", userId);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
      
    }
 */
/* var loginflag=false;
    document.getElementById("inpbtn").addEventListener("click", function() {
        var storedEmail = localStorage.getItem("email");
        var storedPassword = localStorage.getItem("password");
        
        var username = document.getElementById("loginusername").value;
        var password = document.getElementById("loginpassword").value;
        
        if (username === storedEmail && password === storedPassword) {
            alert("Login successful!");
            loginflag=true;
            localStorage.setItem("loginflag", loginflag);
            
        } else {
            alert("Incorrect username or password!");
        }
    }); */

 document.getElementById('registrationForm').addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const name = document.getElementById('userId').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('cpassword').value;
    
        try {
            const response = await fetch('/routes/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
    
            if (response.status===201) {
                const data = await response.json();
                alert(data.message); // Show the success message
            } else {
                const errorData = await response.json();
                alert(errorData.message); // Show the error message
            }
        } catch (error) {
            console.error('Fetch Error:', error);
        }
    });

document.getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("loginusername").value;
    const password = document.getElementById("loginpassword").value;

    try {
      const response = await fetch("/routes/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.status === 200) {
        // Store the token
        localStorage.setItem("token", data.token);
        accessMainPage();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  });










// Access Main Page Function








const accessMainPage = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  } else {
    try {
      const response = await fetch("/routes/mainpage", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 200) {
        const data = await response.text();
        window.location.href="/mainpage/SUIT.html"
      } else if (response.status === 401 || response.status === 400) {
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
        }
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
};

/* onload functions */
document.addEventListener("DOMContentLoaded", () => {
  accessMainPage();
});

