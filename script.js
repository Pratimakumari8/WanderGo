
const cards = document.querySelectorAll(".destination-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry , index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("card-show");
      }, index*300);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

cards.forEach((card) => observer.observe(card));

