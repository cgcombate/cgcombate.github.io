// JavaScript for smooth hover effects
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('#events .card');

  cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
          card.style.transform = 'scale(1.05)';
          card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      });

      card.addEventListener('mouseleave', () => {
          card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
          card.style.transform = 'scale(1)';
          card.style.boxShadow = 'none';
      });
  });
});
