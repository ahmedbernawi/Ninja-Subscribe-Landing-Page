document.getElementById('subscribeBtn').addEventListener('click', function () {
    const emailInput = document.querySelector('input[type="email"]');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value) {
        errorMessage.textContent = 'Error: Email field cannot be empty.';
        errorMessage.style.display = 'block';
    } else if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Error: Please enter a valid email address.';
        errorMessage.style.display = 'block';
    } else {
        successMessage.textContent = `Success! Thank you for subscribing with ${emailInput.value}!`;
        successMessage.style.display = 'block';
        emailInput.value = ''; // Clear the input after subscription
    }
});


const ninjaCharacter = document.querySelector('.ninja-character');
const welcomeText = document.querySelector('.welcome-text');

ninjaCharacter.addEventListener('mouseenter', function () {
    welcomeText.style.display = 'block'; // Show welcome text
});

ninjaCharacter.addEventListener('mouseleave', function () {
    welcomeText.style.display = 'none'; // Hide welcome text
});
