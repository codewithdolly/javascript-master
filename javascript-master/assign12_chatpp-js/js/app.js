const sign_up=()=>{
  let email=document.getElementById("email")
  let password=document.getElementById("password")
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((result)=>{
    window.location.replace('home.html')

  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

const sign_in=()=>{
  let email=document.getElementById("login-email")
  let password=document.getElementById("login-password")
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((result)=>{
    window.location.replace('home.html')
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

const facebook_login=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
       var user=result.user;
       window.location.replace('home.html')
       console.log("user===>",user.displayName)
        
      }).catch(function(error) {
        alert("error===>",error.message)
      });
}


const google_login=()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user = result.user;
    window.location.replace('home.html')
    console.log("user===>",user.displayName)
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error===>",error.message)

  });
}
const logout=()=>{
  firebase.auth().signOut()
  .then(()=>{
   window.location.replace("login.html")
  }
  )
  .catch(()=>{

  }
  )
}