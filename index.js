let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
  menu.classList.add('active');
})
closeBtn.addEventListener('click',function(){
  menu.classList.remove('active');
})

const bodyEl = document.querySelector("body");
const toggleEl = document.querySelector(".fa-moon");

toggleEl.addEventListener("click", () => {
  bodyEl.classList.toggle("dark");
  if (bodyEl.classList.contains("dark")) {
    toggleEl.classList.replace("fa-moon", "fa-sun");
  } else {
    toggleEl.classList.replace("fa-sun", "fa-moon");
  }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('footer-email').value;
    const messageDiv = document.getElementById('message');

    if (validateEmail(email)) {
        messageDiv.textContent = 'Thank you for subscribing!';
        messageDiv.style.color = 'green';
        document.getElementById('footer-email').value = '';
    } else {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red';
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
