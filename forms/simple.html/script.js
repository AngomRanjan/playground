document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevents the default form submission

      // You can add your custom logic here to handle the form data
      // For example, you can collect the form data and send it to a server using AJAX
      // For simplicity, let's just log the form data to the console in this example

      const formData = new FormData(form);
      formData.forEach((value, key) => {
          console.log(`${key}: ${value}`);
      });
  });
});
