const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('button');
  const body = item.querySelector('.faq-body');

  button.addEventListener('click', () => {
    const isOpen = item.getAttribute('aria-expanded') === 'true';
    const nextState = !isOpen;

    item.setAttribute('aria-expanded', String(nextState));
    button.setAttribute('aria-expanded', String(nextState));

    if (nextState) {
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      body.style.maxHeight = 0;
    }
  });
});

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

