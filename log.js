
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

// let win =window;
// function move(){
//     console.log(window);
//     //win.location.href = "index.html";
// }



// const helpBtn = document.getElementById("help_btn");

function signUp() {
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
        return false;
    }
    else {
        if (!goodUserName(username)) {

        } else if (!goodPassword(password)) {

        } else if (password != password2) {
            alert("the passwords are not eual");
            return false;
        } else {
            const newUser = { userName: username, password: password, email: email }
            usersArr.push(newUser);
            users = JSON.stringify(usersArr);
            localStorage.setItem("users", users);
            localStorage.setItem("user", newUser);
            //window.location.href = "index.html";
            //helpBtn.onclick();
            //move();
            //window.location.href = "index.html";
            return true;
        }
    }
    return false;
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
            break;
        }
    }
    if (!find) {
        alert("not find");
        return false;
    } else if (password != user.password) {
        alert("password is not correct");
        return false;
    } else {
        //localStorage.setItem("user", user);
        //window.location.href = "index.html";
        //helpBtn.onclick();
        //console.log(document.getElementById("help_btn2").click());
        //document.getElementById("help_btn2").click();
        //move();
        alert("i am here");
        console.log("me");
        //helpBtn.click();
        return true;
    }
}
function goodPassword(password) {
    return true || password == 5;
}
function goodUserName(username) {
    return true || username == 5;
}

