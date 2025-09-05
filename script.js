document.querySelectorAll('.balloon').forEach(balloon => {
  balloon.addEventListener('click', () => {
    let message = balloon.getAttribute('data-message');
    alert(message);
    balloon.style.visibility = 'hidden'; // balloon disappears
  });
});
