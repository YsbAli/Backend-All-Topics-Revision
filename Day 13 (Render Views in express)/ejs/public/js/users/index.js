function onClickHandler(user) {
  user = JSON.parse(user);
  alert(`${user.first_name} ${user.last_name}`);
}

function onSubmitHandler(e) {
  console.log("e", e);
  e.preventDefault();
}

fetch("http://localhost:5000/users?contentType=json")
  .then((response) => response.json())
  .then((data) => console.log(data));
