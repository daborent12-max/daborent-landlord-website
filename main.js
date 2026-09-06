const faqButtons = document.querySelectorAll('.faqButton');


faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const question = button.querySelector('.faqQuestion');

    // Toggle the 'open' class for answer and button
    answer.classList.toggle('open');
    button.classList.toggle('open');

    // Toggle a class on the question to change its color
    question.classList.toggle('active');

  });
});

