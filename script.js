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

function initAnimeScroll() {
  const animeElements = document.querySelectorAll("[data-anime='scroll']");
  const windowHalf = window.innerHeight * 0.6;

  if (animeElements.length) {
    function animeScroll() {
      animeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top - windowHalf;
        if (elementTop < 0) {
          element.classList.add("active-animation");
        }
      })
    }

    animeScroll();
    window.addEventListener("scroll", animeScroll);
  }
}

function initModal() {
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modal = document.querySelector("[data-modal]");
  const modalClose = document.querySelector(".close");
  const events = ["click", "touchstart"];

  function createModal() {
    modal.classList.add("active");
  }

  function closeModal(event) {
    modal.classList.remove("active");
  }

  function clickOutside(event) {
    if (event.target === this) {
      modal.classList.remove("active");
    }
  }

  events.forEach((userEvent) => {
    modalBtn.forEach((item) => {
      item.addEventListener(userEvent, createModal);
    })

    modalClose.addEventListener(userEvent, closeModal);

    modal.addEventListener(userEvent, clickOutside);
  })
}

initScroll();
initAnimeScroll();
initModal();