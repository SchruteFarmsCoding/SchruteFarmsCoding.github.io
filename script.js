function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin") {
      window.location.href = "success.html";
    } else {
      window.location.href = "failed.html";
    }
  }

function checkEnter(event) {
    if (event.key === "Enter") {
      login();
    }
  }
  
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username === "admin" && password === "admin") {
      window.location.href = "success.html";
    } else {
      window.location.href = "failed.html";
    }
  }
  