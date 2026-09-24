document.getElementById("year").textContent = new Date().getFullYear();

function sendWhatsApp(event){
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
    "Namaste RK Engineering Consultant,%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Mobile: " + encodeURIComponent(phone) + "%0A" +
    "Service: " + encodeURIComponent(service) + "%0A" +
    "Project Details: " + encodeURIComponent(message);

  window.open("https://wa.me/9779852820215?text=" + text, "_blank");
}
