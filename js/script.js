document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const body = document.querySelector("body");

  // Scroll swipe animations
  links.forEach((link) => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      body.classList.add("is-transitioning");
      document.documentElement.style.scrollBehavior = "auto";

      setTimeout(() => {
        targetElement.scrollIntoView();
      }, 600); // Scroll when screen is covered

      setTimeout(() => {
        body.classList.remove("is-transitioning");
        document.documentElement.style.scrollBehavior = "smooth";
      }, 1200); // Remove class after animation is complete
    });
  });

  // Dynamic email copy button
  const emailContainer = document.querySelector(".email-container");
  const copyBtn = document.getElementById("copy-email-btn");
  const emailAddress = document.getElementById("email-address");

  if (emailContainer) {
    emailContainer.addEventListener("click", () => {
      navigator.clipboard
        .writeText(emailAddress.innerText)
        .then(() => {
          copyBtn.innerText = "COPIED!"; // TODO: fade in text
          setTimeout(() => {
            copyBtn.innerText = "COPY";
          }, 3000); // Revert back after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    });
  }

  // Toggle dark mode
  const colorInvertBtn = document.getElementById("color-invert-btn");
  if (colorInvertBtn) {
    colorInvertBtn.addEventListener("click", () => {
      document.body.classList.toggle("inverted");
    });
  }

  // Background color transition on scroll
  const projectsSection = document.getElementById("projects");
  const landingSection = document.getElementById("landing");

  const observerOptions = {
    root: null, // observes intersections relative to the viewport
    threshold: 0.2,
    // rootMargin: "-60% 0px -60% 0px", // Triggers when the element enters a 60% band from the top of the viewport // FIXME: not working on firefox
  };

  if (projectsSection && landingSection) {
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!body.classList.contains("inverted")) {
          if (entry.target.id === "projects" && entry.isIntersecting) {
            projectsSection.classList.add("projects-visible");
          }
          if (entry.target.id === "landing" && entry.isIntersecting) {
            projectsSection.classList.remove("projects-visible");
          }
        }
      });
    }, observerOptions);

    projectsObserver.observe(projectsSection);
    projectsObserver.observe(landingSection);
  }
});
