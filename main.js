function showAlert(message) {
    alert(message);
  }
  
  const form = document.getElementById("contactForm");
  const nameDisplay = document.getElementById("nameDisplay");
  const emailDisplay = document.getElementById("emailDisplay");
  
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const formData = {
      name: form.name.value,
      email: form.email.value,
    };
  
    nameDisplay.textContent = `Name: ${formData.name}`;
    emailDisplay.textContent = `Email: ${formData.email}`;
  
    showAlert("Message sent successfully!");
  });
  
  
  
  
  
  