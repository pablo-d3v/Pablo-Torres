const buttons = document.querySelectorAll('nav button');
const slider = document.querySelector('.slider');

const sectionIndex = {
  home: 0,
  studies: 1,
  contact: 2
};

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    const index = sectionIndex[target];
    slider.style.transform = `translateX(-${index * 100}vw)`;
  });
});
