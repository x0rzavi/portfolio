document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const body = document.querySelector("body");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      body.classList.add("is-transitioning");
      document.documentElement.style.scrollBehavior = 'auto';

      setTimeout(() => {
        targetElement.scrollIntoView();
      }, 600); // Scroll when screen is covered

      setTimeout(() => {
        body.classList.remove("is-transitioning");
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 1200); // Remove class after animation is complete
    });
  });
});
