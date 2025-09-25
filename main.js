document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  document.getElementById("formMessage").textContent = 
    "Yay! Your message has been sent 💜✨";
});
