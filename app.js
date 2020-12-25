//For the nav bar

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const close = document.querySelector(".close");

  //Toggle links
  close.addEventListener("click", () => {
    nav.classList.remove("nav-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (
        link.style.animation ==
        `navLinkFade 0.5s ease backwards ${index / 7 + 0.4}s`
      ) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease backwards ${
          index / 7 + 0.4
        }s`;
      }
      link.style.animation = "";
    });
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation == "") {
        link.style.animation = `navLinkFade 0.5s ease backwards ${
          index / 7 + 0.4
        }s`;
      } else {
        link.style.animation = "";
      }
    });
  });
};

navSlide();
