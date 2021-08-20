firebase.auth().onAuthStateChanged(user => {
    if (user) {
        document.getElementById("login-button").hidden = true
        document.getElementById("user-name").innerHTML = "Hi "+user.displayName
        document.getElementById("user-name").href = "my-account.html"
    } else {
        document.getElementById("login-button").hidden = false
        document.getElementById("login-image").hidden = true
    }
});

document.getElementById("login-button").onclick = async function login(){
    var provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await firebase.auth()
            .signInWithRedirect(provider);

            var temp = null

            if(result.user.phoneNumber){
                temp = result.user.phoneNumber
            }

        addDoc("Users", result.user.uid, {
            name: result.user.displayName,
            email: result.user.email,
            phone: temp,
            photo: result.user.photoURL,
            uid: result.user.uid
        })
    } catch (error) {
        alert(error.message)
    }
}
