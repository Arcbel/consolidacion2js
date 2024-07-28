document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    this.reset();
});

