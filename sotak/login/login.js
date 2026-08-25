const form = document.querySelector("form");

const users = [
  {
    email: "user@gmail.com",
    password: "1234",
    type: "user",
  },

  {
    email: "authority@gmail.com",
    password: "1234",
    type: "authority",
  },
];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const account = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (account) {
    if (account.type === "user") {
      window.location.href = "../user/home.html";
    } else if (account.type === "authority") {
      window.location.href = "../admin/admin-home.html";
    }
  } else {
    alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
  }
});
