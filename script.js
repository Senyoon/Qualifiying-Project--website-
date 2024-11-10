document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.facility-card').forEach(function(card) {
        card.addEventListener('click', function() {
            const targetSection = card.getAttribute('data-target');
            const section = document.getElementById(targetSection);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});