const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');

  // Get the values of the name and email inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Do something with the name and email values, for example:
  console.log(`Name: ${name}, Email: ${email}`);

  // Reset the form
  form.reset();
});