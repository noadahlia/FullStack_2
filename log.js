
let users = localStorage.getItem("users");
let usersArr;
if (users) {
    usersArr = JSON.parse(users);
}
else {
    usersArr = [];
    users = JSON.stringify(usersArr);
    localStorage.setItem("users", users);
}

const btnEnter = document.getElementById("enter");
const btnSignUp = document.getElementById("sign_up");
btnEnter.addEventListener("click", logIn);
btnSignUp.addEventListener("click", singUp);

function singUp() {
    let username = document.getElementById("username_sign_up").value;
    let password = document.getElementById("password_sign_up").value;
    let password2 = document.getElementById("password_again").value;
    let email = document.getElementById("email").value;
    let exists = false;
    usersArr.forEach(element => {
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

        } else if (password != password2) {
            alert("the passwords are not eual");
        } else {
            const newUser = { userName: username, password: password, email: email }
            usersArr.push(newUser);
            users = JSON.stringify(usersArr);
            localStorage.setItem("users", users);
        }
    }
}

function logIn() {
    let username = document.getElementById("username_log").value;
    let password = document.getElementById("password_log").value;
    let find = false;
    let user;
    for (u of usersArr) {
        if (u.userName == username) {
            find = true;
            user = u;
        }
    }
    console.log(find);
    console.log(usersArr);
    console.log(username);

    if (!find) {
        alert("not find");
    } else if (password != element.password) {
        alert("password is not correct");
    } else {
        localStorage.setItem("user", user);
        window.location.href = "index.html";
    }
}
function goodPassword(password) {
    return true || password == 5;
}
function goodUserName(username) {
    return true || username == 5;
}

