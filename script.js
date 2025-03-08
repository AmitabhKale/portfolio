const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [85, 82, 73, 76, 69, 59, 70, 66, 54];
const allProgressPercents = document.querySelectorAll(".progress-percent");
const hamburgerIcon = document.querySelector(".hamburger");

// const closeMenu = document.querySelector("#menu-link");

hamburgerIcon.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

window.onscroll = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.remove("active");
};

// console.log(window.scrollY, window.innerHeight);

const setProgressBarWidth = () => {
  if (window.scrollY + window.innerHeight >= progress.offsetTop) {
    allProgressPercents.forEach((el, index) => {
      el.style.width = `${progressBarPercents[index]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[index];
    });
  }
};

window.addEventListener("scroll", setProgressBarWidth);

// setProgressBarWidth();

const skillSlideShow = () => {
  // Skill Slideshow
  const skillsImages = document.querySelectorAll(".skill-img");
  let i = 1;
  // console.log(skillsImages);
  setInterval(() => {
    i++;
    const skillItem = document.querySelector(".skill-img.change");
    // console.log(skillItem);
    skillItem.classList.remove("change");

    if (i > skillsImages.length) {
      skillsImages[0].classList.add("change");
      i = 1;
    } else {
      skillItem.nextElementSibling.classList.add("change");
    }
  }, 3000);
};

skillSlideShow();
