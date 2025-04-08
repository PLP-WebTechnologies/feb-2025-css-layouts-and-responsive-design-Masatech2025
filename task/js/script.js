document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);

            fetch('php/contact_process.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                formStatus.textContent = data.message;
                formStatus.className = data.status;

                if (data.status === "success") {
                    formStatus.style.color = "green";
                    contactForm.reset();
                } else {
                    formStatus.style.color = "red";
                }
            })
            .catch(error => {
                formStatus.textContent = "An error occurred. Please try again.";
                formStatus.style.color = "red";
            });
        });
    }
});
