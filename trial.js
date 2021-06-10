let user = prompt("Who's there?");

if (user == "Admin") {
    let pwd = prompt("Password?");
    if (pwd == "TheMaster") {
        alert("Welcome!");
    } else if (pwd == '' || pwd == null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if (user == '' || user == null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
    