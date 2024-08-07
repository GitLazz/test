document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "180px") {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    var menu = document.getElementById("side-menu");
    menu.style.width = "180px";
    document.addEventListener("click", closeMenuOnClickOutside);
  }

  function closeMenu() {
    var menu = document.getElementById("side-menu");
    menu.style.width = "0";
    document.removeEventListener("click", closeMenuOnClickOutside);
  }

  function closeMenuOnClickOutside(event) {
    var menu = document.getElementById("side-menu");
    var menuIcons = document.querySelectorAll(".menu-icon");

    if (
      !menu.contains(event.target) &&
      !Array.from(menuIcons).some((icon) => icon.contains(event.target))
    ) {
      closeMenu();
    }
  }

  // Close menu when navigation link is clicked
  document.querySelectorAll(".side-menu a").forEach((anchor) => {
    anchor.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Add event listeners for both menu icons
  document.querySelectorAll(".menu-icon").forEach((icon) => {
    icon.addEventListener("click", toggleMenu);
  });

  // Add smooth scroll to top functionality for "Home" link
  document
    .querySelector('a[href="#home"]')
    .addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
