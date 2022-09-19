window.addEventListener("DOMContentLoaded", () => {
  const navigationToggle = document.querySelector(".navigation__toggle");
  const dropdown = document.querySelector(".dropdown");

  const revealNavigation = () => {
    dropdown.classList.toggle("dropdown__show");
  };

  navigationToggle.addEventListener("click", revealNavigation);
});
