function newPassword() {
 const characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%&/()=?";
 const length = 16;
 let password = '';
 for (let i = 0; i < length; i++) {
  let randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber + 1)
 }
 
 //refactor this into cleaner design.
 document.getElementById('password').value = password
 document.getElementById("password").style.visibility = 'visible';
 document.getElementById("password").style.opacity = '1';
 document.getElementById('copyIcon').classList.add('blend')
}

function lift() {
  let element = document.getElementById("headertext");
  element.classList.add("raise");
}
function copy() {
  navigator.clipboard.writeText(password.value)
  .then(() => {
    Toastify({
      text: "Copied Successfully!",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #4CAF50, #4CAF50)",
      }
      }).showToast();
  })
  .catch(err => {
    console.log('copy not successful')
  })
}