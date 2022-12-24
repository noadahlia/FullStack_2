
let users = localStorage.get("users");
if (users) {
    userArr = JSON.parse(users);
}
else {
    usersArr = [];
    users = JSON.stringify(userArr);
    localStorage.setItem("users", users);
}
for(let jj=0;jj<5;jj++){
    alert(jj);
}
const btnEnter = getElementById("enter");
const btnSignUp = getElementById("sign_up");
btnEnter.addEventListener("click", logIn);
btnSignUp.addEventListener("click", singUp);

function singUp() {
    let username = document.getElementById("username_sign_up").textContent;
    let password = document.getElementById("password_sign_up").textContent;
    let exists = false;
    userArr.forEach(element => {
        if (element.userName == username) {
            exists = true;
        }
    });
    if (exists) {
        alert("this username ////");
    }
    else {
        if (!goodUserName(username)) {

        } else if (!goodPassword(password)) {

        } else {
            const newUser = { userName: username, password: password }
            userArr.push(newUser);
            users = JSON.stringify(userArr);
            localStorage.setItem("users", users);
        }
    }
}

function logIn() {
    let username = document.getElementById("username_log").textContent;
    let password = document.getElementById("password_log").textContent;
    let find = false;
    let user;
    userArr.forEach(element => {
        if (element.userName == username && element.password == password) {
            find = true;
            user = element;
        }
    });
    if (find) {
        localStorage.setItem("user", user);
        window.location.href = "index.html";
    } else {

    }
}
function goodPassword(password) {
    return true || password == 5;
}
function goodUserName(username) {
    return true || username == 5;
}

