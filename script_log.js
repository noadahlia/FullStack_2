
let users = localStorage.get("users");
if (users) {
    userArr = JSON.parse(users);
}
else {
    usersArr = [];
    users = JSON.stringify(userArr);
    localStorage.setItem("users", users);
}

function singUp() {
    let username;
    let password;
    let exists = false;
    userArr.forEach(element => {
        if (element.userName == username) {
            exists = true;
        }
    });
    if (exists) {

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
    let username;
    let password;
    let find = false;
    let user;
    userArr.forEach(element => {
        if (element.userName == username && element.password == password) {
            find = true;
            user = element;
        }
    });
    if (find) {
        localStorage.setItem("user",user);
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