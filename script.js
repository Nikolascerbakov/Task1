const btnLearnMore = document.querySelector(".btn-js");
const contentText = document.querySelector(".content-content__text--state-hidden");

btnLearnMore.addEventListener("click", event => {
  if(contentText === document.querySelector(".content-content__text--state-hidden")){

    contentText.classList.remove("content-content__text--state-hidden");
    contentText.classList.add("content-content__text--state-visible");
    btnLearnMore.textContent = "Hide";
  } else { 
    contentText.classList.remove("content-content__text--state-visible");
    contentText.classList.add("content-content__text--state-hidden");
    btnLearnMore.textContent = "Learn more";
  }

});


const section = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("section--show", entry.isIntersecting)
  })
}, {
  threshold: 0.5,
})

section.forEach(section => {
  observer.observe(section)
})


