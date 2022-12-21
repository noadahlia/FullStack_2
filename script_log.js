
let users = localStorage.get("users");
if (users) {
    userArr = JSON.parse(users);
}
else {
    usersArr = [];
    users = JSON.stringify(userArr);
    localStorage.setItem("users", users);
}

function sing_up() {
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
        if(!goodUserName(username)){

        }else if(goodPassword(password)){

        }else{
            "";
            "";
        }
    }
}
function goodPassword(password){
    return true||password==5;
}
function goodUserName(username){
    return true||username==5;
}