
  
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: 501804933970-bi87ubp3nnqe5c0gjbmnv6t4cl3j71nh' + profile.getId()); //¡No envíes a tu backend! Use un token de identificación en su lugar.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // Esto es nulo si el alcance 'correo electrónico' no está presente.
    window.localStorage.setItem('profile', JSON.stringify(profile)) //así se guarda en el LocalStrore :)
  }

    gapi.load('auth2', function() {
      gapi.auth2.init();
      });
  
