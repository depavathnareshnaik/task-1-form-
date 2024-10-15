document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('successMessage').style.display = 'block';
    this.reset();

    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});
