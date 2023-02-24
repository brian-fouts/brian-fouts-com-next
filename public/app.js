const auth = firebase.auth();
const db = firebase.firestore();

const signInButton = document.getElementById("signInBtn");
const signOutButton = document.getElementById("signOutBtn");


const signedInArea = document.getElementById("loggedIn");
const signedOutArea = document.getElementById("loggedOut");

const userDetails = document.getElementById("userDetails");

const servicesArea = document.getElementById("services")

const provider = new firebase.auth.GoogleAuthProvider();

signInButton.onclick = () => auth.signInWithPopup(provider);
signOutButton.onclick = () => auth.signOut();

let categories = []

db.collection('services')
    .get()
    .then(snapshot => {
        categories = snapshot.docs.map(doc => {
            return doc.data().category;
        })

        servicesArea.innerHTML = categories.map(category => {
            return `<li>${category}</li>`
        })

    })

auth.onAuthStateChanged(user => {
    if(user) {
        signedInArea.hidden = false;
        signedOutArea.hidden = true;
        userDetails.innerHTML = `<div>Logged in as ${user.displayName}</div>`
    } else {
        signedInArea.hidden = true;
        signedOutArea.hidden = false;
        userDetails.innerHTML = '';
    }
})