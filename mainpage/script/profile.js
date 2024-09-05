const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("mouseover", () => {
  document.getElementById("animIcon").src = "../mainpage/src/edit.gif";
});
editBtn.addEventListener("mouseout", () => {
  document.getElementById("animIcon").src = "../mainpage/src/edit-static.png";
});

function edit() {
  document.getElementById("name").disabled = false;
  document.getElementById("Address").disabled = false;
  document.getElementById("options").disabled = false;
  document.getElementById("saveBtn").disabled = false;
}


async function saveBtn() {
    const NameField = document.getElementById("name").value;
/* const EmailField = document.getElementById("email").value; */
const AddressField = document.getElementById("Address").value;
const GenderField = document.getElementById("options").value;
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = data.login;
  }

  const data = {
    name: NameField,
    address: AddressField,
    gender: GenderField,
  };

  try {
    const response = await fetch("/crud/updateData", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body:JSON.stringify(data),
    });
   
    if (response.status === 200) {
      alert("value Update");
    } else {
      window.location.href="/"
    }
  } catch (error) {
    console.log(error);
  }
}

async function userCheck() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/";
  }

  try {
    const response = await fetch("/crud/getData", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      document.getElementById("name").value=data.Name;
                        document.getElementById("email").value = data.Email;
                        document.getElementById("Address").value = data.Address;
                        document.getElementById('options').value = data.Gender;
    } else {
       
      window.location.href = "/";
    }
  } catch (error) {
    console.log(error);
  }
}

window.onload = userCheck();
