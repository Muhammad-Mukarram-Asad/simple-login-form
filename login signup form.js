import { signUpFirebase, signInFirebase } from "./login signup firebase.js";

window.signUp = function()
{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let contact_number = document.getElementById('contact').value;
    let age = document.getElementById('age').value;
    let login_container = document.getElementById('login-container');
    let form = document.getElementById('form-div');

    try{
        let user_data =  signUpFirebase({name,email, password,contact_number,age})
        alert("The user is registered successfully");
        login_container.style.display = "block";
        form.style.display = "none";

    }
    catch(e)
    {
        alert(e.message);
    }
}

window.signIn = async function()
{
    let email = document.getElementById("login_email");
  let password = document.getElementById("login_password");
  try{
    let userCredential = await signInFirebase(email.value, password.value)

    {
      alert("Successfully signed in with the Id --> "+ userCredential.user.uid);
    }
  }
  catch(e)
  {
    alert(e.message);
  }
       
}
