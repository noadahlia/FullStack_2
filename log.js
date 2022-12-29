
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

let tries = localStorage.getItem("tries");
let triesArr;
if (tries) {
    triesArr = JSON.parse(tries);
}
else {
    triesArr = [];
    tries = JSON.stringify(triesArr);
    localStorage.setItem("tries", tries);
}

const usernameSignUp = document.getElementById("username_sign_up");
usernameSignUp.addEventListener("input", function (e) {
    const p = document.getElementById("validation-username");
    if (!strongUserName(usernameSignUp.value)) {
        p.textContent = "Bad user name";
    }
    else if (existsUserName(usernameSignUp.value)) {
        p.textContent = "Exists";
    }
    else {
        p.textContent = "Good";
    }
});

const passwordSignUp = document.getElementById("password_sign_up");
passwordSignUp.addEventListener("input", function (e) {
    const p = document.getElementById("validation-password");
    p.textContent = strongPassword(passwordSignUp.value);
});

console.log(usersArr);


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
            return false;
        } else if (!goodPassword(password)) {
            return false;
        } else if (password != password2) {
            alert("the passwords are not eual");
            return false;
        } else if (existsEmail(email)) {
            alert("the email is not available");
            return false;
        }
        else {
            const newUser = { userName: username, password: password, email: email, snake: 0, tetris: 0 }
            usersArr.push(newUser);
            users = JSON.stringify(usersArr);
            localStorage.setItem("users", users);
            localStorage.setItem("user", newUser);
            return true;
        }
    }
    //return false;
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
    } else if (blocked(username)) {
        return false;
    }
    else if (password != user.password) {
        alert("password is not correct");
        const missedTry = { userName: username, time: new Date().getTime() };
        triesArr.push(missedTry);
        tries = JSON.stringify(triesArr);
        localStorage.setItem("tries", tries);
        return false;
    } else {
        return true;
    }
}
function goodPassword(password) {
    return printStrongNess(password) == "Strong";
}

function strongPassword(input) {
    // Checking lower alphabet in string
    let n = input.length;
    let hasLower = false, hasUpper = false,
        hasDigit = false, specialChar = false;
    let chars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
    for (let i of input) {
        if (/[a-z]/.test(i))
            hasLower = true;
        if (/[A-Z]/.test(i))
            hasUpper = true;
        if (/[0-9]/.test(i))
            hasDigit = true;
        if (chars.includes(i))
            specialChar = true;
    }
    if (hasDigit && hasLower && hasUpper && specialChar && n >= 8) {
        return "Strong";
    }
    else if ((hasLower || hasUpper || specialChar) && n >= 6) {
        return "Moderate";
    }
    else {
        return "Weak";
    }
}


function goodUserName(username) {
    if (strongUserName == true) {
        return true;
    }
    if (existsUserName(username)) {
        return false;
    }
    return true;
}

function existsUserName(username) {
    for (u of usersArr) {
        if (u.userName === username) {
            return true;
        }
    }
    return false;
}
function existsEmail(email) {
    for (u of usersArr) {
        if (u.email === email) {
            return true;
        }
    }
    return false;
}
function strongUserName(username) {
    const n = username.length;
    if (n < 6 || n > 30) {
        return false;
    }
    for (i of username) {
        if (!/[a-zA-Z0-9]/.test(i)) {
            return false;
        }
    }
    return true;
}

function blocked(username) {
    let count = 0;
    let now = new Date().getTime();
    for (t of triesArr) {
        if (t.userName == username && now - t.time > 300000) {
            count++;
        }
    }
    if (count > 10) {
        return true;
    }
    return false;
}