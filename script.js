function newPassword() {
 const characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!#$%&/()=?";
 const length = 16;
 let password = '';
 for (let i = 0; i < length; i++) {
  let randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber + 1)
 }
 document.getElementById('password').value = password
 
}

function copy() {
  navigator.clipboard.writeText(password.value)
  .then(() => {
    Toastify({
      text: "Copied Successfully!",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #ae5656, #ad4444)",
      }
      }).showToast();
  })
  .catch(err => {
    console.log('copy not successful')
  })
}