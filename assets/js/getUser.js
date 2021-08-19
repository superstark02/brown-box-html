
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("true")
        document.getElementById("user").innerHTML = `<div><img src="${user.photoURL}" /></div>`
    } else {
        document.getElementById("user").innerHTML = `<div><button class="login-btn" id="login-button" >Login</button></div>`
        console.log("false")
    }
});

document.getElementsByClassName("login-auth").onclick(e=>{
    console.log("Click");
})