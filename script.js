function initScroll() {
  const links = document.querySelectorAll("a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    })
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  })
}

initScroll();